"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, FileText, Package } from "lucide-react";

const Navbar = ({ solid = false }: { solid?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white py-3 shadow-sm`}
    >
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-none">
          {" "}
          {/* Diubah ke flex-none agar tidak memakan sisa ruang */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo3.webp"
              alt="Logo"
              width={180}
              height={48}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold transition-colors relative group text-coco-forest/90 hover:text-coco-gold whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coco-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center justify-end space-x-3 ml-4">
          {/* Desktop Search - Dikecilkan lebarnya agar tidak mendorong tombol */}
          {/* <div className="hidden xl:flex items-center bg-coco-forest/5 border border-coco-forest/10 rounded-full px-3 py-1.5 focus-within:bg-coco-forest/10 transition-all">
            <Search size={14} className="text-coco-forest/60" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:ring-0 text-xs text-coco-forest placeholder-coco-forest/40 ml-2 w-16 focus:w-24 transition-all outline-none"
            />
          </div> */}

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/request-a-sample"
              className="flex items-center justify-center text-[11px] uppercase tracking-wider font-bold border border-coco-forest px-4 py-2.5 rounded-lg hover:bg-coco-forest hover:text-white transition-all whitespace-nowrap min-w-max"
            >
              Request a Sample
            </Link>
            <Link
              href="/request-a-quote"
              className="flex items-center justify-center text-[11px] uppercase tracking-wider font-bold bg-coco-gold text-white px-4 py-2.5 rounded-lg hover:bg-coco-forest transition-all shadow-sm whitespace-nowrap min-w-max"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-coco-forest p-1"
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
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-coco-forest"
                >
                  {link.name}
                </Link>
              ))}
              <hr />
              {/* Tombol Mobile tetap rapi dalam grid */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/request-a-sample"
                  onClick={() => setIsOpen(false)}
                  className="bg-coco-forest/5 text-coco-forest text-center py-3 rounded-xl font-bold text-[12px] uppercase whitespace-nowrap px-2"
                >
                  Sample
                </Link>
                <Link
                  href="/request-a-quote"
                  onClick={() => setIsOpen(false)}
                  className="bg-coco-gold text-white text-center py-3 rounded-xl font-bold text-[12px] uppercase whitespace-nowrap px-2"
                >
                  Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
