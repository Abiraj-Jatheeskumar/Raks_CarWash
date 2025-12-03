import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic Package",
    price: "2,900",
    description: "Perfect for regular maintenance",
    features: [
      "Exterior Wash",
      "Interior Vacuum",
      "Quick Shine",
      "Tire Dressing",
      "Window Cleaning",
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    price: "7,900",
    description: "Complete care for your vehicle",
    features: [
      "Full Interior + Exterior Cleaning",
      "Dashboard Polishing",
      "Tire Dressing",
      "Engine Bay Cleaning",
      "Air Freshener",
      "Leather Conditioning",
    ],
    popular: true,
  },
  {
    name: "Ultimate Package",
    price: "14,900",
    description: "The ultimate detailing experience",
    features: [
      "Full Body Polish",
      "Ceramic Coating",
      "Deep Interior Detailing",
      "Shining Wax Finish",
      "Headlight Restoration",
      "Paint Correction",
      "6-Month Protection",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPlan, setSelectedPlan] = useState(1);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-raks-silver/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            Choose Your
            <span className="text-primary block">Perfect Package</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible packages designed to meet your car care needs and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedPlan(index)}
              className={`relative cursor-pointer rounded-2xl transition-all duration-500 ${pkg.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-elevated"
                  : selectedPlan === index
                    ? "bg-card border-2 border-primary shadow-elevated"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-raks-silver text-primary text-sm font-bold rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Name */}
                <h3 className={`text-xl font-display font-bold mb-2 ${pkg.popular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-5xl font-display font-black ${pkg.popular ? "text-primary-foreground" : "text-foreground"
                    }`}>
                    ${pkg.price}
                  </span>
                  <span className={`text-sm ml-2 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                    / service
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? "bg-primary-foreground/20" : "bg-primary/10"
                        }`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? "text-primary-foreground" : "text-primary"
                          }`} />
                      </div>
                      <span className={`text-sm ${pkg.popular ? "text-primary-foreground/90" : "text-foreground"
                        }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={scrollToContact}
                  className={`w-full font-semibold transition-all ${pkg.popular
                      ? "bg-raks-silver text-primary hover:bg-raks-silver-light"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                    }`}
                >
                  Get Started
                </Button>
              </div>

              {/* Gradient Border Effect for Popular */}
              {pkg.popular && (
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-raks-silver to-primary blur-sm scale-[1.02]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;