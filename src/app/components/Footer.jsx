'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-20 mt-32 rounded-t-lg md:rounded-t-3xl relative overflow-hidden">
      
      {/* THE DOTTED DESIGN (White dots on Black background) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col justify-between min-h-[60vh]">
        
        {/* TOP SECTION: CTA & NAV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Big CTA */}
          <div className="space-y-8">
            <h2 className="text-[12vw] md:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase">
              Let's Work <br />
              <span className="text-gray-500">Together</span>
            </h2>
            <a 
              href="mailto:hello@binuk.com" 
              className="inline-block text-xl md:text-2xl font-light border-b border-gray-600 pb-1 hover:text-gray-300 hover:border-white transition-all"
            >
              binukhe@gmail.com
            </a>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 md:justify-end items-start md:pt-4">
            
            {/* Column 1: Sitemap */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Sitemap</h3>
              <nav className="flex flex-col gap-4 text-lg font-medium">
                {['Work', 'About', 'Notes', 'Contact'].map((item) => (
                  <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-400 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 2: Socials */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Socials</h3>
              <div className="flex flex-col gap-4 text-lg font-medium">
                <a href="https://linkedin.com/in/binuk-hewage" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/binukhewage" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                  <Github size={18} /> Github
                </a>
                <a href="https://instagram.com/binuk.he" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold uppercase tracking-tighter">BINUK HEWAGE</h3>
            <p className="text-xs text-gray-500 mt-2">
              Full-Stack Devloper <br />
              Based in Sri Lanka.
            </p>
          </div>

          <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
             <span className="text-xs text-gray-600 uppercase tracking-widest hidden md:block">
               All Rights Reserved 2025
             </span>

             <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gray-300 transition-colors"
             >
                Back to Top
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
                    <ArrowUp size={16} />
                </div>
             </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;