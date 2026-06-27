import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Connect", desc: "Interface with our global network." },
  { num: "02", title: "Upgrade", desc: "Select your hardware & software enhancements." },
  { num: "03", title: "Synchronize", desc: "Neural alignment and recalibration." },
  { num: "04", title: "Evolve", desc: "Awaken to your new reality." }
];

const Process = () => {
  return (
    <section className="py-24 relative z-10 bg-background/80">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-orbitron mb-16">
          Evolution <span className="text-purple neon-text-purple">Protocol</span>
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full bg-background border border-white/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300 relative">
                  <span className="font-space text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {step.num}
                  </span>
                  {/* Decorative orbital ring */}
                  <div className="absolute inset-[-10px] rounded-full border border-dashed border-transparent group-hover:border-primary/30 group-hover:animate-[spin_10s_linear_infinite]" />
                </div>
                
                <h3 className="text-xl font-orbitron font-bold text-white uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-gray text-sm font-inter">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
