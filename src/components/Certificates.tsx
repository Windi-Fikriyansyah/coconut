"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileCheck, Award, CheckCircle2, Gavel, LucideIcon } from 'lucide-react';
import Image from 'next/image';

const iconMap: { [key: string]: LucideIcon } = {
  Shield,
  FileCheck,
  Award,
  CheckCircle2,
  Gavel
};

interface CertificateData {
  id?: number;
  title: string;
  full_title?: string;
  logo: string | null;
}

const Certificates = ({ data }: { data?: CertificateData[] }) => {
  const displayData = data || [];

  // Fail-safe: Sanitize URL on the client side just in case the server sends localhost
  const safeImage = (url: string | null) => {
    if (!url) return '';
    if (url.startsWith('/')) return url; // Already relative
    try {
      // If it's a localhost URL, strip the origin
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        const urlObj = new URL(url);
        return urlObj.pathname;
      }
    } catch (e) {
      // If URL parsing fails, just return original or try to strip manually
      return url.replace(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/, '');
    }
    return url;
  };

  if (displayData.length === 0) return null;

  return (
    <section id="legality" className="py-24 bg-coco-sandy/20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-coco-forest/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Trust & Compliance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-coco-forest mb-6"
          >
            Legality & Quality Certificates
          </motion.h2>
          <div className="w-24 h-1 bg-coco-gold mx-auto mb-8 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-coco-forest/70"
          >
            Certified excellence and global compliance in every shipment.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-8">
          {displayData.map((cert, index) => {
            return (
              <motion.div
                key={cert.id || index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col items-center w-full max-w-[160px] md:max-w-[180px]"
              >
                <div className="w-full aspect-square bg-white border border-coco-forest/5 rounded-2xl flex items-center justify-center p-6 shadow-sm group-hover:shadow-xl group-hover:border-coco-gold/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-coco-sandy/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {cert.logo ? (
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={safeImage(cert.logo)}
                        alt={`${cert.title} logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain relative z-10"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-coco-forest/20 group-hover:text-coco-gold transition-colors">
                      <Shield size={48} strokeWidth={1} />
                    </div>
                  )}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xs font-bold text-coco-forest/80 uppercase tracking-wider group-hover:text-coco-forest transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-coco-forest/10 text-center"
        >
          <p className="text-coco-forest/50 text-sm max-w-2xl mx-auto italic">
            "We maintain rigorous documentation for all export processes. Full certifications are available for review during partnership negotiations."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
