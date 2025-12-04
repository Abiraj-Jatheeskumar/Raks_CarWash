import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Star,
  Car,
  Sparkles,
  Shield,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/components/Services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const beforeAfterSamples = [
  { before: "Dull, scratched paint", after: "Mirror-like shine" },
  { before: "Oxidized headlights", after: "Crystal clear lenses" },
  { before: "Dirty interior", after: "Fresh & spotless cabin" },
];

const recommendedAddons = [
  { name: "Interior Fragrance", price: "+LKR 900", icon: Sparkles },
  { name: "Tire Dressing Premium", price: "+LKR 1,500", icon: Car },
  { name: "Paint Sealant", price: "+LKR 2,900", icon: Shield },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-raks-navy-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-raks-silver/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-raks-silver/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <ServiceIcon className="w-10 h-10 text-raks-silver" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black text-primary-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
                  <Clock className="w-5 h-5 text-raks-silver" />
                  <span className="text-primary-foreground font-medium">{service.duration}</span>
                </div>
                <div className="px-4 py-2 bg-raks-silver text-primary font-bold rounded-full">
                  {service.price}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 border border-primary-foreground/20 flex items-center justify-center">
                <div className="text-center">
                  <ServiceIcon className="w-24 h-24 text-raks-silver/50 mx-auto mb-4" />
                  <span className="text-primary-foreground/50">Service Preview</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Step-by-Step Process</h2>
            <p className="text-muted-foreground">Here's what happens when you choose this service</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {service.includes.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-full blur-2xl -z-0" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-foreground relative z-10">{step}</p>
                </div>
                {index < service.includes.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">What You Get</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <motion.div 
                    key={benefit} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-full blur-2xl -z-0" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 relative z-10">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground relative z-10">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Suitable For */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Suitable For</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.suitableFor.map((vehicle) => (
                  <div key={vehicle} className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-raks-silver/5 border border-border">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{vehicle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Samples */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Before & After Results</h2>
            <p className="text-muted-foreground">See the transformation for yourself</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {beforeAfterSamples.map((sample, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden border border-border"
              >
                <div className="grid grid-cols-2">
                  <div className="p-6 bg-muted/80 text-center">
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wide">Before</span>
                    <div className="h-32 flex items-center justify-center mt-4">
                      <p className="text-sm text-muted-foreground">{sample.before}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-primary/10 text-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">After</span>
                    <div className="h-32 flex items-center justify-center mt-4">
                      <p className="text-sm text-primary font-medium">{sample.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Breakdown & Add-ons */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Pricing</h2>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-raks-navy-dark text-primary-foreground">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-display font-black">{service.price.split('$')[1]?.split(' ')[0] || '29'}</span>
                  <span className="text-2xl">$</span>
                  <span className="text-primary-foreground/70">starting price</span>
                </div>
                <p className="text-primary-foreground/70 mb-6">Final price may vary based on vehicle size and condition</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-raks-silver" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-raks-silver" />
                    <span>Satisfaction guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-raks-silver fill-raks-silver" />
                    <span>Premium quality products</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recommended Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Recommended Add-ons</h2>
              <div className="space-y-4">
                {recommendedAddons.map((addon) => (
                  <motion.div 
                    key={addon.name} 
                    whileHover={{ scale: 1.02 }}
                    className="relative flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-full blur-2xl -z-0" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center shadow-md">
                        <addon.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{addon.name}</span>
                    </div>
                    <span className="font-bold text-primary relative z-10">{addon.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Book This Service?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact us now to schedule your {service.title.toLowerCase()} and give your vehicle the premium care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="bg-raks-silver text-primary font-bold hover:bg-raks-silver-light">
                  Book Now
                </Button>
              </Link>
              <a href="tel:+94770710000">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
