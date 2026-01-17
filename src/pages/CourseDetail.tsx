import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  IndianRupee,
  Briefcase,
  Star,
  FileText
} from "lucide-react";
import { getCourseById } from "@/data/courseData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categoryGradients = {
  UG: "from-emerald-500 to-teal-600",
  PG: "from-purple-500 to-indigo-600",
  MBA: "from-blue-500 to-indigo-600",
  MCA: "from-amber-500 to-orange-600",
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = getCourseById(courseId || "");

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`relative pt-28 pb-16 bg-gradient-to-br ${categoryGradients[course.category]} overflow-hidden`}>
        {/* Decorative blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Courses</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-semibold mb-4">
              {course.category === "UG" ? "Undergraduate" : course.category === "PG" ? "Postgraduate" : course.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              {course.name}
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-3xl">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">{course.students} Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span className="font-medium">{course.shortName}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Program Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Program Highlights</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-secondary/50 rounded-xl"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Curriculum</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {course.curriculum.map((sem, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`semester-${index}`}
                      className="border border-border rounded-xl px-4 data-[state=open]:bg-secondary/30"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="font-semibold text-foreground">{sem.semester}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <ul className="space-y-2">
                          {sem.subjects.map((subject, subIndex) => (
                            <li 
                              key={subIndex}
                              className="flex items-center gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Career Prospects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Career Prospects</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {course.careerProspects.map((career, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {career}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Eligibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg sticky top-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Eligibility</h2>
                </div>
                <ul className="space-y-3">
                  {course.eligibility.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Fee Structure */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <IndianRupee className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Fee Structure</h2>
                  </div>
                  <div className="space-y-3">
                    {course.fees.map((fee, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground text-sm">{fee.component}</span>
                        <span className="font-semibold text-foreground">{fee.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const enquirySection = document.getElementById('enquiry');
                    if (enquirySection) {
                      enquirySection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#enquiry');
                    }
                  }}
                  className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold mt-6 shadow-lg"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <MobileStickyFooter />
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default CourseDetail;
