import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, GraduationCap, Building, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Students Counseled", color: "from-blue-500 to-indigo-600" },
  { icon: GraduationCap, value: 5000, suffix: "+", label: "Successful Admissions", color: "from-emerald-500 to-teal-600" },
  { icon: Building, value: 20, suffix: "+", label: "Partner Universities", color: "from-purple-500 to-violet-600" },
  { icon: Globe, value: 25, suffix: "+", label: "Cities Covered", color: "from-amber-500 to-orange-600" },
  { icon: Award, value: 95, suffix: "%", label: "Placement Rate", color: "from-rose-500 to-pink-600" },
  { icon: TrendingUp, value:  12, suffix: " LPA", label: "Avg. Package", color: "from-cyan-500 to-blue-600" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const OurImpact = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over a decade of transforming careers and shaping futures. 
            Here's a glimpse of our journey so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
