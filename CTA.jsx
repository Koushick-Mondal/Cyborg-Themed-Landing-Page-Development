import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 relative z-10 flex items-center justify-center overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass border border-primary/30 p-12 md:p-20 rounded-3xl max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden"
        >
          {/* Animated border line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple to-transparent" />

          <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-orbitron mb-6 leading-tight">
            Ready To Upgrade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple">Humanity?</span>
          </h2>
          
          <p className="text-gray text-lg font-inter mb-10 max-w-xl mx-auto">
            The next stage of human evolution awaits. Initialize the protocol and transcend your physical limitations today.
          </p>

          <button className="group relative px-10 py-5 bg-white text-background font-orbitron font-bold rounded-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            <span className="relative z-10">Activate Protocol</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
