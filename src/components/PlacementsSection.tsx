import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
];

export const PlacementsSection = () => {
  return (
    <section id="placements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Recruiters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Top Placement Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our students are placed in leading global organizations. 
            We maintain strong relationships with top companies across industries.
          </p>
        </motion.div>

        {/* Scrolling Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-24 w-40 md:w-48 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "95%", label: "Placement Rate" },
            { value: "₹12 LPA", label: "Avg. Package" },
            { value: "₹45 LPA", label: "Highest Package" },
            { value: "200+", label: "Hiring Partners" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
