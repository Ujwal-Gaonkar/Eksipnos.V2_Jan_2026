import { ThemeToggle } from "./ThemeToggle";
import { GraduationCap, Menu, X, Home, BookOpen, Briefcase, Users, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/#home", icon: Home, isRoute: false },
    { name: "Courses", href: "/#courses", icon: BookOpen, isRoute: false },
    { name: "Placements", href: "/#placements", icon: Briefcase, isRoute: false },
    { name: "About", href: "/about", icon: Users, isRoute: true },
    { name: "Contact", href: "/contact", icon: Phone, isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute: boolean) => {
    if (isRoute) {
      setIsOpen(false);
      return; // Let React Router handle it
    }

    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace("/#", "");
    
    const scrollToElement = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    };
    
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/");
      // Use a longer timeout to ensure page renders
      setTimeout(scrollToElement, 500);
    } else {
      // Small delay to let mobile menu close first
      setTimeout(scrollToElement, 100);
    }
  };

  const isActive = (href: string, isRoute: boolean) => {
    if (isRoute) {
      return location.pathname === href;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-1 left-2 right-2 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link to="/" className="flex items-center gap-2">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Eksipnos</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.isRoute);
              return link.isRoute ? (
                <motion.div key={link.name} whileHover={{ y: -2 }}>
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className="relative px-4 py-2 rounded-lg font-medium transition-colors text-muted-foreground hover:text-foreground"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="hidden md:block gradient-accent text-white px-5 py-2 rounded-lg font-semibold shadow-lg"
              >
                Get Started
              </Link>
            </motion.div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav - Slide Down */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg rounded-b-xl"
            >
              <div className="py-4 flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href, link.isRoute);
                  return link.isRoute ? (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        <link.icon className="h-5 w-5" />
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-muted-foreground hover:bg-secondary"
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="gradient-accent text-white px-5 py-3 rounded-xl font-semibold w-full text-center mt-2 block"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
