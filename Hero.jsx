import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col space-y-6"
          style={{ y: yText, opacity, scale }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-block border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full w-max mb-4">
            <span className="text-primary font-space text-xs tracking-widest uppercase">System Online V.10.4</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron leading-tight text-white uppercase">
            <span className="block">CYBER</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple to-pink neon-text-primary">CORE</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-orbitron text-gray uppercase tracking-widest">
            "The Future Is Already Inside You."
          </h2>
          
          <p className="text-gray/80 font-inter text-lg max-w-xl leading-relaxed">
            Experience the next evolution of human existence. Cybernetic enhancements tailored for optimal performance, neural synchrony, and limitless potential.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
            <button className="group relative px-8 py-4 bg-primary text-background font-orbitron font-bold rounded-sm uppercase tracking-widest overflow-hidden hover:neon-border-primary transition-all">
              <span className="relative z-10">Become Enhanced</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-orbitron font-bold rounded-sm uppercase tracking-widest hover:bg-white/5 hover:border-white transition-all flex items-center justify-center space-x-2">
              <span>Watch Protocol</span>
              <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            </button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="hidden lg:flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Abstract Futuristic Element / Hologram */}
          <div className="relative w-96 h-96">
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 rounded-full border border-purple/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-8 rounded-full border border-pink/30 bg-gradient-to-tr from-primary/10 to-purple/10 backdrop-blur-sm flex items-center justify-center"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-32 h-32 rounded-full bg-primary/20 blur-2xl absolute" />
              {/* Central Core Element */}
              <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_rgba(0,245,255,1)] flex items-center justify-center relative z-10">
                <div className="w-8 h-8 bg-background rounded-full" />
              </div>
            </motion.div>
            
            {/* Floating holographic data nodes */}
            <motion.div 
              className="absolute top-0 right-10 glass px-4 py-2 text-xs font-space text-primary border border-primary/30"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              Neural Sync: 99.8%
            </motion.div>
            <motion.div 
              className="absolute bottom-10 left-0 glass px-4 py-2 text-xs font-space text-purple border border-purple/30"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              Quantum Core: Active
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
