import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye, Sparkles, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import gallery images
import galleryPolish from "@/assets/gallery-1-polish.jpg";
import galleryInterior from "@/assets/gallery-2-interior.jpg";
import galleryCeramic from "@/assets/gallery-3-ceramic.jpg";
import galleryEngine from "@/assets/gallery-4-engine.jpg";
import galleryFull from "@/assets/gallery-5-full.jpg";
import galleryFoam from "@/assets/gallery-6-foam.jpg";

const categories = ["All", "Exterior", "Interior", "Detailing", "Coating"];

const galleryImages = [
  { id: 1, title: "Exterior Polish", category: "Exterior", description: "Full body polish restoration", image: galleryPolish, featured: true },
  { id: 2, title: "Interior Detail", category: "Interior", description: "Deep cleaning transformation", image: galleryInterior, featured: true },
  { id: 3, title: "Ceramic Coating", category: "Coating", description: "Premium protection applied", image: galleryCeramic, featured: false },
  { id: 4, title: "Engine Bay Clean", category: "Interior", description: "Spotless engine detailing", image: galleryEngine, featured: false },
  { id: 5, title: "Full Detail", category: "Detailing", description: "Comprehensive car care", image: galleryFull, featured: true },
  { id: 6, title: "Foam Wash", category: "Exterior", description: "Luxurious foam treatment", image: galleryFoam, featured: false },
  { id: 7, title: "Paint Correction", category: "Detailing", description: "Mirror-like finish", image: galleryPolish, featured: false },
  { id: 8, title: "Premium Wash", category: "Exterior", description: "Showroom-ready results", image: galleryFoam, featured: false },
  { id: 9, title: "Leather Treatment", category: "Interior", description: "Restored luxury interior", image: galleryInterior, featured: false },
  { id: 10, title: "Glass Protection", category: "Coating", description: "Crystal clear windows", image: galleryCeramic, featured: false },
  { id: 11, title: "Wheel Detailing", category: "Detailing", description: "Pristine wheel finish", image: galleryFull, featured: false },
  { id: 12, title: "Chrome Polish", category: "Exterior", description: "Brilliant chrome shine", image: galleryPolish, featured: true },
];

const beforeAfterSlides = [
  { id: 1, title: "Paint Correction", beforeText: "Swirl marks & scratches", afterText: "Mirror-like finish" },
  { id: 2, title: "Interior Revival", beforeText: "Stained & worn", afterText: "Fresh & clean" },
  { id: 3, title: "Headlight Clarity", beforeText: "Foggy & yellow", afterText: "Crystal clear" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);
  };

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredImages = galleryImages.filter(img => img.featured);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-raks-silver/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-l from-raks-silver/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                          linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header with Sparkle Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-6 text-sm font-semibold text-raks-silver bg-gradient-to-r from-primary/10 via-raks-silver/10 to-primary/10 rounded-full border border-raks-silver/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            Showcase Gallery
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Witness The
            </span>
            <br />
            <span className="bg-gradient-to-r from-raks-silver via-raks-metallic to-raks-silver bg-clip-text text-transparent inline-flex items-center gap-4">
              Transformation
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✨
              </motion.span>
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Every detail perfected, every finish flawless. Explore our portfolio of premium automotive care excellence.
          </p>
        </motion.div>

        {/* Featured Showcase - Large Hero Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-display font-black text-foreground">Featured Work</h3>
              <p className="text-muted-foreground">Our most stunning transformations</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 text-primary font-semibold cursor-pointer"
            >
              <span>View Process</span>
              <Play className="w-5 h-5" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredImages.slice(0, 2).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => setSelectedImage(image.id)}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="inline-block px-4 py-1.5 mb-3 text-xs font-bold text-primary bg-raks-silver rounded-full">
                      {image.category}
                    </span>
                    <h4 className="text-3xl font-display font-black text-white mb-2">
                      {image.title}
                    </h4>
                    <p className="text-white/80 text-lg mb-4">{image.description}</p>
                    
                    <div className="flex items-center gap-3 text-raks-silver opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <Eye className="w-5 h-5" />
                      <span className="font-semibold">Click to view details</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-raks-silver/50 rounded-3xl transition-all duration-500" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before/After Slider - Compact Version */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-display font-black text-foreground mb-2">Before & After Magic</h3>
            <p className="text-muted-foreground text-lg">Dramatic transformations that speak for themselves</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-2xl bg-card backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="grid md:grid-cols-2 relative">
                    {/* Before */}
                    <div className="relative h-72 md:h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden group">
                      {/* Animated Badge */}
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-6 left-6 px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-black rounded-full shadow-xl z-10 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        BEFORE
                      </motion.div>
                      
                      <div className="text-center p-8 relative z-10">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mx-auto mb-6 border-4 border-gray-500/30"
                        >
                          <span className="text-5xl">😔</span>
                        </motion.div>
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-300 font-semibold text-lg"
                        >
                          {beforeAfterSlides[currentSlide].beforeText}
                        </motion.p>
                      </div>

                      {/* Animated particles */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative h-72 md:h-96 bg-gradient-to-br from-primary via-primary/90 to-raks-silver/50 flex items-center justify-center overflow-hidden group">
                      {/* Animated Badge */}
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="absolute top-6 left-6 px-5 py-2.5 bg-gradient-to-r from-raks-silver to-raks-metallic text-primary text-sm font-black rounded-full shadow-xl z-10 flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        AFTER
                      </motion.div>
                      
                      <div className="text-center p-8 relative z-10">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-24 h-24 rounded-full bg-gradient-to-br from-raks-silver to-white flex items-center justify-center mx-auto mb-6 border-4 border-white/50 shadow-2xl"
                        >
                          <span className="text-5xl">✨</span>
                        </motion.div>
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-white font-bold text-xl"
                        >
                          {beforeAfterSlides[currentSlide].afterText}
                        </motion.p>
                      </div>

                      {/* Shine particles */}
                      <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              scale: [0, 1.5, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5 + Math.random(),
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Divider Arrow */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-raks-silver flex items-center justify-center shadow-2xl z-20 border-4 border-background"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Slide Title */}
                  <div className="bg-gradient-to-r from-primary/5 via-raks-silver/5 to-primary/5 p-6 text-center border-t border-border/50">
                    <h4 className="font-display font-black text-2xl text-foreground">{beforeAfterSlides[currentSlide].title}</h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-3">
                {beforeAfterSlides.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-primary to-raks-silver w-12' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-raks-silver to-raks-metallic text-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-display font-black text-foreground mb-2">Complete Portfolio</h3>
            <p className="text-muted-foreground text-lg">Filter by service category</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-raks-silver text-white shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Masonry Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredImages.map((image, index) => {
                const isLarge = index % 7 === 0 || index % 7 === 4;
                
                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image.id)}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                      isLarge ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                  >
                    {/* Image Container */}
                    <div className={`w-full relative overflow-hidden ${
                      isLarge ? "h-72 md:h-full" : "h-56 md:h-64"
                    }`}>
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      {/* Category Badge - Always visible */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold text-primary bg-raks-silver rounded-full shadow-lg"
                      >
                        {image.category}
                      </motion.div>

                      {/* Hover Content */}
                      <motion.div
                        className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        <h4 className="text-white font-display font-black text-xl mb-2">
                          {image.title}
                        </h4>
                        <p className="text-white/80 text-sm mb-4">{image.description}</p>
                        
                        <div className="flex items-center gap-2 text-raks-silver">
                          <ZoomIn className="w-5 h-5" />
                          <span className="font-semibold text-sm">Click to enlarge</span>
                        </div>
                      </motion.div>

                      {/* View Icon */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-raks-silver/20 backdrop-blur-md flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                      >
                        <Eye className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-4 border-transparent group-hover:border-raks-silver/60 rounded-2xl transition-all duration-500"
                      whileHover={{ borderColor: "rgba(192, 192, 192, 0.8)" }}
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-raks-silver/0 border-r-transparent group-hover:border-t-raks-silver/80 transition-all duration-500" />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5000+", label: "Projects Completed", icon: "🚗" },
            { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
            { value: "15+", label: "Years Experience", icon: "🏆" },
            { value: "50+", label: "Services Offered", icon: "✨" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Decorative gradient orb */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl -z-0" />
              
              <div className="text-4xl mb-3 relative z-10">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-display font-black bg-gradient-to-r from-primary to-raks-silver bg-clip-text text-transparent mb-2 relative z-10">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20see%20more%20of%20your%20work" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-raks-silver text-white hover:shadow-2xl transition-all group"
            >
              <span className="mr-2">Request Your Transformation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all shadow-2xl group"
            >
              <X className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Navigation Arrows */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                setSelectedImage(galleryImages[prevIndex].id);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all shadow-xl"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </motion.button>

            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                const nextIndex = (currentIndex + 1) % galleryImages.length;
                setSelectedImage(galleryImages[nextIndex].id);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all shadow-xl"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br from-gray-900 to-black">
                {/* Image */}
                <img
                  src={galleryImages.find(img => img.id === selectedImage)?.image}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 text-xs font-bold text-primary bg-raks-silver rounded-full">
                        {galleryImages.find(img => img.id === selectedImage)?.category}
                      </span>
                      <div className="flex items-center gap-2 text-raks-silver">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Premium Detail</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-3">
                      {galleryImages.find(img => img.id === selectedImage)?.title}
                    </h3>
                    
                    <p className="text-white/70 text-lg mb-4">
                      {galleryImages.find(img => img.id === selectedImage)?.description}
                    </p>

                    <a 
                      href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20this%20service" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button className="bg-gradient-to-r from-raks-silver to-raks-metallic text-primary hover:shadow-2xl">
                        Book This Service
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  </motion.div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-raks-silver/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
