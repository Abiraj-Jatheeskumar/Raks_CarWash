import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/assets/Logo.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", bgColor: "bg-[#1877F2]", hoverBg: "hover:bg-[#1877F2]" },
  { icon: Instagram, href: "#", label: "Instagram", bgColor: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4]", hoverBg: "hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#515bd4]" },
  { icon: Twitter, href: "#", label: "Twitter", bgColor: "bg-[#1DA1F2]", hoverBg: "hover:bg-[#1DA1F2]" },
  { icon: Youtube, href: "#", label: "YouTube", bgColor: "bg-[#FF0000]", hoverBg: "hover:bg-[#FF0000]" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Car Wash & Detailing", href: "/services" },
  { name: "Auto Repair & Garage", href: "/garage-services" },
  { name: "Gallery", href: "/gallery" },
];

const services = [
  "Exterior Wash",
  "Interior Cleaning",
  "Full Body Polish",
  "Ceramic Coating",
  "Engine Cleaning",
  "Bike Wash",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={Logo} 
                alt="RAKS Premium Car Detailing" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Premium car wash & detailing center dedicated to making your vehicle shine like new. Quality service, every time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg ${social.bgColor} text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-raks-silver transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-raks-silver flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  167/2, Raja Street, Kopay<br />Jaffna, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-raks-silver flex-shrink-0" />
                <span className="text-primary-foreground/70">077 071 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-raks-silver flex-shrink-0" />
                <span className="text-primary-foreground/70">info@raksdetailing.com</span>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 rounded-xl bg-primary-foreground/5">
              <h5 className="font-semibold text-sm mb-2">Working Hours</h5>
              <p className="text-sm text-primary-foreground/70">Mon - Sat: 8:00 AM - 7:00 PM</p>
              <p className="text-sm text-primary-foreground/70">Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} RAKS Premium Car Wash & Detailing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-raks-silver transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-raks-silver transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;