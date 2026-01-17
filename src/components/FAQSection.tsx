import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What courses does Eksipnos offer guidance for?",
    answer: "We provide expert guidance for a wide range of programs including MBA (Digital Marketing, Finance, Project Management, Logistics & SCM), MCA (AI & ML, Data Science, Cyber Security, Cloud Computing), and undergraduate programs like BBA, BCom, BCA, and BA from top universities.",
  },
  {
    question: "Is there any fee for counseling sessions?",
    answer: "No, our initial career counseling sessions are completely FREE. We believe in helping students make informed decisions without any financial burden. Our expert counselors will guide you through course selection, university options, and career paths.",
  },
  {
    question: "How do you ensure 100% placement assistance?",
    answer: "We have tie-ups with 200+ hiring partners across industries. Our placement assistance includes resume building, interview preparation, mock interviews, soft skills training, and direct referrals to our partner companies. We support students until they land their desired job.",
  },
  {
    question: "What is the admission process timeline?",
    answer: "The entire process typically takes 2-4 weeks. This includes initial consultation (Day 1-2), document verification (Day 3-7), university application (Day 7-14), and admission confirmation (Day 14-28). Our team handles all paperwork to make it hassle-free.",
  },
  {
    question: "Are the universities UGC/AICTE approved?",
    answer: "Yes, all our partner universities are recognized by UGC (University Grants Commission) and approved by AICTE (All India Council for Technical Education). Many are also NAAC accredited with A+ ratings, ensuring quality education and globally recognized degrees.",
  },
  {
    question: "Do you offer scholarship assistance?",
    answer: "Absolutely! We help students explore and apply for various scholarships including merit-based, need-based, and category-specific scholarships. Our counselors guide you through the eligibility criteria and application process to maximize your chances.",
  },
  {
    question: "Can I pursue distance or online education?",
    answer: "Yes, we offer guidance for both regular and distance/online programs. Many of our partner universities provide flexible online MBA and MCA programs that are perfect for working professionals who want to upskill without leaving their jobs.",
  },
  {
    question: "What documents are required for admission?",
    answer: "Basic documents include: 10th & 12th marksheets, graduation degree/marksheets (for PG courses), ID proof (Aadhar/Passport), passport-size photographs, and category certificate (if applicable). Our team provides a complete checklist and assists with document preparation.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, admission process, 
            and how we can help you achieve your educational goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="https://wa.me/919901215660?text=Hi,%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            <HelpCircle className="h-5 w-5" />
            Ask Us Anything
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
