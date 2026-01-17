import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Star } from "lucide-react";

const accreditations = [
  {
    name: "NAAC A+ Accredited",
    description: "National Assessment and Accreditation Council",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "UGC Recognized",
    description: "University Grants Commission Approved",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "AICTE Approved",
    description: "All India Council for Technical Education",
    icon: Award,
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "WES Certified",
    description: "World Education Services Certified",
    icon: Star,
    color: "from-amber-500 to-orange-600",
  },
];

export const AccreditationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted & Verified
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Accreditations & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our partner universities are accredited by top national bodies, 
            ensuring quality education and globally recognized degrees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {accreditations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
