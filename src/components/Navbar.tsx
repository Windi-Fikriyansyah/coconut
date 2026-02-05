"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = ({ solid = false }: { solid?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine if navbar should use light (white) text
  const isTransparent = !scrolled && !solid;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${(scrolled || solid) ? 'glass-dark py-3 shadow-md' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <img
            src="/logo1.webp"
            alt="Global Coco Prime Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors relative group text-white/90 hover:text-coco-gold"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coco-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-coco-gold text-coco-forest px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:bg-coco-gold/90"
          >
            Inquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-coco-forest hover:text-coco-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-coco-forest text-center text-coco-sandy py-3 rounded-xl font-bold"
              >
                Inquiry Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
