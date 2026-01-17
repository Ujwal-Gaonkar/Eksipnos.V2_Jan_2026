import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 flex flex-col gap-3">
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-secondary text-foreground shadow-lg flex items-center justify-center hover:bg-secondary/80 transition-colors border border-border"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        href="tel:+919901215660"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919901215660?text=Hi,%20I%20want%20to%20enquire%20about%20courses%20at%20Eksipnos"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 flex items-center justify-center hover:bg-[#20BD5A] transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
};
