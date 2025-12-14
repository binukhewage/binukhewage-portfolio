'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Added 'home' as the first item
const navItems = ['home', 'work', 'about', 'contact'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottom: isScrolled
            ? '1px solid rgba(0, 0, 0, 0.06)'
            : '1px solid rgba(0, 0, 0, 0)',
          paddingTop: isScrolled ? '16px' : '24px',
          paddingBottom: isScrolled ? '16px' : '24px',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-8 flex justify-between items-center"
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200 transition-transform duration-500 group-hover:scale-110">
            <img
              src="/bh.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="text-xl font-bold tracking-tighter uppercase text-black">
            BINUK HEWAGE
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase text-black">
          {navItems.map((item) => (
            <Link
              key={item}
              // If item is 'home', route to '/', else route to '/item'
              href={item === 'home' ? '/' : `/${item}`}
              className="relative group overflow-hidden"
            >
              <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">
                {item}
              </span>
              <span className="absolute inset-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-black"
        >
          <Menu size={24} />
        </button>
      </motion.header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-lg"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-7 right-8 text-black"
            >
              <X size={28} />
            </button>

            {/* NAV LINKS */}
            <motion.nav
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full flex flex-col items-center justify-center gap-8 text-3xl font-bold uppercase text-black"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    // Same logic for mobile
                    href={item === 'home' ? '/' : `/${item}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;