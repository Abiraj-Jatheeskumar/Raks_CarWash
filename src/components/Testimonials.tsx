import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Murugan Selvam",
    role: "BMW X5 Owner",
    service: "Ceramic Coating",
    rating: 5,
    text: "Absolutely incredible service! My BMW looks better than when I first bought it from the showroom. The ceramic coating they applied has made maintaining the shine effortless - water just beads right off. The team at RAKS went above and beyond, explaining every step of the process and ensuring I was completely satisfied. Worth every rupee and then some!",
    avatar: "MS",
  },
  {
    name: "Priya Nadesan",
    role: "Mercedes C-Class Owner",
    service: "Full Interior Detail",
    rating: 5,
    text: "RAKS transformed my interior from dull and tired to showroom quality in just a few hours. The attention to detail is absolutely unmatched - they cleaned areas I didn't even know existed! The leather conditioning brought my seats back to life, and the cabin smells amazing. I've tried many detailers over the years, but RAKS is now my go-to for all my car care needs.",
    avatar: "PN",
  },
  {
    name: "Karthik Rajan",
    role: "Audi A6 Owner",
    service: "Premium Package",
    rating: 5,
    text: "Best car wash experience I've ever had, hands down. The staff is incredibly professional and knowledgeable about different paint types and finishes. They took the time to assess my Audi's specific needs and recommended the perfect treatment. The results speak for themselves - my car has never looked this good. Highly recommend their premium package!",
    avatar: "KR",
  },
  {
    name: "Nila Kandasamy",
    role: "Tesla Model 3 Owner",
    service: "Ceramic Coating",
    rating: 5,
    text: "They really understand modern paint protection for electric vehicles. My Tesla's pearl white finish is notoriously difficult to maintain, but after their ceramic coating treatment, it's absolutely flawless. The hydrophobic properties are incredible - rain just sheets off! They even took extra care around the charging port area. These guys know their stuff!",
    avatar: "NK",
  },
  {
    name: "Rajan Thambiah",
    role: "Porsche 911 Owner",
    service: "Full Body Polish",
    rating: 5,
    text: "I've tried many detailers for my Porsche, but RAKS is on another level entirely. Their full body polish brought back the original luster that I thought was lost forever after years of daily driving. The mirror finish they achieved is breathtaking - I can literally see my reflection in the paint. The paint correction work was meticulous and professional.",
    avatar: "RT",
  },
  {
    name: "Lakshmi Sivarajah",
    role: "Range Rover Owner",
    service: "Ultimate Package",
    rating: 5,
    text: "Exceptional service and results that exceeded all my expectations! The team at RAKS treats every car like their own personal vehicle. My Range Rover came back looking like it just rolled off the assembly line. The ultimate package is absolutely worth it - interior, exterior, engine bay, everything was perfection. I won't go anywhere else for my car care needs.",
    avatar: "LS",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const totalPages = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section id="reviews" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-raks-navy-dark" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-raks-silver/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-raks-silver/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-raks-silver bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-primary-foreground mb-6">
            What Our Customers
            <span className="text-raks-silver block">Say About Us</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about their premium car care experience at RAKS.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500 shadow-elevated">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-12 h-12 text-raks-silver/20" />
                    </div>

                    {/* Service Badge */}
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-primary bg-raks-silver rounded-full">
                      {testimonial.service}
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-raks-silver text-raks-silver" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-primary-foreground/80 mb-6 leading-relaxed line-clamp-5 group-hover:line-clamp-none transition-all">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-raks-silver to-raks-metallic flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-primary">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-primary-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-raks-silver/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-raks-silver w-8' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="text-center mt-4">
              <span className="text-xs text-primary-foreground/50">Auto-playing • Click arrows to navigate manually</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/10"
        >
          {[
            { value: "5000+", label: "Happy Customers" },
            { value: "4.9", label: "Average Rating" },
            { value: "10+", label: "Years Experience" },
            { value: "15000+", label: "Cars Detailed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-black text-raks-silver mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
