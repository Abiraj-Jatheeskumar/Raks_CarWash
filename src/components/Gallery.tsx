import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import gallery images
import galleryPolish from "@/assets/gallery-1-polish.jpg";
import galleryInterior from "@/assets/gallery-2-interior.jpg";
import galleryCeramic from "@/assets/gallery-3-ceramic.jpg";
import galleryEngine from "@/assets/gallery-4-engine.jpg";
import galleryFull from "@/assets/gallery-5-full.jpg";
import galleryFoam from "@/assets/gallery-6-foam.jpg";

const galleryImages = [
  { id: 1, title: "Exterior Polish", category: "Polish", description: "Full body polish restoration", image: galleryPolish },
  { id: 2, title: "Interior Detail", category: "Interior", description: "Deep cleaning transformation", image: galleryInterior },
  { id: 3, title: "Ceramic Coating", category: "Coating", description: "Premium protection applied", image: galleryCeramic },
  { id: 4, title: "Engine Bay Clean", category: "Engine", description: "Spotless engine detailing", image: galleryEngine },
  { id: 5, title: "Full Detail", category: "Complete", description: "Comprehensive car care", image: galleryFull },
  { id: 6, title: "Foam Wash", category: "Wash", description: "Luxurious foam treatment", image: galleryFoam },
  { id: 7, title: "Paint Correction", category: "Polish", description: "Mirror-like finish", image: galleryPolish },
  { id: 8, title: "Premium Wash", category: "Wash", description: "Showroom-ready results", image: galleryFoam },
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);
  };

  return (
    <section id="gallery" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-raks-silver/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            See The
            <span className="text-primary block">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Browse through our gallery to see the stunning results we deliver. Every vehicle gets our premium attention to detail.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-foreground">Before & After</h3>
            <p className="text-muted-foreground">Witness the dramatic transformation</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl border-2 border-border shadow-elevated">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-destructive text-destructive-foreground text-sm font-bold rounded-full shadow-lg">
                      BEFORE
                    </div>
                    <div className="text-center p-6">
                      <div className="w-20 h-20 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">😔</span>
                      </div>
                      <p className="text-muted-foreground font-medium">{beforeAfterSlides[currentSlide].beforeText}</p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 to-raks-silver/20 flex items-center justify-center">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                      AFTER
                    </div>
                    <div className="text-center p-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">✨</span>
                      </div>
                      <p className="text-primary font-bold">{beforeAfterSlides[currentSlide].afterText}</p>
                    </div>
                  </div>
                </div>

                {/* Slide Title */}
                <div className="bg-card p-4 text-center border-t border-border">
                  <h4 className="font-display font-bold text-foreground">{beforeAfterSlides[currentSlide].title}</h4>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {beforeAfterSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
            >
              <div className={`w-full relative overflow-hidden ${index === 0 || index === 5 ? "h-[300px] md:h-full" : "h-48 md:h-56"
                }`}>
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Overlay with "View Transformation" */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    View Transformation
                  </span>
                  <span className="text-primary-foreground/70 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                    {image.description}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 text-xs font-medium text-primary-foreground bg-primary/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.category}
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Border Accent */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-raks-dark/95 backdrop-blur-lg flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary-foreground/20">
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.image}
                alt={galleryImages.find(img => img.id === selectedImage)?.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <span className="text-primary-foreground text-2xl font-display font-bold block">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </span>
                <p className="text-primary-foreground/80 mt-2">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
