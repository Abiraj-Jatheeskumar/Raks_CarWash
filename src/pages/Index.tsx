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
  Instagram
} from "lucide-react";
import galleryPolish from "@/assets/gallery-1-polish.jpg";
import galleryCeramic from "@/assets/gallery-3-ceramic.jpg";
import galleryEngine from "@/assets/gallery-4-engine.jpg";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const quickLinks = [
  {
    title: "Car Wash & Detailing",
    description: "Premium exterior & interior cleaning and detailing services",
    icon: Car,
    href: "/services",
    color: "from-purple-500/20 to-purple-600/20",
    image: galleryPolish
  },
  {
    title: "Bodywork & Paint",
    description: "Professional body repairs, dent removal & paint services",
    icon: Sparkles,
    href: "/bodywork-paint",
    color: "from-blue-500/20 to-blue-600/20",
    image: galleryCeramic
  },
  {
    title: "Auto Repair",
    description: "Complete mechanical repairs & maintenance solutions",
    icon: Wrench,
    href: "/garage-services",
    color: "from-orange-500/20 to-orange-600/20",
    image: galleryEngine
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
    color: "bg-[#25D366] hover:bg-[#20BA5A]"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/17ZJZ65BuQ/?mibextid=wwXIfr",
    color: "bg-[#1877F2] hover:bg-[#0C63D4]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/rakscarwash?igsh=MTg2YTVkOGFhaXlpZg==",
    color: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] hover:opacity-90"
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@rakscarwash?_r=1&_t=ZS-91yMHTonqSu",
    color: "bg-[#010101] hover:bg-[#000000]"
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
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6">
                Explore Our Services
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                At Raks, we provide a complete automotive care experience under one trusted roof — from premium car washing and deep detailing to expert mechanical repairs and professional bodywork & paint restoration. Every vehicle that enters our premises is handled with precision, passion, and complete attention to detail. Our trained technicians use advanced tools, high-quality materials, and industry-standard processes to ensure your car looks great, performs flawlessly, and stays protected for the long run. Whether you need a fresh shine, a mechanical check-up, or full accident repair, Raks delivers reliable service, transparent communication, and craftsmanship you can trust. We are committed to giving every customer convenience, quality, and peace of mind — all in one place.
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
                    <div className="group relative bg-white border-2 border-primary/20 hover:border-primary/40 rounded-2xl h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Image Background */}
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={link.image} 
                          alt={link.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                        
                        {/* Icon on Image */}
                        <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                          <link.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
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
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-raks-silver to-white px-5 py-2.5 rounded-full shadow-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-primary tracking-wide">PREMIUM SERVICES</span>
                  </div>
                </motion.div>
                
                <h2 className="text-3xl md:text-5xl font-display font-black mb-2 leading-tight">
                  <span className="text-foreground">Why Choose</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-raks-silver to-primary bg-clip-text text-transparent">
                    RAKS Auto Shine?
                  </span>
                </h2>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1 w-24 bg-gradient-to-r from-primary to-raks-silver rounded-full mb-8 origin-left"
                />
                
                <div className="space-y-3 mb-10">
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
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-raks-silver/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{item}</span>
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