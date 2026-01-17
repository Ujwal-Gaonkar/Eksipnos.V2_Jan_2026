import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Search, 
  FileText, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Free Consultation",
    description: "Book a free session with our expert counselors to discuss your goals",
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "02",
    icon: Search,
    title: "Course Selection",
    description: "We help you choose the right course and university based on your profile",
    color: "from-emerald-500 to-teal-600",
  },
  {
    step: "03",
    icon: FileText,
    title: "Application Process",
    description: "Complete documentation and admission formalities with our guidance",
    color: "from-purple-500 to-violet-600",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Admission Confirmed",
    description: "Get your admission letter and start your educational journey",
    color: "from-amber-500 to-orange-600",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Simple Steps
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            From Consult to Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes your journey to higher education 
            smooth and hassle-free.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-all h-full"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-primary-foreground text-sm font-bold shadow-lg`}>
                      Step {step.step}
                    </span>
                  </div>

                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mt-4 mb-5 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>

                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center gap-2"
          >
            Start Your Journey
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
