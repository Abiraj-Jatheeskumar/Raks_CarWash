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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-raks-silver transition-colors" />
      </motion.button>

      <motion.button
        onClick={nextImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-raks-silver transition-colors" />
      </motion.button>

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
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            {/* Animated Slogan with Word-by-Word Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mb-10 py-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-wide">
                {/* Animated words */}
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-white via-raks-silver to-gray-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                  }}
                >
                  We
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 20px rgba(255, 182, 193, 0.5)",
                        "0 0 40px rgba(255, 182, 193, 0.8)",
                        "0 0 20px rgba(255, 182, 193, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    love
                  </motion.span>
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 300,
                    letterSpacing: '0.03em',
                  }}
                >
                  your
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                  }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 30px rgba(103, 232, 249, 0.6)",
                        "0 0 50px rgba(103, 232, 249, 0.9)",
                        "0 0 30px rgba(103, 232, 249, 0.6)",
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    car
                  </motion.span>
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 300,
                    letterSpacing: '0.03em',
                  }}
                >
                  the
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 25px rgba(251, 191, 36, 0.5)",
                        "0 0 45px rgba(251, 191, 36, 0.8)",
                        "0 0 25px rgba(251, 191, 36, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    same
                  </motion.span>
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 300,
                    letterSpacing: '0.03em',
                  }}
                >
                  as
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8, type: "spring", bounce: 0.4 }}
                  className="inline-block mr-4 bg-gradient-to-br from-emerald-300 via-green-300 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: [
                        "0 0 25px rgba(52, 211, 153, 0.5)",
                        "0 0 45px rgba(52, 211, 153, 0.8)",
                        "0 0 25px rgba(52, 211, 153, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2.3, repeat: Infinity }}
                  >
                    you
                  </motion.span>
                </motion.span>
                
                <motion.span
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.0, type: "spring", bounce: 0.4 }}
                  className="inline-block bg-gradient-to-br from-white via-raks-silver to-gray-200 bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Playfair Display', 'Georgia', serif", 
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                  }}
                >
                  do
                </motion.span>
              </h1>
              
              {/* Animated decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 2.2, ease: "easeInOut" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-raks-silver to-transparent origin-center"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </motion.div>
              
              {/* Floating particles */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-2 h-2 bg-pink-300 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 right-1/4 w-3 h-3 bg-cyan-300 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  y: [-15, 15, -15],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300 rounded-full blur-sm"
              />
              
              {/* Radial glow */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-radial-gradient from-white/10 via-transparent to-transparent blur-3xl -z-10"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light tracking-wider drop-shadow-lg mb-10"
              style={{ 
                fontFamily: "'Raleway', 'Helvetica Neue', sans-serif", 
                fontWeight: 300,
                letterSpacing: '0.08em',
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
              }}
            >
              Premium Car Wash · Expert Detailing · Professional Care
            </motion.p>
          </motion.div>
        </div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
                <h3 className="font-light text-white text-lg tracking-wide" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}>{feature.title}</h3>
                <p className="text-sm text-white/70 font-light tracking-wide" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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