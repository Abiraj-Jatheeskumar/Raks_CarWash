import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Car,
  Sparkles,
  Wrench,
  Image,
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send
} from "lucide-react";

const quickLinks = [
  {
    title: "Car Wash & Detailing",
    description: "Premium exterior & interior cleaning and detailing services",
    icon: Car,
    href: "/services",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Auto Repair & Garage",
    description: "Complete mechanical repairs & maintenance solutions",
    icon: Wrench,
    href: "/garage-services",
    color: "from-orange-500/20 to-orange-600/20"
  },

  {
    title: "Gallery",
    description: "See our work and transformations",
    icon: Image,
    href: "/gallery",
    color: "from-pink-500/20 to-pink-600/20"
  }
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "077 071 0000",
    href: "tel:+94770710000"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: "Chat with us",
    href: "https://wa.me/94770710000"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@rakscarwash.com",
    href: "mailto:info@rakscarwash.com"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "167/2, Raja Street, Kopay, Jaffna",
    href: "https://maps.google.com"
  }
];

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageSquare,
    href: "https://wa.me/94770710000",
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/rakscarwash",
    color: "bg-primary hover:bg-primary/90"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/rakscarwash",
    color: "bg-pink-600 hover:bg-pink-700"
  },
  {
    name: "TikTok",
    icon: Send,
    href: "https://tiktok.com/@rakscarwash",
    color: "bg-gray-800 hover:bg-gray-900"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Quick Links Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-4">
                Explore Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                From premium car detailing to complete garage services, we offer comprehensive automotive care solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Link to={link.href}>
                    <div className="group relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Decorative gradient orb */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-3xl -z-0" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/25 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                          <link.icon className="w-7 h-7 text-primary" />
                        </div>
                        
                        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {link.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Preview */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-raks-silver/10 text-raks-silver px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Premium Services</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-6">
                  Why Choose RAKS Auto Shine?
                </h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Professional car wash & detailing services",
                    "Complete garage & repair solutions",
                    "Certified mechanics & technicians",
                    "Quality products & equipment",
                    "Competitive pricing with transparency",
                    "Customer satisfaction guaranteed"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-raks-silver/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-raks-silver" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/94770710000?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-raks-silver text-primary hover:bg-raks-silver-light">
                      WhatsApp Us
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="tel:+94770710000">
                    <Button size="lg" variant="outline">
                      Call Us
                      <Phone className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-2xl -z-0" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-raks-silver bg-clip-text text-transparent mb-2 relative z-10">15+</div>
                      <div className="text-sm text-gray-600 relative z-10">Years Experience</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-2xl -z-0" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-raks-silver bg-clip-text text-transparent mb-2 relative z-10">10K+</div>
                      <div className="text-sm text-gray-600 relative z-10">Happy Customers</div>
                    </motion.div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-2xl -z-0" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-raks-silver bg-clip-text text-transparent mb-2 relative z-10">50+</div>
                      <div className="text-sm text-gray-600 relative z-10">Services Offered</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-2xl -z-0" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-raks-silver bg-clip-text text-transparent mb-2 relative z-10">100%</div>
                      <div className="text-sm text-gray-600 relative z-10">Satisfaction</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact & Social Media Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
                Get in <span className="text-raks-silver">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with us through your preferred channel
              </p>
            </motion.div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
                >
                  {/* Decorative gradient orb */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-3xl -z-0" />
                  
                  <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/25 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                      <p className="text-gray-600 text-sm">{info.details}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-6">Follow Us on Social Media</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`${social.color} text-white p-4 rounded-full shadow-lg transition-all`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;