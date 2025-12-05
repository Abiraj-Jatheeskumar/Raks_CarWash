import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Paintbrush,
  Hammer,
  Shield,
  Zap,
  Droplet,
  Scan,
  Wrench,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  Star,
  Award,
  Settings,
} from "lucide-react";

const bodyworkServices = [
  {
    id: "dent-removal",
    icon: Hammer,
    title: "Dent & Ding Removal",
    description: "Professional dent removal using paintless dent repair (PDR) and traditional methods.",
    features: [
      "Paintless dent repair (PDR)",
      "Traditional dent removal",
      "Hail damage repair",
      "Door ding removal",
      "Crease & crumple repair",
      "Panel beating services"
    ],
    price: "From LKR 3,000",
    duration: "1-3 hours",
    warranty: "12 months warranty"
  },
  {
    id: "full-body-paint",
    icon: Paintbrush,
    title: "Full Body Paint",
    description: "Complete vehicle repainting with premium quality automotive paint and flawless finish.",
    features: [
      "Color matching & consultation",
      "Complete surface preparation",
      "Primer application",
      "Multiple paint coats",
      "Clear coat protection",
      "Final polishing & detailing"
    ],
    price: "From LKR 85,000",
    duration: "5-7 days",
    warranty: "24 months warranty"
  },
  {
    id: "panel-paint",
    icon: Paintbrush,
    title: "Panel Repainting",
    description: "Individual panel painting with perfect color matching to your existing paint.",
    features: [
      "Single panel repainting",
      "Color code matching",
      "Blend-in techniques",
      "Surface preparation",
      "Quality paint materials",
      "Professional finishing"
    ],
    price: "From LKR 12,000",
    duration: "1-2 days",
    warranty: "12 months warranty"
  },
  {
    id: "scratch-repair",
    icon: Zap,
    title: "Scratch & Chip Repair",
    description: "Expert repair of scratches, paint chips, and surface imperfections.",
    features: [
      "Deep scratch repair",
      "Paint chip filling",
      "Touch-up painting",
      "Clear coat restoration",
      "Swirl mark removal",
      "Surface leveling"
    ],
    price: "From LKR 2,500",
    duration: "2-4 hours",
    warranty: "6 months warranty"
  },
  {
    id: "rust-treatment",
    icon: Droplet,
    title: "Rust Removal & Treatment",
    description: "Professional rust removal, treatment, and prevention to protect your vehicle.",
    features: [
      "Rust spot removal",
      "Surface rust treatment",
      "Deep rust repair",
      "Anti-rust coating",
      "Panel replacement (if needed)",
      "Preventive treatment"
    ],
    price: "From LKR 4,000",
    duration: "1-3 days",
    warranty: "12 months warranty"
  },
  {
    id: "plastic-restoration",
    icon: Sparkles,
    title: "Plastic & Trim Restoration",
    description: "Restoration of faded plastic trims, bumpers, and exterior plastic components.",
    features: [
      "Trim restoration & painting",
      "Plastic buffing",
      "UV protection coating",
      "Black trim renewal",
      "Chrome restoration",
      "Rubber seal treatment"
    ],
    price: "From LKR 3,500",
    duration: "2-4 hours",
    warranty: "6 months warranty"
  },
  {
    id: "collision-repair",
    icon: Settings,
    title: "Collision Repair",
    description: "Complete collision damage repair from minor bumps to major accidents.",
    features: [
      "Frame straightening",
      "Panel replacement",
      "Structural repairs",
      "Body alignment",
      "Accident damage repair",
      "Insurance claim support"
    ],
    price: "Quote Based",
    duration: "3-10 days",
    warranty: "12 months warranty"
  },
  {
    id: "custom-paint",
    icon: Award,
    title: "Custom Paint & Graphics",
    description: "Custom paint jobs, graphics, and artistic designs for unique vehicle styling.",
    features: [
      "Custom paint designs",
      "Racing stripes",
      "Graphic decals",
      "Airbrushing",
      "Metallic & pearl finishes",
      "Design consultation"
    ],
    price: "Quote Based",
    duration: "5-14 days",
    warranty: "24 months warranty"
  },
  {
    id: "protective-coating",
    icon: Shield,
    title: "Paint Protection Coating",
    description: "Advanced paint protection with ceramic coating and paint protection film.",
    features: [
      "Ceramic coating application",
      "Paint protection film (PPF)",
      "Hydrophobic coating",
      "UV protection",
      "Scratch resistance",
      "Long-lasting shine"
    ],
    price: "From LKR 35,000",
    duration: "2-3 days",
    warranty: "36 months warranty"
  }
];

const specialFeatures = [
  {
    icon: Star,
    title: "Color Matching Expertise",
    description: "Advanced color matching technology"
  },
  {
    icon: Award,
    title: "Premium Paint Brands",
    description: "Only top-quality automotive paints"
  },
  {
    icon: Shield,
    title: "Warranty Coverage",
    description: "Extended warranty on all work"
  },
  {
    icon: CheckCircle2,
    title: "Insurance Approved",
    description: "We work with all major insurers"
  }
];

const BodyworkPaintPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/gallery-3-ceramic.jpg"
            alt="Professional bodywork and paint"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-[#0a0f1a]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-raks-silver via-white to-raks-silver px-8 py-3 rounded-full shadow-2xl">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                <span className="font-bold text-primary tracking-wider">BODYWORK & PAINT SPECIALISTS</span>
                <Paintbrush className="w-6 h-6 text-primary" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight"
            >
              <span className="text-white">Expert Body Repairs &</span>
              <br />
              <span className="bg-gradient-to-r from-raks-silver via-white to-raks-silver bg-clip-text text-transparent">
                Premium Paint Services
              </span>
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 w-32 bg-gradient-to-r from-transparent via-raks-silver to-transparent rounded-full mx-auto mb-6"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg text-white/90 leading-relaxed max-w-5xl mx-auto mb-8"
            >
              Our body shop and paint facility is dedicated to restoring your vehicle to its original factory standard — from minor scratches and dents to complete accident repairs. With advanced panel-repair techniques, high-quality paint booths, and precision computerized colour matching, we deliver a flawless, seamless finish every time. Each repair is performed by skilled technicians who meticulously reshape, refinish, and repaint your vehicle with expert craftsmanship. Whether it's a small correction or a full body restoration, we revive the shine, smoothness, and structural integrity of your car. At Raks, we don't just repair damage — we professionally restore confidence in your vehicle.
            </motion.p>
          </motion.div>

          {/* Special Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mt-12"
          >
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl p-4 text-center hover:bg-white/15 hover:border-raks-silver/50 transition-all shadow-xl hover:shadow-2xl group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-raks-silver/30 to-white/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-raks-silver" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-raks-silver transition-colors">{feature.title}</h3>
                <p className="text-xs text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-4">
              Our Bodywork & Paint Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive body repair and painting solutions to restore and enhance your vehicle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyworkServices.map((service, index) => {
              const ServiceIcon = service.icon;
              const isSelected = selectedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                  className="cursor-pointer"
                >
                  <div className={`group relative bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    isSelected ? 'border-primary' : 'border-transparent hover:border-primary/30'
                  }`}>
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl -z-0" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                        <ServiceIcon className="w-7 h-7 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                      </div>

                      {/* Features (shown when selected) */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 pt-4 border-t border-gray-200"
                        >
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                          <div className="pt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                            <Shield className="w-4 h-4" />
                            {service.warranty}
                          </div>
                        </motion.div>
                      )}

                      {/* CTA */}
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary">
                            {isSelected ? 'Hide Details' : 'View Details'}
                          </span>
                          <ArrowRight className={`w-5 h-5 text-primary transition-transform ${
                            isSelected ? 'rotate-90' : 'group-hover:translate-x-2'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-raks-navy-dark text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
              Why Choose Our Bodywork & Paint Services?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Professional craftsmanship and attention to detail in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Expert Technicians",
                description: "Highly skilled and certified body repair specialists"
              },
              {
                icon: Paintbrush,
                title: "Premium Materials",
                description: "Top-quality paints and materials from leading brands"
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                description: "Extended warranty coverage on all bodywork and paint"
              },
              {
                icon: Wrench,
                title: "Modern Equipment",
                description: "State-of-the-art tools and painting booth facilities"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
              >
                <item.icon className="w-12 h-12 text-raks-silver mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary via-primary to-raks-navy-dark rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-raks-silver/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-black text-primary-foreground mb-4">
                Ready to Restore Your Vehicle?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote and consultation on your bodywork and paint needs
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20a%20quote%20for%20bodywork%20services" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-raks-silver text-primary font-bold hover:bg-raks-silver-light transition-all hover:shadow-glow"
                  >
                    WhatsApp Us
                  </Button>
                </a>
                <a href="tel:+94770710000">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-bold hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    077 071 0000
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BodyworkPaintPage;
