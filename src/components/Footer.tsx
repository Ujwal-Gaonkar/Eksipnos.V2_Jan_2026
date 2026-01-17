import { GraduationCap, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/p/Eksipnos-Education-61565664153242/", color: "hover:bg-blue-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/eksipnos-education-consultancy-opc-private-limited", color: "hover:bg-blue-700" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gradient-to-b from-card to-background border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Eksipnos</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Eksipnos Education Consultancy Pvt Ltd - Your one-stop solution for distance & online education. 
              Specializing in MBA, MCA, BBA, BCA with live classes, study materials & career support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Courses", href: "/#courses" },
                { name: "Placements", href: "/#placements" },
                { name: "Testimonials", href: "/#enquiry" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {["MBA Programs", "MCA Programs", "BBA / BCom / BCA", "Executive MBA", "Online Degrees"].map((link) => (
                <li key={link}>
                  <a href="#courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  NO 9, 2nd Floor, 27th Main, 100 Feet Ring Road, BTM Layout, Bangalore - 560029
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919901215660" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 99012 15660</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@eksipnos.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@eksipnos.in</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Eksipnos Education Consultancy Pvt Ltd. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Registered as Eksipnos Education Consultancy (OPC) Private Limited | Kumta, Karnataka | Operations: Bangalore
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};
