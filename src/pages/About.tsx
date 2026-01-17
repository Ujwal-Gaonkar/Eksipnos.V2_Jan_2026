import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OurImpact } from "@/components/OurImpact";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { PlacementsSection } from "@/components/PlacementsSection";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import { FloatingButtons } from "@/components/FloatingButtons";
import { MobileStickyFooter } from "@/components/MobileStickyFooter";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from counseling to placements.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Complete transparency in our processes, fees, and university partnerships.",
  },
  {
    icon: Heart,
    title: "Student First",
    description: "Every decision we make puts our students' success and well-being first.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We partner only with UGC-approved, NAAC-accredited universities.",
  },
  {
    icon: Users,
    title: "Support",
    description: "Dedicated support throughout your academic journey and beyond.",
  },
  {
    icon: BookOpen,
    title: "Growth",
    description: "Continuous learning and development opportunities for career growth.",
  },
];

const About = () => {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Empowering Students Since 2024
              </h1>
              <p className="text-lg text-muted-foreground">
                Eksipnos Education is a leading education consultancy dedicated to helping students 
                achieve their academic and career goals through quality distance and online education programs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize quality education by making it accessible to everyone, regardless of 
                  their location or background. We aim to bridge the gap between students and top 
                  universities, providing personalized guidance and support throughout their educational journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted education partner for students across India and beyond. 
                  We envision a future where every aspiring professional has access to quality education 
                  and career opportunities, empowering them to achieve their dreams.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <OurImpact />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Placements */}
        <PlacementsSection />

        {/* Testimonials */}
        <StudentTestimonials />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileStickyFooter />
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default About;
