import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    title: "Optical Interface",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Neural Link",
    category: "Software",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Bio-Synthetic Arm",
    category: "Prosthetics",
    image: "https://images.unsplash.com/photo-1620503374956-c942862f0372?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Data Construct",
    category: "Virtual",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-orbitron mb-2">
              Cyber <span className="text-primary neon-text-primary">Showcase</span>
            </h2>
            <p className="text-gray font-inter">Glimpse into the upgraded future.</p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border border-white/20 text-white font-orbitron hover:bg-white hover:text-black transition-colors uppercase text-sm">
            View All Files
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 z-10 pointer-events-none" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-space tracking-widest uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-orbitron font-bold text-white uppercase">
                  {item.title}
                </h3>
              </div>
              
              {/* Scanline effect on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] z-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
