import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'About', 'Features', 'Gallery', 'Technology', 'Contact'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-black font-orbitron text-white hover:neon-text-primary transition-all">
          CYBER<span className="text-primary">CORE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-gray hover:text-white font-inter text-sm tracking-wider uppercase transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="px-6 py-2 border border-primary text-primary font-orbitron rounded-sm hover:bg-primary hover:text-background neon-border-primary transition-all duration-300 uppercase tracking-widest text-sm">
            Join Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-orbitron text-white hover:text-primary transition-colors uppercase"
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-8 px-8 py-3 border border-primary text-primary font-orbitron rounded-sm hover:bg-primary hover:text-background neon-border-primary transition-all duration-300 uppercase tracking-widest"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
