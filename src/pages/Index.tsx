import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { AccreditationsSection } from "@/components/AccreditationsSection";
import { PartnerUniversities } from "@/components/PartnerUniversities";
import { OurImpact } from "@/components/OurImpact";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { PlacementsSection } from "@/components/PlacementsSection";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <CoursesSection />
        <AccreditationsSection />
        <PartnerUniversities />
        <OurImpact />
        <WhyChooseUs />
        <ProcessSection />
        <PlacementsSection />
        <StudentTestimonials />
        <EnquiryForm />
        <FAQSection />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
      
      {/* Mobile Sticky Footer - only visible on small screens */}
      <MobileStickyFooter />
      
      {/* Spacer for mobile sticky footer */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
