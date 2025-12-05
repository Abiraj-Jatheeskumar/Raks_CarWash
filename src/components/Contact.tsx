import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, Send, MessageCircle, Mail, PhoneCall, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["077 071 0000"],
    action: "tel:+94770710000",
    actionLabel: "Call Now"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["167/2, Raja Street", "Kopay, Jaffna, Sri Lanka"],
    action: "https://maps.google.com",
    actionLabel: "Get Directions"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 8:00 AM - 7:00 PM", "Sunday: 9:00 AM - 5:00 PM"],
    action: null,
    actionLabel: null
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@rakscarwash.com", "bookings@rakscarwash.com"],
    action: "mailto:info@rakscarwash.com",
    actionLabel: "Send Email"
  },
];

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Coupe",
  "Truck",
  "Van",
  "Motorcycle",
  "Luxury Vehicle",
  "Sports Car",
  "Other"
];

const serviceOptions = [
  "Exterior Car Wash",
  "Interior Deep Cleaning",
  "Full Body Polish",
  "Ceramic Coating",
  "Engine Bay Cleaning",
  "Headlight Restoration",
  "Basic Package",
  "Premium Package",
  "Ultimate Package",
  "Custom Service"
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent! ✨",
      description: "We'll get back to you within 24 hours to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", email: "", vehicleType: "", service: "", message: "" });
  };

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94770710000?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-raks-silver/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            Get In Touch
            <span className="text-primary block">With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to give your vehicle the premium care it deserves? Book an appointment or ask any questions - we're here to help!
          </p>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <Button
            onClick={() => handleWhatsApp("Hi! I'd like to book a car wash service.")}
            className="h-auto py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white flex flex-col items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-medium">WhatsApp Booking</span>
          </Button>
          <a href="tel:+94770710000" className="block">
            <Button className="w-full h-auto py-4 bg-primary hover:bg-primary/90 flex flex-col items-center gap-2">
              <PhoneCall className="w-6 h-6" />
              <span className="text-sm font-medium">Call Now</span>
            </Button>
          </a>
          <Button
            onClick={() => handleWhatsApp("Hi! I'd like to know your prices.")}
            variant="outline"
            className="h-auto py-4 border-primary/30 hover:bg-primary/5 flex flex-col items-center gap-2"
          >
            <Calendar className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-foreground">Get Quote</span>
          </Button>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" className="w-full h-auto py-4 border-primary/30 hover:bg-primary/5 flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-foreground">Directions</span>
            </Button>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-border/50 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Book Your Service
                  </h3>
                  <p className="text-sm text-muted-foreground">Fill in the details below</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary focus:ring-primary rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input
                      placeholder="077 071 0000"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary focus:ring-primary rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-background border-border focus:border-primary focus:ring-primary rounded-xl"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Vehicle Type</label>
                    <Select value={formData.vehicleType} onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
                      <SelectTrigger className="h-12 bg-background border-border focus:border-primary rounded-xl">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Required</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="h-12 bg-background border-border focus:border-primary rounded-xl">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Additional Message</label>
                  <Textarea
                    placeholder="Tell us about your vehicle's specific needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] bg-background border-border focus:border-primary focus:ring-primary resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all text-lg rounded-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient orb */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/15 to-primary/20 rounded-full blur-3xl -z-0" />
                
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10 shadow-lg">
                  <info.icon className="w-7 h-7 text-primary transition-colors" />
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="font-display font-bold text-foreground mb-2 text-lg">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-600">{detail}</p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-primary hover:underline"
                    >
                      {info.actionLabel} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-3xl overflow-hidden border border-border shadow-card"
            >
              <div className="h-72 bg-gradient-to-br from-muted via-muted/80 to-muted/50 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-display font-bold">RAKS Car Wash</p>
                  <p className="text-muted-foreground text-sm">167/2, Raja Street, Kopay</p>
                  <p className="text-muted-foreground text-sm">Jaffna, Sri Lanka</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3"
                  >
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/94770710000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-elevated hover:bg-green-600 hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <span className="text-sm font-medium text-foreground">Chat with us!</span>
          </div>
        </div>
      </motion.a>
    </section>
  );
};

export default Contact;
