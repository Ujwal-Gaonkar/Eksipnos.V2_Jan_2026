import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-students.jpg";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const heroSlides = [
  {
    image: heroImage,
    title: "Transform Your Career with",
    highlight: "Premium Education",
    subtitle: "Expert guidance for MBA, MCA, and undergraduate programs. We connect you with top universities and help you achieve your dreams.",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    title: "Your Success Story",
    highlight: "Starts Here",
    subtitle: "Join 5,000+ successful students who transformed their careers with our expert counseling and placement assistance.",
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    title: "World-Class Universities",
    highlight: "Await You",
    subtitle: "Get admission to top-ranked universities with 100% assistance. Your dream education is just one step away.",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    title: "Expert Guidance for",
    highlight: "Bright Futures",
    subtitle: "From course selection to placement support, we're with you at every step of your educational journey.",
  },
];

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    { icon: Users, value: "5,000+", label: "Students Placed" },
    { icon: Award, value: "20+", label: "Partner Universities" },
    { icon: BookOpen, value: "20+", label: "Programs Offered" },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);


  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 50 },
    center: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { duration: 0.3 }
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background Slider */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.img
              src={heroSlides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Animated Particles/Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-white/5"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                scale: 0.5 + Math.random() * 0.5,
              }}
              animate={{ 
                x: [null, Math.random() * 100 + "%"],
                y: [null, Math.random() * 100 + "%"],
              }}
              transition={{ 
                duration: 15 + Math.random() * 10, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-white" 
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              🎓 Your Gateway to Success
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                {heroSlides[currentSlide].title}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("courses");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: elementPosition, behavior: "smooth" });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-accent text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Programs
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("enquiry");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: elementPosition, behavior: "smooth" });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors cursor-pointer"
            >
              Book Free Consultation
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
            >
              <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
