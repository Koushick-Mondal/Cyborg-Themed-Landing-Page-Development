import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { target: 99.9, suffix: "%", label: "Accuracy", decimals: 1 },
  { target: 10, suffix: "M+", label: "Connected Users", decimals: 0 },
  { target: 2045, suffix: "", label: "Launch Year", decimals: 0 },
  { target: "∞", suffix: "", label: "Possibilities", isInfinity: true }
];

const Counter = ({ target, suffix, decimals, isInfinity, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isInfinity) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(start);
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target, isInView, isInfinity]);

  if (isInfinity) {
    return <span className="font-space font-bold text-5xl md:text-7xl text-white">∞</span>;
  }

  return (
    <span className="font-space font-bold text-5xl md:text-7xl text-white">
      {count.toFixed(decimals)}
      <span className="text-primary text-3xl md:text-5xl">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 border-y border-white/10 bg-background/50 backdrop-blur-md relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div className="neon-text-primary">
                <Counter 
                  target={stat.target} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals} 
                  isInfinity={stat.isInfinity}
                  isInView={isInView}
                />
              </div>
              <p className="text-gray font-orbitron text-sm md:text-base uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
