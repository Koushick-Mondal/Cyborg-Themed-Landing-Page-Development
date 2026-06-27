import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Activity, Fingerprint } from 'lucide-react';

const featuresData = [
  {
    num: "01",
    title: "Synaptic Overdrive",
    desc: "Accelerate your reaction times to superhuman levels.",
    icon: <Zap size={20} />
  },
  {
    num: "02",
    title: "Titanium Plating",
    desc: "Subdermal armor that provides maximum protection without sacrificing mobility.",
    icon: <Shield size={20} />
  },
  {
    num: "03",
    title: "Biometric Integration",
    desc: "Seamlessly interface with technology using your unique biological signature.",
    icon: <Fingerprint size={20} />
  },
  {
    num: "04",
    title: "Vital Monitoring",
    desc: "Real-time diagnostics of your entire biological and cybernetic system.",
    icon: <Activity size={20} />
  }
];

const Features = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="features" ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-orbitron">
            Core <span className="text-purple neon-text-purple">Upgrades</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-purple to-pink transform md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {featuresData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 border border-white/10 hover:border-primary/40 group relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 text-7xl font-space font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                      {item.num}
                    </div>
                    
                    <div className={`mb-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      {item.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white font-orbitron mb-2 uppercase group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray text-sm font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
