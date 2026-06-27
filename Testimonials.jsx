import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const testimonials = [
  {
    name: "Alex Vance",
    role: "Cyber-Operative",
    quote: "The synaptic overdrive completely changed how I interact with the digital realm. Zero latency.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Neural Architect",
    quote: "Integration was seamless. My cognitive processing speed has increased by 400%.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Sec-Corp Leader",
    quote: "The titanium plating is lightweight yet indestructible. A masterpiece of engineering.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Data Runner",
    quote: "I see the world in streams of data now. The optical interface is beyond anything I imagined.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-orbitron">
          User <span className="text-blue-500 neon-text-primary">Logs</span>
        </h2>
      </div>

      <div className="flex w-full">
        <motion.div 
          className="flex space-x-6 px-6"
          style={{ x }}
        >
          {/* Double the array for seamless scrolling effect */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx}
              className="w-[350px] md:w-[450px] flex-shrink-0 glass-card p-8 border border-white/10"
            >
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray/90 font-inter mb-8 text-lg italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-primary/50 object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-white font-orbitron font-bold">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-space uppercase">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
