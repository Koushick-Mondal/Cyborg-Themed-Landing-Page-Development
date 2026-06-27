import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Cpu, Network } from 'lucide-react';

const features = [
  {
    icon: <Brain size={32} />,
    title: "Neural Intelligence",
    description: "Seamlessly integrate your consciousness with our advanced neural network for unparalleled cognitive capabilities.",
    color: "group-hover:text-primary group-hover:neon-text-primary"
  },
  {
    icon: <Eye size={32} />,
    title: "Cyber Vision",
    description: "Enhance your optical receptors with AR overlays, thermal imaging, and microscopic zoom capabilities.",
    color: "group-hover:text-purple group-hover:neon-text-purple"
  },
  {
    icon: <Cpu size={32} />,
    title: "Quantum Core",
    description: "Power your enhancements with a miniaturized quantum processor, ensuring zero latency and infinite computational power.",
    color: "group-hover:text-pink"
  },
  {
    icon: <Network size={32} />,
    title: "Adaptive AI",
    description: "An onboard artificial intelligence that learns from your behavior, optimizing your cybernetics in real-time.",
    color: "group-hover:text-blue-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
          >
            Enhance Your <span className="text-primary neon-text-primary">Reality</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gray max-w-2xl mx-auto font-inter text-lg"
          >
            Our cybernetic augmentations bridge the gap between human limitation and technological perfection.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              className="group glass-card p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glowing background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`text-white mb-6 transition-colors duration-300 ${feature.color}`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold font-orbitron text-white mb-4 uppercase">
                {feature.title}
              </h3>
              
              <p className="text-gray font-inter text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Tech decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
