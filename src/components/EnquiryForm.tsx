import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, User, Mail, Phone, BookOpen, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { analyticsEvents } from "./GoogleAnalytics";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzCidzvGUFSfqgA_Bs5uUP0lELppbQPSgEhipEXl-VxvrBK45AiQOThmpR0UPtzrndI/exec";
const WHATSAPP_NUMBER = "919901215660"; // Replace with your WhatsApp number

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
};

// Format phone number as +91 XXXXX XXXXX
const formatPhoneNumber = (value: string): string => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");
  
  // Remove leading 91 if user types it (we'll add it automatically)
  const cleanDigits = digits.startsWith("91") && digits.length > 10 
    ? digits.slice(2) 
    : digits;
  
  // Limit to 10 digits
  const limitedDigits = cleanDigits.slice(0, 10);
  
  // Format as XXXXX XXXXX
  if (limitedDigits.length <= 5) {
    return limitedDigits;
  }
  return `${limitedDigits.slice(0, 5)} ${limitedDigits.slice(5)}`;
};

// Get raw digits from formatted phone
const getRawPhone = (formatted: string): string => {
  return formatted.replace(/\D/g, "");
};

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const formStartTimeRef = useRef<number>(0);

  const courses = [
    "MBA in Digital Marketing",
    "MBA in Finance",
    "MBA in Logistics & SCM",
    "MBA in Project Management",
    "MCA in AI & ML",
    "MCA in Data Science",
    "MCA in Cyber Security",
    "MCA in Cloud Computing",
    "BBA",
    "BCom",
    "BCA",
    "BA",
    "Other",
  ];

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Name can only contain letters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return undefined;
      case "phone": {
        if (!value.trim()) return "Phone number is required";
        const digitsOnly = getRawPhone(value);
        if (digitsOnly.length < 10) return "Please enter a valid 10-digit phone number";
        return undefined;
      }
      case "course":
        if (!value) return "Please select a course";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.phone = validateField("phone", formData.phone);
    newErrors.course = validateField("course", formData.course);

    Object.keys(newErrors).forEach((key) => {
      if (!newErrors[key as keyof FormErrors]) {
        delete newErrors[key as keyof FormErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    // Track form start on first interaction
    if (!hasStartedForm && value) {
      setHasStartedForm(true);
      formStartTimeRef.current = Date.now();
      analyticsEvents.enquiryStart();
    }
    
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    handleChange("phone", formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, course: true });
    
    if (!validateForm()) {
      // Track form errors
      const errorFields = Object.keys(errors).filter(key => errors[key as keyof FormErrors]);
      analyticsEvents.formError("enquiry_form", errorFields);
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send with full phone number including country code
      const submitData = {
        ...formData,
        phone: `+91 ${getRawPhone(formData.phone)}`,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      // Track successful submission with time spent
      const timeSpent = formStartTimeRef.current 
        ? Math.round((Date.now() - formStartTimeRef.current) / 1000) 
        : 0;
      
      analyticsEvents.formSubmit("enquiry_form", formData.course);
      analyticsEvents.enquirySubmit(formData.course);
      analyticsEvents.timeOnPage(timeSpent, "enquiry_form");

      setIsSubmitted(true);
      toast.success("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      setErrors({});
      setTouched({});
      setHasStartedForm(false);
      formStartTimeRef.current = 0;
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    analyticsEvents.whatsappClick(formData.course);
    
    const message = encodeURIComponent(
      `Hi! I'm interested in learning more about your courses.\n\n` +
      `Name: ${formData.name || "[Your Name]"}\n` +
      `Email: ${formData.email || "[Your Email]"}\n` +
      `Phone: ${formData.phone ? `+91 ${formData.phone}` : "[Your Phone]"}\n` +
      `Course Interest: ${formData.course || "[Select Course]"}\n` +
      `${formData.message ? `Message: ${formData.message}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const getInputClassName = (field: string) => {
    const hasError = touched[field] && errors[field as keyof FormErrors];
    return `w-full pl-12 pr-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-all text-foreground placeholder:text-muted-foreground ${
      hasError
        ? "border-destructive focus:ring-destructive/50 focus:border-destructive"
        : "border-border focus:ring-primary/50 focus:border-primary"
    }`;
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Begin Your Journey to Success
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill out the form and our expert counselors will get in touch with you 
              within 24 hours to guide you through the admission process.
            </p>

            <div className="space-y-4">
              {[
                { icon: "✓", text: "Free career counseling session" },
                { icon: "✓", text: "Personalized course recommendations" },
                { icon: "✓", text: "Scholarship guidance & financial aid" },
                { icon: "✓", text: "100% admission assistance" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.icon}
                  </span>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-50" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Request a Callback
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={getInputClassName("name")}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-destructive text-sm mt-1 ml-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={getInputClassName("email")}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-destructive text-sm mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <span className="absolute left-12 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={`${getInputClassName("phone")} !pl-20`}
                      maxLength={11}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-destructive text-sm mt-1 ml-1">{errors.phone}</p>
                  )}
                </div>

                {/* Course Select */}
                <div>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <select
                      value={formData.course}
                      onChange={(e) => handleChange("course", e.target.value)}
                      onBlur={() => handleBlur("course")}
                      className={`${getInputClassName("course")} appearance-none cursor-pointer`}
                    >
                      <option value="">Select Course of Interest</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                  {touched.course && errors.course && (
                    <p className="text-destructive text-sm mt-1 ml-1">{errors.course}</p>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                  <textarea
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Enquiry
                    </>
                  )}
                </motion.button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">or</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <motion.button
                  type="button"
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </motion.button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to our Terms & Privacy Policy
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
