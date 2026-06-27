import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Atom, Network, Bot, Link } from 'lucide-react';

const techStack = [
  { name: "React", icon: <Code2 size={40} />, color: "text-[#61DAFB]" },
  { name: "AI", icon: <Bot size={40} />, color: "text-[#FF2E63]" },
  { name: "Quantum Computing", icon: <Atom size={40} />, color: "text-[#7C3AED]" },
  { name: "Neural Networks", icon: <Network size={40} />, color: "text-[#00F5FF]" },
  { name: "Robotics", icon: <Cpu size={40} />, color: "text-white" },
  { name: "Blockchain", icon: <Link size={40} />, color: "text-[#F7931A]" },
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-orbitron mb-4">
            Powered by <span className="text-pink neon-text-pink">Next-Gen</span> Tech
          </h2>
          <p className="text-gray font-inter max-w-2xl mx-auto">
            Our architecture leverages the most advanced frameworks and protocols available.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: idx * 0.1
              }}
              whileHover={{ 
                y: -15, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)"
              }}
              className="glass-card flex flex-col items-center justify-center p-8 w-40 h-40 border border-white/5 cursor-pointer relative group"
            >
              <motion.div 
                className={`${tech.color} mb-4`}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
              >
                {tech.icon}
              </motion.div>
              <span className="font-orbitron text-xs font-semibold text-white tracking-wider group-hover:text-primary transition-colors text-center uppercase">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technology;
