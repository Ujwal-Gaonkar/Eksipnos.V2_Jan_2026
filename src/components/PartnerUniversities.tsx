import { motion } from "framer-motion";
import { Building2, MapPin, Star } from "lucide-react";

const universities = [
  { name: "Manipal University", location: "Karnataka", rating: 4.8, programs: "50+" },
  { name: "Amity University", location: "Noida", rating: 4.7, programs: "100+" },
  { name: "Amrita University", location: "Coimbatore", rating: 4.6, programs: "200+" },
  { name: "Jain University", location: "Bangalore", rating: 4.5, programs: "70+" },
  { name: "Dr. D. Y. Patil University", location: "Pune", rating: 4.7, programs: "80+" },
  
];

export const PartnerUniversities = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Partner Universities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We have partnered with top universities across India to provide 
            you with the best education opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.slice(0, 4).map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-bold text-foreground mb-2">{uni.name}</h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>{uni.location}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="font-semibold text-foreground">{uni.rating}</span>
                </div>
                <span className="text-muted-foreground">{uni.programs} Programs</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-lg"
          >
            View All Universities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
