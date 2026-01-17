import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExpertGuidance } from "@/components/ExpertGuidance";
import { GetInTouch } from "@/components/GetInTouch";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQSection } from "@/components/FAQSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                We're Here to Help
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about admissions, courses, or career guidance? 
                Our expert counselors are ready to assist you on your educational journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Expert Guidance */}
        <ExpertGuidance />

        {/* Get In Touch - Map & Form */}
        <GetInTouch />

        {/* Enquiry Form */}
        <EnquiryForm />

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileStickyFooter />
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Contact;
