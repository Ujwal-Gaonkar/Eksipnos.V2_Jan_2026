import { motion } from "framer-motion";
import { 
  UserCheck, 
  Clock, 
  Shield, 
  Wallet, 
  Headphones, 
  Target,
  FileCheck,
  Users
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Expert Counselors",
    description: "10+ years experienced education consultants to guide your journey",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Fast-track admissions with minimal documentation hassle",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Shield,
    title: "100% Genuine",
    description: "Verified universities and authentic admission process",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    description: "Transparent pricing with no hidden charges",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    icon: Target,
    title: "Career Focused",
    description: "Programs aligned with industry demands and job market",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: FileCheck,
    title: "Scholarship Help",
    description: "Guidance for scholarships and financial aid options",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Users,
    title: "Strong Alumni",
    description: "Access to 10,000+ successful alumni network",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Eksipnos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just consultants — we're your partners in success. 
            Here's what sets us apart from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-all group relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`relative w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="relative font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
