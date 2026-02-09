"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Factory } from 'lucide-react';
import Link from 'next/link';
import { HeroData } from '@/lib/data';

interface HeroProps {
    data?: HeroData | null;
}

const Hero = ({ data }: HeroProps) => {
    const title = data?.title || 'Premium Coconut <br className="hidden sm:block" /> <span className="text-coco-gold italic font-serif">Derivatives</span> for the <br className="hidden sm:block" /> Global Market';
    const subtitle = data?.subtitle || 'Committed to sustainability and excellence. We bridge the gap between local artisan farmers and international industrial standards.';
    const ctaText = data?.cta_text || 'Explore Products';
    const ctaLink = data?.cta_link || '#products';
    const badgeText = data?.badge_text || 'Premium Coconut Exporter';
    const backgroundImage = data?.background_image || "/background_hero.webp";

    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-8 md:px-16 relative z-10 pt-24 pb-20 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >

                        <h1
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-sm md:text-base text-coco-sandy/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/about"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-coco-gold text-coco-forest px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>



                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Floating features info */}
            <div className="absolute bottom-12 right-0 left-0 hidden lg:block">
                <div className="container mx-auto px-8 md:px-16">

                </div>
            </div>
        </section>
    );
};

export default Hero;
