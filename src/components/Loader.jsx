import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <div className="relative flex flex-col items-center">
          {/* Glitching Logo Text */}
          <motion.h1 
            className="text-6xl md:text-8xl font-black font-orbitron neon-text-primary mb-8"
            animate={{ 
              x: [0, -2, 2, -2, 0],
              y: [0, 2, -2, 2, 0],
              opacity: [1, 0.8, 1, 0.9, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.4, 
              repeatDelay: Math.random() * 2 + 1 
            }}
          >
            CYBERCORE
          </motion.h1>

          {/* Cyber Loading Bar Container */}
          <div className="w-64 h-1 border border-primary/50 relative overflow-hidden bg-white/5">
            {/* Progress Fill */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              style={{ width: `${progress}%` }}
              layout
            />
            {/* Glitch overlay line */}
            <motion.div
              className="absolute top-0 left-0 w-10 h-full bg-white opacity-50 blur-[2px]"
              animate={{ x: [-100, 300] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>

          <div className="mt-4 font-space text-primary tracking-widest text-sm">
            INITIALIZING PROTOCOL... {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
