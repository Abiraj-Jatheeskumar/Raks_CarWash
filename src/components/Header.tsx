import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/Logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Car Wash & Detailing", href: "/services" },
  { name: "Auto Repair & Garage", href: "/garage-services" },
  { name: "Gallery", href: "/gallery" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-primary backdrop-blur-lg shadow-2xl border-white/10"
        : "bg-primary/95 backdrop-blur-md border-white/5"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center cursor-pointer"
            >
              <img 
                src={Logo} 
                alt="RAKS Premium Car Detailing" 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 text-sm font-semibold transition-all relative group ${
                    location.pathname === link.href ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-raks-silver to-transparent"
                    initial={{ width: location.pathname === link.href ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+94770710000" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20a%20service" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-raks-silver text-primary font-semibold hover:bg-raks-silver-light transition-all hover:shadow-glow"
              >
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-primary-foreground/10"
          >
            <nav className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block w-full text-left px-4 py-3 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-lg transition-colors ${
                    location.pathname === link.href ? "text-primary-foreground bg-primary-foreground/5" : "text-primary-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20a%20service" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-raks-silver text-primary font-semibold"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;