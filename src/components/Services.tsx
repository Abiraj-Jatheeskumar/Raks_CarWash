import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Wind,
  Sparkles,
  Settings,
  Droplets,
  Shield,
  CircleDot,
  Lightbulb,
  Bike,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const services = [
  {
    id: "exterior-wash",
    icon: Car,
    title: "Exterior Car Wash",
    shortDescription: "Complete exterior cleaning with premium soaps and wax protection.",
    fullDescription: "Our premium exterior wash uses pH-balanced, biodegradable soaps that safely lift dirt without damaging your paint. We finish with a protective wax coating that leaves your car gleaming and protected from the elements.",
    duration: "30-45 minutes",
    benefits: ["Paint protection", "UV shield", "Water beading effect", "Scratch-free cleaning"],
    suitableFor: ["Sedans", "SUVs", "Hatchbacks", "Trucks"],
    includes: ["Hand wash", "Wheel cleaning", "Tire shine", "Window cleaning", "Wax finish"],
    price: "Starting from LKR 2,900"
  },
  {
    id: "interior-cleaning",
    icon: Wind,
    title: "Interior Vacuum & Deep Cleaning",
    shortDescription: "Thorough interior vacuuming and deep cleaning of all surfaces.",
    fullDescription: "Experience a complete interior transformation. We meticulously vacuum every inch, including under seats and in crevices. All surfaces are cleaned and conditioned, leaving your cabin fresh and spotless.",
    duration: "45-60 minutes",
    benefits: ["Allergen removal", "Odor elimination", "Fabric protection", "Fresh cabin air"],
    suitableFor: ["All vehicle types", "Family cars", "Commercial vehicles"],
    includes: ["Deep vacuuming", "Dashboard cleaning", "Console detailing", "Air vent cleaning", "Floor mat wash"],
    price: "Starting from LKR 3,900"
  },
  {
    id: "full-polish",
    icon: Sparkles,
    title: "Full Body Polish",
    shortDescription: "Professional polishing to restore your car's showroom shine.",
    fullDescription: "Our multi-stage polishing process removes swirl marks, minor scratches, and oxidation. Using professional-grade compounds and polishers, we restore your paint to its original showroom brilliance.",
    duration: "2-4 hours",
    benefits: ["Scratch removal", "Paint restoration", "Mirror finish", "Enhanced resale value"],
    suitableFor: ["All paint types", "Classic cars", "Luxury vehicles", "Daily drivers"],
    includes: ["Clay bar treatment", "Multi-stage polish", "Paint correction", "Sealant application", "Final inspection"],
    price: "Starting from LKR 9,900"
  },
  {
    id: "engine-bay",
    icon: Settings,
    title: "Engine Bay Cleaning",
    shortDescription: "Careful engine bay degreasing and detailing for a clean look.",
    fullDescription: "A clean engine bay not only looks professional but helps identify leaks and issues early. Our careful degreasing and detailing process leaves your engine compartment looking factory-fresh.",
    duration: "45-60 minutes",
    benefits: ["Better heat dissipation", "Leak detection", "Professional appearance", "Prevent corrosion"],
    suitableFor: ["All engine types", "Show cars", "Pre-sale preparation"],
    includes: ["Safe degreasing", "Steam cleaning", "Plastic restoration", "Hose dressing", "Protective coating"],
    price: "Starting from LKR 4,900"
  },
  {
    id: "foam-wash",
    icon: Droplets,
    title: "Foam Wash",
    shortDescription: "Luxurious foam wash that lifts dirt without scratching.",
    fullDescription: "Our signature foam wash envelops your vehicle in thick, luxurious foam that gently lifts and encapsulates dirt particles. This touchless pre-wash dramatically reduces the risk of wash-induced scratches.",
    duration: "20-30 minutes",
    benefits: ["Scratch prevention", "Thorough coverage", "Safe for all finishes", "Satisfying experience"],
    suitableFor: ["Sensitive paint", "New vehicles", "Ceramic coated cars", "All vehicles"],
    includes: ["Snow foam application", "Dwell time", "Pressure rinse", "Spot-free dry", "Tire treatment"],
    price: "Starting from LKR 2,400"
  },
  {
    id: "ceramic-coating",
    icon: Shield,
    title: "Ceramic Coating",
    shortDescription: "Long-lasting ceramic protection for ultimate paint protection.",
    fullDescription: "Our professional-grade ceramic coating creates a permanent bond with your paint, providing unmatched protection and hydrophobic properties. Enjoy years of effortless maintenance and stunning gloss.",
    duration: "1-2 days",
    benefits: ["5+ year protection", "Self-cleaning effect", "UV protection", "Chemical resistance"],
    suitableFor: ["New cars", "Daily drivers", "Luxury vehicles", "Fleet vehicles"],
    includes: ["Paint decontamination", "Polish preparation", "Ceramic application", "Infrared curing", "Final inspection"],
    price: "Starting from LKR 49,900"
  },
  {
    id: "underbody-wash",
    icon: CircleDot,
    title: "Underbody Wash",
    shortDescription: "High-pressure underbody cleaning to remove road grime and salt.",
    fullDescription: "Protect your vehicle's undercarriage from rust and corrosion with our thorough underbody wash. We remove road salt, mud, and debris that can cause long-term damage to vital components.",
    duration: "15-20 minutes",
    benefits: ["Rust prevention", "Component protection", "Extend vehicle life", "Improved safety"],
    suitableFor: ["Winter-driven cars", "Off-road vehicles", "Coastal area vehicles"],
    includes: ["High-pressure wash", "Wheel well cleaning", "Rust inhibitor spray", "Frame cleaning", "Drain hole clearing"],
    price: "Starting from LKR 1,900"
  },
  {
    id: "headlight-restoration",
    icon: Lightbulb,
    title: "Headlight Restoration",
    shortDescription: "Restore cloudy headlights to crystal clear condition.",
    fullDescription: "Oxidized, yellowed headlights reduce visibility and diminish your car's appearance. Our restoration process removes oxidation and applies UV-protective clear coat for long-lasting clarity.",
    duration: "30-45 minutes",
    benefits: ["Improved visibility", "Enhanced safety", "Better appearance", "Pass inspections"],
    suitableFor: ["Aged vehicles", "Plastic headlights", "Pre-sale prep", "Safety inspection"],
    includes: ["Wet sanding", "Polishing stages", "UV clear coat", "Sealant protection", "Lens cleaning"],
    price: "Starting from LKR 5,900"
  },
  {
    id: "bike-wash",
    icon: Bike,
    title: "Bike Wash",
    shortDescription: "Expert cleaning for motorcycles and bicycles.",
    fullDescription: "Whether it's a high-performance motorcycle or a beloved bicycle, we treat two-wheelers with the same care as four. Our specialized cleaning process protects chains, gears, and delicate components.",
    duration: "20-40 minutes",
    benefits: ["Chain preservation", "Component protection", "Performance maintenance", "Show-ready finish"],
    suitableFor: ["Motorcycles", "Sport bikes", "Mountain bikes", "Road bicycles"],
    includes: ["Gentle wash", "Chain cleaning", "Chrome polish", "Tire treatment", "Lubricant application"],
    price: "Starting from LKR 1,900"
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-raks-silver/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            Complete Car Care
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From a quick exterior wash to comprehensive detailing packages, we offer everything your vehicle needs to look its absolute best. Click on any service to learn more.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`h-full p-6 lg:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-elevated transition-all duration-500 overflow-hidden ${expandedService === service.id ? 'ring-2 ring-primary/30' : ''}`}>
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-raks-silver/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-soft">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Duration & Price Badge */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      <Clock className="w-3 h-3" />
                      {service.duration}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-raks-navy bg-raks-silver/30 rounded-full">
                      {service.price}
                    </span>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedService === service.id ? 'auto' : 0, opacity: expandedService === service.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border/50 space-y-4">
                      {/* Full Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Benefits</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.benefits.map((benefit) => (
                            <span key={benefit} className="inline-flex items-center gap-1 px-2 py-1 text-xs text-primary bg-primary/5 rounded">
                              <CheckCircle2 className="w-3 h-3" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Suitable For */}
                      <div>
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Suitable For</h4>
                        <p className="text-xs text-muted-foreground">{service.suitableFor.join(", ")}</p>
                      </div>

                      {/* View Full Details Link */}
                      <Link to={`/service/${service.id}`}>
                        <Button variant="outline" size="sm" className="w-full mt-2 group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                          View Full Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Read More Toggle */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-3"
                  >
                    {expandedService === service.id ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-raks-silver to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Can't find what you need?</p>
          <Button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:shadow-glow transition-all"
          >
            Contact Us for Custom Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
