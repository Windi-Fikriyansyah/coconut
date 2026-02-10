"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Search } from 'lucide-react';

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
    { name: 'News', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine if navbar should use light (white) text
  const isTransparent = !scrolled && !solid;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white py-3 shadow-sm`}
    >
      <div className="container mx-auto px-8 md:px-16 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo3.webp"
              alt="PT Sumber Niaga Alam Sejahtera Logo"
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors relative group text-coco-forest/90 hover:text-coco-gold"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coco-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Search & Inquiry / Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-coco-forest/5 border border-coco-forest/10 rounded-full px-4 py-1.5 focus-within:bg-coco-forest/10 transition-all">
            <Search size={16} className="text-coco-forest/60" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 text-xs text-coco-forest placeholder-coco-forest/40 ml-2 w-24 focus:w-40 transition-all outline-none"
            />
          </div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors text-coco-forest"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
