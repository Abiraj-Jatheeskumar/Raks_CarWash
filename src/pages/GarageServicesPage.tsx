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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-[#0f1729]">
        <div className="absolute inset-0 opacity-10">
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-raks-silver/20 text-raks-silver px-6 py-2 rounded-full mb-6"
            >
              <Wrench className="w-5 h-5" />
              <span className="font-semibold">Professional Garage Services</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
              Complete Auto Repair & Maintenance
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Expert mechanics, advanced diagnostics, and quality parts. We handle everything from routine maintenance to major repairs.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-raks-silver text-primary font-semibold hover:bg-raks-silver-light"
                onClick={() => document.querySelector('#services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20garage%20service" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white/95 text-primary font-semibold hover:bg-white border-2 border-white shadow-lg"
                >
                  WhatsApp Us
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-raks-silver/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Emergency Services Banner */}
      <section className="py-12 bg-gradient-to-r from-raks-silver/10 via-transparent to-raks-silver/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-raks-silver/20 to-raks-silver/5 mb-4">
                  <service.icon className="w-8 h-8 text-raks-silver" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
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
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl -z-0" />
                
                {/* Icon */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
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

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
                  <div>
                    <div className="text-sm text-muted-foreground">Starting at</div>
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                  </div>
                  <a href={`https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="sm"
                      className="bg-primary text-white hover:bg-primary/90 shadow-lg"
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-center text-foreground mb-12">
              Why Choose RAKS Garage Services?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
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
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-raks-silver/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-raks-silver" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
