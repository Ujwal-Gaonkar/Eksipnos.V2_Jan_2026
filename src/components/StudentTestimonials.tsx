import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    degree: "MBA in Digital Marketing",
    company: "Google",
    package: "₹18 LPA",
    image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "Eksipnos made my MBA dream come true. Their guidance helped me choose the right specialization and land a job at Google!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    degree: "MCA in AI & Machine Learning",
    company: "Microsoft",
    package: "₹22 LPA",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The counselors understood my goals perfectly. From course selection to placement prep, they were with me every step.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    degree: "BBA",
    company: "Deloitte",
    package: "₹8 LPA",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "As a first-generation college student, I was clueless. Eksipnos held my hand throughout the process. Forever grateful!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    degree: "MBA in Finance",
    company: "Goldman Sachs",
    package: "₹28 LPA",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "Best decision of my life was to consult Eksipnos. Their network and guidance are unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    degree: "MCA in Cyber Security",
    company: "Amazon",
    package: "₹24 LPA",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "From confused student to Amazon employee - Eksipnos transformed my career trajectory completely!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    degree: "BCA",
    company: "Flipkart",
    package: "₹12 LPA",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    testimonial: "The personalized attention and career counseling I received was exceptional. Highly recommend to everyone!",
    rating: 5,
  },
];

export const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Number of cards to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 2;
      return 1;
    }
    return 2;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCount;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Student Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with our guidance.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 bg-card/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-card transition-colors border border-border"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 bg-card/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-card transition-colors border border-border"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8 md:mx-12">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.name}
                  className={`flex-shrink-0 ${visibleCount === 2 ? 'w-[calc(50%-12px)]' : 'w-full'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all relative h-full">
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      "{item.testimonial}"
                    </p>

                    <div className="flex items-start gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground truncate">{item.name}</h4>
                        <p className="text-sm text-muted-foreground truncate">{item.degree}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
                          <Building2 className="h-4 w-4 text-primary" />
                          {item.company}
                        </div>
                        <span className="text-xs font-bold text-gradient">{item.package}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
