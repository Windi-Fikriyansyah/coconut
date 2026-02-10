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

  if (isGlobal && pathname === '/') return null;
  if (displayData.length === 0) return null;

  const safeImage = (url: string | null) => {
    if (!url) return '';
    if (url.startsWith('/')) return url;

    try {
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        const urlObj = new URL(url);
        return urlObj.pathname;
      }
    } catch {
      return url.replace(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/, '');
    }

    return url;
  };

  // duplicate for seamless loop
  const marqueeData = [...displayData, ...displayData];

  return (
    <section id="legality" className="py-8 bg-coco-forest text-coco-sandy relative overflow-hidden">

      {/* decorative blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-coco-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden z-10">

        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-12 w-max will-change-transform"
            animate={{ x: [0, -2000] }}
            transition={{
              ease: "linear",
              duration: 40, // slower = lebih mahal
              repeat: Infinity,
            }}
          >
            {[...displayData, ...displayData, ...displayData].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex flex-col items-center min-w-[160px] md:min-w-[200px]"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  {cert.logo ? (
                    <Image
                      src={safeImage(cert.logo)}
                      alt={cert.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Shield size={48} className="text-white/20" />
                  )}
                </div>

                <h3 className="text-xs font-bold text-white/60 uppercase tracking-wider mt-3 text-center">
                  {cert.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Certificates;
