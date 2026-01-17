import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export const MobileStickyFooter = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/98 backdrop-blur-xl border-t border-border p-3 safe-area-inset-bottom shadow-lg"
    >
      <div className="flex gap-3">
        <motion.a
          href="tel:+919901215660"
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold shadow-lg"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </motion.a>
        <motion.a
          href="https://wa.me/919901215660?text=Hi,%20I%20want%20to%20enquire%20about%20courses"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );
};
