import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Settings,
  Gauge,
  Cog,
  CircleDot,
  Battery,
  Zap,
  Thermometer,
  Wind,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  AlertTriangle,
  Hammer,
  Cpu,
  Disc,
  Fuel,
  Droplets,
} from "lucide-react";
import galleryEngine from "@/assets/gallery-4-engine.jpg";
import aboutWorkshop from "@/assets/about-workshop.jpg";

const garageServices = [
  {
    id: "engine-repair",
    icon: Cog,
    title: "Engine Repair & Maintenance",
    description: "Complete engine diagnostics, repairs, and regular maintenance to keep your vehicle running smoothly.",
    features: [
      "Engine diagnostics & troubleshooting",
      "Oil change & filter replacement",
      "Timing belt replacement",
      "Engine tune-ups",
      "Head gasket repairs",
      "Spark plug replacement"
    ],
    price: "From LKR 5,000",
    duration: "2-4 hours",
    warranty: "6 months warranty"
  },
  {
    id: "brake-service",
    icon: Disc,
    title: "Brake System Service",
    description: "Expert brake inspection, repair, and replacement for optimal safety and performance.",
    features: [
      "Brake pad replacement",
      "Brake rotor resurfacing",
      "Brake fluid flush",
      "ABS system diagnostics",
      "Emergency brake adjustment",
      "Brake line inspection"
    ],
    price: "From LKR 4,500",
    duration: "1-3 hours",
    warranty: "12 months warranty"
  },
  {
    id: "suspension",
    icon: Settings,
    title: "Suspension & Steering",
    description: "Complete suspension and steering system repairs for a smooth and comfortable ride.",
    features: [
      "Shock absorber replacement",
      "Strut replacement",
      "Ball joint replacement",
      "Tie rod end replacement",
      "Wheel alignment",
      "Power steering service"
    ],
    price: "From LKR 6,000",
    duration: "2-5 hours",
    warranty: "6 months warranty"
  },
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical System Repair",
    description: "Professional electrical diagnostics and repairs for all vehicle electrical components.",
    features: [
      "Battery testing & replacement",
      "Alternator repair",
      "Starter motor repair",
      "Wiring harness repair",
      "Fuse box inspection",
      "Lighting system repair"
    ],
    price: "From LKR 3,500",
    duration: "1-4 hours",
    warranty: "6 months warranty"
  },
  {
    id: "ac-service",
    icon: Wind,
    title: "AC System Service",
    description: "Air conditioning system inspection, repair, and recharge for optimal cooling performance.",
    features: [
      "AC gas recharge",
      "Compressor repair",
      "Condenser cleaning",
      "Evaporator inspection",
      "AC filter replacement",
      "Leak detection & repair"
    ],
    price: "From LKR 4,000",
    duration: "2-3 hours",
    warranty: "3 months warranty"
  },
  {
    id: "transmission",
    icon: Gauge,
    title: "Transmission Service",
    description: "Complete transmission inspection, repair, and fluid service for smooth gear changes.",
    features: [
      "Transmission fluid change",
      "Clutch replacement",
      "Gearbox inspection",
      "Transmission diagnostics",
      "CVT service",
      "Automatic transmission repair"
    ],
    price: "From LKR 7,500",
    duration: "3-6 hours",
    warranty: "12 months warranty"
  },
  {
    id: "exhaust",
    icon: Fuel,
    title: "Exhaust System Repair",
    description: "Exhaust system inspection, repair, and replacement for better performance and emissions.",
    features: [
      "Muffler replacement",
      "Catalytic converter repair",
      "Exhaust pipe welding",
      "Oxygen sensor replacement",
      "Emission testing",
      "Performance exhaust installation"
    ],
    price: "From LKR 3,000",
    duration: "1-3 hours",
    warranty: "6 months warranty"
  },
  {
    id: "cooling-system",
    icon: Thermometer,
    title: "Cooling System Service",
    description: "Radiator and cooling system maintenance to prevent engine overheating.",
    features: [
      "Radiator flush & fill",
      "Thermostat replacement",
      "Water pump repair",
      "Radiator hose replacement",
      "Coolant leak repair",
      "Fan clutch service"
    ],
    price: "From LKR 3,500",
    duration: "1-2 hours",
    warranty: "6 months warranty"
  },
  {
    id: "wheel-tire",
    icon: CircleDot,
    title: "Wheel & Tire Services",
    description: "Complete tire and wheel services including balancing, alignment, and replacement.",
    features: [
      "Tire rotation & balancing",
      "Wheel alignment (2D/3D)",
      "Tire replacement",
      "Puncture repair",
      "Wheel refinishing",
      "TPMS service"
    ],
    price: "From LKR 2,500",
    duration: "1-2 hours",
    warranty: "3 months warranty"
  },
  {
    id: "diagnostics",
    icon: Cpu,
    title: "Computer Diagnostics",
    description: "Advanced computerized diagnostics to identify and resolve vehicle issues quickly.",
    features: [
      "OBD-II scanning",
      "ECU diagnostics",
      "Error code reading",
      "Performance testing",
      "Emission diagnostics",
      "System calibration"
    ],
    price: "From LKR 2,000",
    duration: "30-60 minutes",
    warranty: "N/A"
  },
  {
    id: "fuel-system",
    icon: Droplets,
    title: "Fuel System Service",
    description: "Fuel system cleaning, repair, and optimization for better fuel efficiency.",
    features: [
      "Fuel injector cleaning",
      "Fuel pump replacement",
      "Fuel filter replacement",
      "Fuel line inspection",
      "Throttle body cleaning",
      "Fuel system diagnostics"
    ],
    price: "From LKR 4,000",
    duration: "2-3 hours",
    warranty: "6 months warranty"
  },
  {
    id: "general-maintenance",
    icon: Hammer,
    title: "General Maintenance",
    description: "Routine maintenance services to keep your vehicle in top condition.",
    features: [
      "Multi-point inspection",
      "Fluid top-ups",
      "Filter replacements",
      "Belt & hose inspection",
      "Battery service",
      "Safety inspection"
    ],
    price: "From LKR 2,500",
    duration: "1-2 hours",
    warranty: "3 months warranty"
  }
];

const emergencyServices = [
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Service",
    description: "Round-the-clock emergency repair service"
  },
  {
    icon: Phone,
    title: "Mobile Mechanic",
    description: "We come to you for on-site repairs"
  },
  {
    icon: ShieldCheck,
    title: "Warranty Protected",
    description: "All repairs backed by warranty"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick and efficient service"
  }
];

const GarageServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-[#0f1729]">
        {/* Simple Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-raks-silver to-white px-8 py-3 rounded-full shadow-2xl">
                <Wrench className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary tracking-wider">AUTOMOTIVE REPAIR SPECIALISTS</span>
              </div>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-black mb-8 leading-tight text-center"
            >
              <span className="text-white">Complete Auto Repair & Maintenance</span>
            </motion.h1>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 w-32 bg-gradient-to-r from-transparent via-raks-silver to-transparent rounded-full mx-auto mb-10"
            />
            
            {/* Description - Full Width */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <p className="text-base md:text-lg text-white/90 leading-relaxed text-center max-w-6xl mx-auto">
                Our auto repair division offers reliable, transparent, and expert mechanical services for all types of vehicles. With modern diagnostic systems, skilled technicians, and a commitment to quality, we ensure your car runs smoothly and safely. From routine maintenance to engine repairs, brake service, suspension work, and electrical troubleshooting, every job is handled with precision and care. We focus on identifying the real issue, explaining it clearly to the customer, and providing long-lasting solutions — not quick fixes. At Raks, your vehicle's performance, reliability, and safety always come first.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-raks-silver to-white text-primary font-bold hover:shadow-2xl hover:shadow-raks-silver/50 transition-all"
                  onClick={() => document.querySelector('#services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20garage%20service" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-white/10 backdrop-blur-md text-white font-bold hover:bg-white/20 border-2 border-white/30 hover:border-white shadow-lg"
                  >
                    WhatsApp Us
                    <Phone className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img 
                  src={galleryEngine} 
                  alt="Professional Engine Service"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-5 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-raks-silver flex items-center justify-center">
                        <Cog className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">Expert Diagnostics</p>
                        <p className="text-white/80 text-sm">State-of-the-art Equipment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Emergency Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Fast & Reliable Service
              </h3>
              
              <div className="grid grid-cols-1 gap-5">
                {emergencyServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border-2 border-primary/20 hover:border-primary/40 shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-raks-silver/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-4">
              Our Garage Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive automotive repair and maintenance services performed by certified technicians using quality parts and equipment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {garageServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/30 hover:border-primary/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/25 rounded-full blur-3xl -z-0" />
                
                {/* Icon */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">{service.warranty}</div>
                    <div className="text-xs text-muted-foreground">{service.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 relative z-10">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <button
                      onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      {selectedService === service.id ? 'Show less' : `+${service.features.length - 4} more`}
                    </button>
                  )}
                </div>

                {/* Expanded Features */}
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 mb-6"
                  >
                    {service.features.slice(4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-raks-silver flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
                  <a href="tel:+94770710000" className="flex-1">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </a>
                  <a href={`https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer" className="flex-1 ml-3">
                    <Button 
                      size="sm"
                      className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg"
                    >
                      WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with Image */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Why Choose RAKS Auto Repair?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Experience the difference of professional automotive care with certified technicians and advanced technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Certified Technicians",
                  description: "Our mechanics are ASE certified and undergo regular training to stay updated with the latest automotive technologies.",
                  icon: ShieldCheck
                },
                {
                  title: "Quality Parts",
                  description: "We use only OEM or high-quality aftermarket parts to ensure durability and performance.",
                  icon: Settings
                },
                {
                  title: "Advanced Equipment",
                  description: "State-of-the-art diagnostic tools and equipment for accurate problem identification and efficient repairs.",
                  icon: Cpu
                },
                {
                  title: "Transparent Pricing",
                  description: "No hidden fees. We provide detailed estimates before starting any work on your vehicle.",
                  icon: CheckCircle2
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-raks-silver/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-raks-silver/20 to-raks-silver/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-raks-silver" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Workshop Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src={aboutWorkshop}
                  alt="Professional workshop"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-raks-silver flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">State-of-the-Art Facility</div>
                        <div className="text-white/70 text-sm">Equipped with the latest technology</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact-section" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-[#0f1729] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
              Need Your Vehicle Serviced?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book an appointment today or call us for emergency service. Our expert team is ready to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+94770710000">
                <Button 
                  size="lg"
                  className="bg-raks-silver text-primary font-semibold hover:bg-raks-silver-light w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 077 071 0000
                </Button>
              </a>
              <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20garage%20services" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white text-primary font-semibold hover:bg-white/90 w-full sm:w-auto"
                >
                  WhatsApp Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold text-raks-silver mb-2">15+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-raks-silver mb-2">5000+</div>
                <div className="text-sm text-white/70">Vehicles Serviced</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-raks-silver mb-2">100%</div>
                <div className="text-sm text-white/70">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GarageServicesPage;
