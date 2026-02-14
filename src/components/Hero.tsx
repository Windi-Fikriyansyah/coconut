"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HeroData } from "@/lib/data";
import { getOptimizedImage, imageKitLoader } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface HeroProps {
  data?: HeroData[];
}

const Hero = ({ data = [] }: HeroProps) => {
  if (!data.length) return null;

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div
        className="hero-prev hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20
  w-14 h-14 items-center justify-center rounded-full
  bg-black/40 backdrop-blur-md border border-white/20
  cursor-pointer transition-all duration-300 hover:bg-black/60 hover:scale-110"
        aria-label="Previous Slide"
      >
        <ArrowLeft className="w-7 h-7 text-white" />
      </div>

      {/* RIGHT */}
      <div
        className="hero-next hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20
  w-14 h-14 items-center justify-center rounded-full
  bg-black/40 backdrop-blur-md border border-white/20
  cursor-pointer transition-all duration-300 hover:bg-black/60 hover:scale-110"
        aria-label="Next Slide"
      >
        <ArrowRight className="w-7 h-7 text-white" />
      </div>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        className="h-[100dvh]"
      >
        {data.map((hero, index) => {
          const title = hero.title;
          const subtitle = hero.subtitle;
          const ctaText = hero.cta_text || "Explore Products";
          const ctaLink = hero.cta_link || "#products";
          const backgroundImage =
            hero.background_image || "/background_hero.webp";

          return (
            <SwiperSlide key={index}>
              <div className="relative min-h-[100dvh] flex items-center justify-center">
                {/* Background Image with Next.js Optimization */}
                <div className="absolute inset-0 z-0">
                  <Image
                    loader={imageKitLoader}
                    src={backgroundImage}
                    alt={title.replace(/<[^>]*>?/gm, "")}
                    fill
                    priority={index === 0}
                    decoding={index === 0 ? "sync" : "async"}
                    className="object-cover"
                    sizes="100vw"
                    quality={70}
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 md:px-16 relative z-10 text-center">
                  <div className="max-w-4xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-4 md:mb-6 drop-shadow-lg"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />

                      <p className="text-sm md:text-base text-coco-sandy/90 mb-8 md:mb-10 max-w-2xl mx-auto">
                        {subtitle}
                      </p>

                      <motion.a
                        href={ctaLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-coco-gold text-coco-forest px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base inline-flex items-center gap-2"
                      >
                        {ctaText}
                        <ArrowRight className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
