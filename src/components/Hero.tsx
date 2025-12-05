import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, Award, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";
import galleryPolish from "@/assets/gallery-1-polish.jpg";
import galleryInterior from "@/assets/gallery-2-interior.jpg";
import galleryCeramic from "@/assets/gallery-3-ceramic.jpg";
import galleryFoam from "@/assets/gallery-6-foam.jpg";
import galleryFull from "@/assets/gallery-5-full.jpg";
import { useState, useEffect } from "react";

const features = [
  { icon: Clock, title: "Fast Service", description: "Quick turnaround time" },
  { icon: Sparkles, title: "Quality Products", description: "Premium detailing products" },
  { icon: Award, title: "Professional Care", description: "Expert technicians" },
];

const typingWords = ["Luxury", "Excellence", "Perfection", "Style"];

const heroImages = [
  { src: heroCar, alt: "Luxury car detailing" },
  { src: galleryPolish, alt: "Premium polish service" },
  { src: galleryCeramic, alt: "Ceramic coating protection" },
  { src: galleryFoam, alt: "Professional foam wash" },
  { src: galleryFull, alt: "Complete detailing service" },
  { src: galleryInterior, alt: "Interior detailing" },
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Typing animation
  useEffect(() => {
    const currentWord = typingWords[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, isDeleting ? 80 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ 
              opacity: 0,
              scale: 1.1,
              x: direction > 0 ? 100 : -100
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              x: 0
            }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              x: direction > 0 ? -100 : 100
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-primary/90 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-primary/70" />
      </div>

      {/* Slider Navigation Arrows */}
      <motion.button
        onClick={prevImage}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-raks-silver transition-colors" />
      </motion.button>

      <motion.button
        onClick={nextImage}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, x: 5 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-raks-silver transition-colors" />
      </motion.button>

      {/* Slider Indicators */}
      <div className="absolute bottom-[380px] sm:bottom-[400px] md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentImageIndex ? 1 : -1);
              setCurrentImageIndex(index);
            }}
            whileHover={{ scale: 1.2 }}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'w-8 bg-raks-silver' 
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-raks-silver rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-raks-silver rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="inline-flex items-center gap-3 px-7 py-3.5 mb-10 text-sm font-bold bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-yellow-400/20 border-2 border-yellow-400/40 rounded-full backdrop-blur-xl shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </motion.div>
              <span className="text-yellow-400 font-extrabold tracking-wide">
                PREMIUM CAR CARE SERVICES
              </span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
          </motion.div>

          {/* Main Heading with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            {/* Bold Brand Name with Vibrant Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mb-10"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <span 
                  className="inline-block bg-gradient-to-r from-gray-100 via-raks-silver to-gray-100 bg-clip-text text-transparent relative drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Montserrat', 'Arial Black', sans-serif", 
                    fontWeight: 900,
                    letterSpacing: '0.02em',
                    textShadow: "0 0 80px rgba(192, 192, 192, 0.8), 0 0 120px rgba(255, 255, 255, 0.5)"
                  }}
                >
                  RAKS
                  {/* Glowing underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-raks-metallic via-raks-silver to-raks-metallic rounded-full shadow-lg shadow-raks-silver/50"
                  />
                </span>
              </h1>
              
              {/* Vibrant glow */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-raks-silver/30 via-white/40 to-raks-silver/30 blur-3xl -z-10"
              />
            </motion.div>

            {/* Typing Animation with Bright Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span 
                  className="text-white drop-shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Where{" "}
                </span>
                
                <span className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black drop-shadow-xl"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif", 
                      fontWeight: 900,
                      textShadow: "0 0 60px rgba(103, 232, 249, 0.8)"
                    }}
                  >
                    {displayedText}
                  </motion.span>
                  
                  {/* Bright cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    className="inline-block w-1 h-8 md:h-12 bg-gradient-to-b from-raks-silver to-raks-metallic ml-1 rounded-full shadow-lg shadow-raks-silver/50"
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-cyan-400/30 blur-2xl -z-10"
                  />
                </span>

                <span 
                  className="block mt-2 text-white drop-shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  Meets Excellence
                </span>
              </div>
            </motion.div>

            {/* Bold Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-semibold tracking-wide drop-shadow-lg mb-10"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                letterSpacing: '0.03em',
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
              }}
            >
              Premium Car Wash · Expert Detailing · Professional Care
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20a%20service" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-raks-silver via-white to-raks-metallic text-primary font-black text-lg px-10 py-7 hover:shadow-2xl transition-all duration-300 shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-raks-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            </a>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => scrollToSection("#services")}
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white/50 text-white font-bold text-lg px-10 py-7 hover:bg-white/20 hover:border-white backdrop-blur-xl transition-all duration-300 shadow-xl"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-raks-silver rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;