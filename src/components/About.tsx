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
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-raks-silver/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 text-sm font-semibold text-raks-silver bg-primary/80 rounded-full backdrop-blur-sm border border-raks-silver/20">
              ABOUT RAKS
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Excellence in
            <span className="block mt-2 text-primary">
              Automotive Care
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <img
                src={aboutWorkshop}
                alt="RAKS Workshop"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20"
                >
                  <p className="text-white text-lg font-semibold mb-2">Trusted Since 2014</p>
                  <p className="text-white/90 text-sm">Delivering excellence in automotive care for over a decade</p>
                </motion.div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-gradient-to-br from-raks-silver to-white p-8 rounded-2xl shadow-2xl border-2 border-white"
            >
              <div className="text-center">
                <span className="text-5xl font-black text-primary">5000+</span>
                <p className="text-sm font-semibold text-primary/80 mt-2">Satisfied Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Crafting Excellence in Every Detail
              </h3>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                At RAKS Auto Shine, we don't just clean cars—we restore their glory. With over a decade of experience in premium automotive care, we've built our reputation on precision, quality, and an unwavering commitment to customer satisfaction.
              </p>
              
              <p className="text-muted-foreground text-base leading-relaxed">
                From comprehensive detailing and advanced ceramic coatings to professional auto repair and bodywork, our expert technicians use cutting-edge equipment and premium products to deliver results that consistently exceed expectations. Every vehicle that enters our facility receives the meticulous attention it deserves.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-primary/30 hover:border-raks-silver/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-raks-silver/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-raks-silver/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-base mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
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