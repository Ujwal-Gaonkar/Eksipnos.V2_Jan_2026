import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our counselors",
    action: "+91 99012 15660",
    link: "tel:+919901215660",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your queries anytime",
    action: "info@eksipnos.in",
    link: "mailto:info@eksipnos.in",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses on WhatsApp",
    action: "+91 9901215660",
    link: "https://wa.me/919901215660?text=Hi, I want to enquire about courses",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
];

export const ExpertGuidance = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Get Expert Guidance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our expert counselors are just a call, email, or message away. 
            Reach out and take the first step towards your dream career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.title === "WhatsApp" ? "_blank" : undefined}
              rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl transition-all group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <method.icon className="h-10 w-10 text-primary-foreground" />
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {method.description}
              </p>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold gradient-primary text-primary-foreground">
                {method.action}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available 24/7 for your queries
          </span>
        </motion.div>
      </div>
    </section>
  );
};
