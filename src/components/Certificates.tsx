"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileCheck, Award, CheckCircle2, Gavel, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

const Certificates = ({ data, isGlobal }: { data?: CertificateData[], isGlobal?: boolean }) => {
  const pathname = usePathname();
  const displayData = data || [];

  // Hide on home page if this is the global instance (we'll place it manually in page.tsx)
  if (isGlobal && pathname === '/') return null;

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
    <section id="legality" className="py-24 bg-coco-forest text-coco-sandy relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-coco-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
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
                <div className="w-full aspect-square flex items-center justify-center p-4 relative transition-all duration-500">
                  {cert.logo ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={safeImage(cert.logo)}
                        alt={`${cert.title} logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain relative z-10"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20 group-hover:text-coco-gold transition-colors">
                      <Shield size={48} strokeWidth={1} />
                    </div>
                  )}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider group-hover:text-coco-gold transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Certificates;
