import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, ThumbsUp, Wrench } from "lucide-react";
import aboutWorkshop from "@/assets/about-workshop.jpg";

const highlights = [
  { icon: Shield, title: "Trusted Service", description: "10+ years of excellence" },
  { icon: Users, title: "Expert Staff", description: "Certified professionals" },
  { icon: ThumbsUp, title: "100% Satisfaction", description: "Quality guaranteed" },
  { icon: Wrench, title: "Modern Equipment", description: "Latest technology" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutWorkshop}
                alt="RAKS Workshop"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-6 glass-card p-6 rounded-2xl"
            >
              <div className="text-center">
                <span className="text-4xl font-display font-black text-primary">5000+</span>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              About RAKS
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6 leading-tight">
              Your Vehicle Deserves
              <span className="text-primary block">Premium Care</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At RAKS, we believe every vehicle deserves the finest care. Founded with a passion for automotive excellence, we've grown into a trusted name in premium car detailing services.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals uses only the highest quality products and state-of-the-art equipment to deliver exceptional results. Whether it's a quick wash or a complete detail, we treat every car as if it were our own.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 rounded-xl bg-gradient-to-br from-white via-gray-50 to-primary/5 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Decorative gradient orb */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/15 to-blue-500/15 rounded-full blur-2xl -z-0" />
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all relative z-10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-sm relative z-10">{item.title}</h4>
                  <p className="text-xs text-gray-600 relative z-10">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;