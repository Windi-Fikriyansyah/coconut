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
    const backgroundImage = data?.background_image || "https://images.unsplash.com/photo-1596722511434-b811e5a32694?q=80&w=2000&auto=format&fit=crop";

    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden py-20 md:py-0">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-[center_top] z-0"
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-coco-forest via-coco-forest/85 md:via-coco-forest/80 to-coco-forest/40"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 border border-coco-gold/30 rounded-full text-coco-gold text-[10px] md:text-xs font-bold tracking-widest uppercase bg-coco-gold/5">
                            {badgeText}
                        </span>
                        <h1
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-base md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                            {subtitle}
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                                href={ctaLink}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-coco-gold text-coco-forest px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <Link href="/about" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
                                Our Story
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Floating features info */}
            <div className="absolute bottom-12 right-0 left-0 hidden lg:block">
                <div className="container mx-auto px-6">
                    <div className="flex gap-8 justify-end">
                        {[
                            { icon: Globe, text: "Global Distribution" },
                            { icon: ShieldCheck, text: "ISO Certified" },
                            { icon: Factory, text: "Direct Manufacturing" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-4 px-6 rounded-2xl border border-white/10"
                            >
                                <item.icon className="text-coco-gold w-5 h-5" />
                                <span className="text-coco-sandy text-sm font-medium uppercase tracking-wider">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
