import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background pt-20 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-3xl font-black font-orbitron text-white inline-block mb-6">
              CYBER<span className="text-primary">CORE</span>
            </a>
            <p className="text-gray text-sm font-inter leading-relaxed">
              Pioneering the future of cybernetic enhancement and human evolution. 
              The future is already inside you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-orbitron font-bold uppercase mb-6 tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Features', 'Technology'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray hover:text-primary transition-colors text-sm font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-orbitron font-bold uppercase mb-6 tracking-widest text-sm">Network</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-blue-500 hover:text-blue-500 transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-sky-500 hover:text-sky-500 transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink hover:text-pink transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-orbitron font-bold uppercase mb-6 tracking-widest text-sm">Initialize Data Stream</h4>
            <p className="text-gray text-xs font-inter mb-4">Subscribe for system updates and upgrade notices.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL" 
                className="bg-white/5 border border-white/20 text-white font-space text-sm px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-background px-4 py-2 flex items-center justify-center hover:bg-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray/50 text-xs font-space uppercase">
            &copy; {new Date().getFullYear()} CyberCore Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray/50 text-xs font-space uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
