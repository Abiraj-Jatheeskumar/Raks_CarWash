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
  CheckCircle2,
  Bus,
  Truck,
  CarFront
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Car Types Definition
export const carTypes = [
  { id: "sedan", name: "Sedan", icon: Car },
  { id: "hatchback-small", name: "Hatch back – Small", icon: Car },
  { id: "hatchback", name: "Hatch back", icon: CarFront },
  { id: "suv", name: "SUV", icon: Car },
  { id: "suv-large", name: "SUV – Large", icon: Truck },
  { id: "van", name: "Van", icon: Bus },
  { id: "van-mini", name: "Van – Mini", icon: Bus },
  { id: "high-roof-van", name: "High roof van", icon: Bus },
  { id: "mpv", name: "MPV", icon: Bus },
  { id: "pickup", name: "Pickup", icon: Truck },
  { id: "mini-trucks", name: "Mini Trucks", icon: Truck }
];

// Service definitions with pricing per car type
export const servicesByType = {
  "exterior-wash": {
    id: "exterior-wash",
    icon: Car,
    title: "Exterior Car Wash",
    shortDescription: "Complete exterior cleaning with premium soaps and wax protection.",
    fullDescription: "Our premium exterior wash uses pH-balanced, biodegradable soaps that safely lift dirt without damaging your paint. We finish with a protective wax coating that leaves your car gleaming and protected from the elements.",
    duration: "30-60 minutes",
    benefits: ["Paint protection", "UV shield", "Water beading effect", "Scratch-free cleaning"],
    includes: ["Hand wash", "Wheel cleaning", "Tire shine", "Window cleaning", "Wax finish"],
    pricing: {
      "sedan": "LKR 1,500",
      "hatchback-small": "LKR 1,200",
      "hatchback": "LKR 1,400",
      "suv": "LKR 2,000",
      "suv-large": "LKR 2,500",
      "van": "LKR 2,800",
      "van-mini": "LKR 2,000",
      "high-roof-van": "LKR 3,200",
      "mpv": "LKR 2,200",
      "pickup": "LKR 2,200",
      "mini-trucks": "LKR 2,500"
    }
  },
  "interior-cleaning": {
    id: "interior-cleaning",
    icon: Wind,
    title: "Interior Vacuum & Deep Cleaning",
    shortDescription: "Thorough interior vacuuming and deep cleaning of all surfaces.",
    fullDescription: "Experience a complete interior transformation. We meticulously vacuum every inch, including under seats and in crevices. All surfaces are cleaned and conditioned, leaving your cabin fresh and spotless.",
    duration: "45-90 minutes",
    benefits: ["Allergen removal", "Odor elimination", "Fabric protection", "Fresh cabin air"],
    includes: ["Deep vacuuming", "Dashboard cleaning", "Console detailing", "Air vent cleaning", "Floor mat wash"],
    pricing: {
      "sedan": "LKR 2,000",
      "hatchback-small": "LKR 1,800",
      "hatchback": "LKR 1,900",
      "suv": "LKR 2,800",
      "suv-large": "LKR 3,500",
      "van": "LKR 4,000",
      "van-mini": "LKR 2,800",
      "high-roof-van": "LKR 4,500",
      "mpv": "LKR 3,200",
      "pickup": "LKR 2,500",
      "mini-trucks": "LKR 3,000"
    }
  },
  "full-polish": {
    id: "full-polish",
    icon: Sparkles,
    title: "Full Body Polish",
    shortDescription: "Professional polishing to restore your car's showroom shine.",
    fullDescription: "Our multi-stage polishing process removes swirl marks, minor scratches, and oxidation. Using professional-grade compounds and polishers, we restore your paint to its original showroom brilliance.",
    duration: "2-5 hours",
    benefits: ["Scratch removal", "Paint restoration", "Mirror finish", "Enhanced resale value"],
    includes: ["Clay bar treatment", "Multi-stage polish", "Paint correction", "Sealant application", "Final inspection"],
    pricing: {
      "sedan": "LKR 8,000",
      "hatchback-small": "LKR 7,000",
      "hatchback": "LKR 7,500",
      "suv": "LKR 10,000",
      "suv-large": "LKR 12,500",
      "van": "LKR 14,000",
      "van-mini": "LKR 10,000",
      "high-roof-van": "LKR 16,000",
      "mpv": "LKR 11,000",
      "pickup": "LKR 11,000",
      "mini-trucks": "LKR 12,000"
    }
  },
  "engine-bay": {
    id: "engine-bay",
    icon: Settings,
    title: "Engine Bay Cleaning",
    shortDescription: "Careful engine bay degreasing and detailing for a clean look.",
    fullDescription: "A clean engine bay not only looks professional but helps identify leaks and issues early. Our careful degreasing and detailing process leaves your engine compartment looking factory-fresh.",
    duration: "45-75 minutes",
    benefits: ["Better heat dissipation", "Leak detection", "Professional appearance", "Prevent corrosion"],
    includes: ["Safe degreasing", "Steam cleaning", "Plastic restoration", "Hose dressing", "Protective coating"],
    pricing: {
      "sedan": "LKR 3,500",
      "hatchback-small": "LKR 3,000",
      "hatchback": "LKR 3,200",
      "suv": "LKR 4,500",
      "suv-large": "LKR 5,500",
      "van": "LKR 6,000",
      "van-mini": "LKR 4,500",
      "high-roof-van": "LKR 6,500",
      "mpv": "LKR 5,000",
      "pickup": "LKR 5,000",
      "mini-trucks": "LKR 5,500"
    }
  },
  "foam-wash": {
    id: "foam-wash",
    icon: Droplets,
    title: "Foam Wash",
    shortDescription: "Luxurious foam wash that lifts dirt without scratching.",
    fullDescription: "Our signature foam wash envelops your vehicle in thick, luxurious foam that gently lifts and encapsulates dirt particles. This touchless pre-wash dramatically reduces the risk of wash-induced scratches.",
    duration: "20-40 minutes",
    benefits: ["Scratch prevention", "Thorough coverage", "Safe for all finishes", "Satisfying experience"],
    includes: ["Snow foam application", "Dwell time", "Pressure rinse", "Spot-free dry", "Tire treatment"],
    pricing: {
      "sedan": "LKR 1,200",
      "hatchback-small": "LKR 1,000",
      "hatchback": "LKR 1,100",
      "suv": "LKR 1,800",
      "suv-large": "LKR 2,200",
      "van": "LKR 2,500",
      "van-mini": "LKR 1,800",
      "high-roof-van": "LKR 2,800",
      "mpv": "LKR 2,000",
      "pickup": "LKR 2,000",
      "mini-trucks": "LKR 2,200"
    }
  },
  "ceramic-coating": {
    id: "ceramic-coating",
    icon: Shield,
    title: "Ceramic Coating",
    shortDescription: "Long-lasting ceramic protection for ultimate paint protection.",
    fullDescription: "Our professional-grade ceramic coating creates a permanent bond with your paint, providing unmatched protection and hydrophobic properties. Enjoy years of effortless maintenance and stunning gloss.",
    duration: "1-2 days",
    benefits: ["5+ year protection", "Self-cleaning effect", "UV protection", "Chemical resistance"],
    includes: ["Paint decontamination", "Polish preparation", "Ceramic application", "Infrared curing", "Final inspection"],
    pricing: {
      "sedan": "LKR 45,000",
      "hatchback-small": "LKR 40,000",
      "hatchback": "LKR 42,000",
      "suv": "LKR 55,000",
      "suv-large": "LKR 65,000",
      "van": "LKR 70,000",
      "van-mini": "LKR 55,000",
      "high-roof-van": "LKR 75,000",
      "mpv": "LKR 60,000",
      "pickup": "LKR 60,000",
      "mini-trucks": "LKR 65,000"
    }
  },
  "underbody-wash": {
    id: "underbody-wash",
    icon: CircleDot,
    title: "Underbody Wash",
    shortDescription: "High-pressure underbody cleaning to remove road grime and salt.",
    fullDescription: "Protect your vehicle's undercarriage from rust and corrosion with our thorough underbody wash. We remove road salt, mud, and debris that can cause long-term damage to vital components.",
    duration: "15-30 minutes",
    benefits: ["Rust prevention", "Component protection", "Extend vehicle life", "Improved safety"],
    includes: ["High-pressure wash", "Wheel well cleaning", "Rust inhibitor spray", "Frame cleaning", "Drain hole clearing"],
    pricing: {
      "sedan": "LKR 1,500",
      "hatchback-small": "LKR 1,200",
      "hatchback": "LKR 1,300",
      "suv": "LKR 2,000",
      "suv-large": "LKR 2,500",
      "van": "LKR 2,800",
      "van-mini": "LKR 2,000",
      "high-roof-van": "LKR 3,000",
      "mpv": "LKR 2,200",
      "pickup": "LKR 2,500",
      "mini-trucks": "LKR 2,800"
    }
  },
  "headlight-restoration": {
    id: "headlight-restoration",
    icon: Lightbulb,
    title: "Headlight Restoration",
    shortDescription: "Restore cloudy headlights to crystal clear condition.",
    fullDescription: "Oxidized, yellowed headlights reduce visibility and diminish your car's appearance. Our restoration process removes oxidation and applies UV-protective clear coat for long-lasting clarity.",
    duration: "30-45 minutes",
    benefits: ["Improved visibility", "Enhanced safety", "Better appearance", "Pass inspections"],
    includes: ["Wet sanding", "Polishing stages", "UV clear coat", "Sealant protection", "Lens cleaning"],
    pricing: {
      "sedan": "LKR 4,500",
      "hatchback-small": "LKR 4,000",
      "hatchback": "LKR 4,200",
      "suv": "LKR 5,500",
      "suv-large": "LKR 6,500",
      "van": "LKR 6,500",
      "van-mini": "LKR 5,500",
      "high-roof-van": "LKR 7,000",
      "mpv": "LKR 6,000",
      "pickup": "LKR 6,000",
      "mini-trucks": "LKR 6,500"
    }
  },
  "bike-wash": {
    id: "bike-wash",
    icon: Bike,
    title: "Bike Wash",
    shortDescription: "Expert cleaning for motorcycles and bicycles.",
    fullDescription: "Whether it's a high-performance motorcycle or a beloved bicycle, we treat two-wheelers with the same care as four. Our specialized cleaning process protects chains, gears, and delicate components.",
    duration: "20-40 minutes",
    benefits: ["Chain preservation", "Component protection", "Performance maintenance", "Show-ready finish"],
    includes: ["Gentle wash", "Chain cleaning", "Chrome polish", "Tire treatment", "Lubricant application"],
    pricing: {
      "sedan": "LKR 1,500",
      "hatchback-small": "LKR 1,500",
      "hatchback": "LKR 1,500",
      "suv": "LKR 1,500",
      "suv-large": "LKR 1,500",
      "van": "LKR 1,500",
      "van-mini": "LKR 1,500",
      "high-roof-van": "LKR 1,500",
      "mpv": "LKR 1,500",
      "pickup": "LKR 1,500",
      "mini-trucks": "LKR 1,500"
    }
  }
};

// Legacy services array for backward compatibility (e.g., ServiceDetail page)
export const services = Object.values(servicesByType).map(service => ({
  ...service,
  suitableFor: carTypes.map(ct => ct.name),
  price: `Starting from ${service.pricing["sedan"]}`
}));

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedCarType, setSelectedCarType] = useState<string>("sedan");

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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            Complete Car Care
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Select your vehicle type to see pricing and services tailored for your car.
          </p>
        </motion.div>

        {/* Car Type Selection Tabs */}
        <Tabs value={selectedCarType} onValueChange={setSelectedCarType} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <TabsList className="w-full h-auto flex-wrap justify-center gap-2 bg-card/50 p-2 rounded-2xl border border-border">
              {carTypes.map((carType) => (
                <TabsTrigger
                  key={carType.id}
                  value={carType.id}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all"
                >
                  <carType.icon className="w-4 h-4" />
                  {carType.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Services Grid for Each Car Type */}
          {carTypes.map((carType) => (
            <TabsContent key={carType.id} value={carType.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {Object.values(servicesByType).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-transparent hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 ${expandedService === service.id ? 'ring-2 ring-primary/50 shadow-2xl' : ''}`}>
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/8 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </div>

                      <div className="relative z-10">
                        {/* Icon with Glow */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-primary/30">
                          <service.icon className="w-10 h-10 text-white" />
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
                          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-raks-silver rounded-full">
                            {service.pricing[carType.id]}
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

                            {/* What's Included */}
                            <div>
                              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">What's Included</h4>
                              <div className="space-y-1">
                                {service.includes.map((item) => (
                                  <div key={item} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-raks-silver flex-shrink-0 mt-0.5" />
                                    <span className="text-xs text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
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
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Price Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 bg-card/50 border border-border rounded-2xl text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Note:</span> Prices shown are for{" "}
            <span className="font-semibold text-primary">
              {carTypes.find((ct) => ct.id === selectedCarType)?.name}
            </span>
            . Select different vehicle types above to see corresponding pricing.
          </p>
        </motion.div>

        {/* Service Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Service Packages
            </h3>
            <p className="text-muted-foreground text-lg">
              Save more with our bundled packages for {carTypes.find((ct) => ct.id === selectedCarType)?.name}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Green accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-emerald-500 rounded-t-2xl" />
              
              <div className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="p-6 pt-8 relative z-10 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h4 className="text-xl font-display font-black text-emerald-700 mb-1">
                      Basic Package
                    </h4>
                    <p className="text-xs text-emerald-600/70">
                      Perfect for regular maintenance
                    </p>
                  </div>

                  <div className="mb-4 text-center py-3">
                    <div className="relative inline-block">
                      <span className="text-3xl md:text-4xl font-display font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  {selectedCarType === "sedan" && "LKR 3,500"}
                  {selectedCarType === "hatchback-small" && "LKR 3,000"}
                  {selectedCarType === "hatchback" && "LKR 3,300"}
                  {selectedCarType === "suv" && "LKR 4,800"}
                  {selectedCarType === "suv-large" && "LKR 6,000"}
                  {selectedCarType === "van" && "LKR 6,800"}
                  {selectedCarType === "van-mini" && "LKR 4,800"}
                  {selectedCarType === "high-roof-van" && "LKR 7,700"}
                  {selectedCarType === "mpv" && "LKR 5,400"}
                  {selectedCarType === "pickup" && "LKR 5,200"}
                  {selectedCarType === "mini-trucks" && "LKR 5,700"}
                      </span>
                      <span className="block text-xs mt-1 text-emerald-600/70 font-medium">
                        per service
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {["Exterior Wash", "Interior Vacuum", "Tire Dressing", "Window Cleaning", "Quick Shine"].map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + (idx * 0.05) }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-emerald-100 flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        </div>
                        <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20the%20Basic%20Package" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full py-3 text-sm font-bold bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Blue accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-2xl" />
              
              <div className="relative bg-gradient-to-br from-primary/5 via-white to-primary/8 border-2 border-primary/20 hover:border-primary/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/25 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="p-6 pt-8 relative z-10 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h4 className="text-xl font-display font-black text-primary mb-1">
                      Premium Package
                    </h4>
                    <p className="text-xs text-primary/70">
                      Complete care for your vehicle
                    </p>
                  </div>

                  <div className="mb-4 text-center py-3">
                    <div className="relative inline-block">
                      <span className="text-3xl md:text-4xl font-display font-black bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {selectedCarType === "sedan" && "LKR 11,500"}
                  {selectedCarType === "hatchback-small" && "LKR 10,000"}
                  {selectedCarType === "hatchback" && "LKR 10,600"}
                  {selectedCarType === "suv" && "LKR 15,300"}
                  {selectedCarType === "suv-large" && "LKR 19,000"}
                  {selectedCarType === "van" && "LKR 21,800"}
                  {selectedCarType === "van-mini" && "LKR 15,300"}
                  {selectedCarType === "high-roof-van" && "LKR 24,700"}
                  {selectedCarType === "mpv" && "LKR 17,400"}
                  {selectedCarType === "pickup" && "LKR 16,700"}
                  {selectedCarType === "mini-trucks" && "LKR 18,200"}
                      </span>
                      <span className="block text-xs mt-1 text-primary/70 font-medium">
                        per service
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {["Full Interior + Exterior Cleaning", "Full Body Polish", "Engine Bay Cleaning", "Headlight Restoration", "Tire Dressing", "Air Freshener"].map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + (idx * 0.05) }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary/10 flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-primary stroke-[3]" />
                        </div>
                        <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20the%20Premium%20Package" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full py-3 text-sm font-bold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Ultimate Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Amber accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-amber-500 rounded-t-2xl" />
              
              <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-200 hover:border-amber-400 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                <div className="p-6 pt-8 relative z-10 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h4 className="text-xl font-display font-black text-amber-700 mb-1">
                      Ultimate Package
                    </h4>
                    <p className="text-xs text-amber-600/70">
                      The ultimate detailing experience
                    </p>
                  </div>

                  <div className="mb-4 text-center py-3">
                    <div className="relative inline-block">
                      <span className="text-3xl md:text-4xl font-display font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {selectedCarType === "sedan" && "LKR 65,000"}
                        {selectedCarType === "hatchback-small" && "LKR 58,000"}
                        {selectedCarType === "hatchback" && "LKR 61,000"}
                        {selectedCarType === "suv" && "LKR 82,000"}
                        {selectedCarType === "suv-large" && "LKR 98,000"}
                        {selectedCarType === "van" && "LKR 105,000"}
                        {selectedCarType === "van-mini" && "LKR 82,000"}
                        {selectedCarType === "high-roof-van" && "LKR 115,000"}
                        {selectedCarType === "mpv" && "LKR 90,000"}
                        {selectedCarType === "pickup" && "LKR 88,000"}
                        {selectedCarType === "mini-trucks" && "LKR 95,000"}
                      </span>
                      <span className="block text-xs mt-1 text-amber-600/70 font-medium">
                        per service
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {["Full Body Polish", "Ceramic Coating", "Deep Interior Detailing", "Engine Bay Detailing", "Headlight Restoration", "Paint Correction", "6-Month Protection"].map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + (idx * 0.05) }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-amber-100 flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-amber-600 stroke-[3]" />
                        </div>
                        <span className="text-xs text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20book%20the%20Ultimate%20Package" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full py-3 text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Can't find what you need?</p>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:shadow-glow transition-all">
              Contact Us for Custom Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
