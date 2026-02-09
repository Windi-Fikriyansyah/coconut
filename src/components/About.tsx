"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutData } from '@/lib/data';

interface AboutProps {
    data?: AboutData | null;
}

const About = ({ data }: AboutProps) => {
    const title = data?.title || "Rooted in Nature, <br />Driven by Excellence";
    const aboutText = data?.description || "PT Sumber Niaga Alam Sejahtera started as a small initiative to bring high-quality Indonesian coconut products to the world. We believe that sustainability and industrial progress can go hand-in-hand.";
    const image = data?.image || "https://images.unsplash.com/photo-1589139265243-78c773ee49fb?q=80&w=1200&auto=format&fit=crop";
    const highlightValue = data?.highlight_value || "15+ Years";
    const highlightText = data?.highlight_text || "Empowering more than 500 local farmers across the Indonesian archipelago.";
    const buttonText = data?.button_text || "Discover Our Process";
    const buttonLink = data?.button_link || "#process";

    const galleryImages = [
        { url: "/semi_husked_sorting_1770259203229.png", alt: "Production Process" },
        { url: "/charcoal_briquette_test_1770259238325.png", alt: "Quality Testing" },
        { url: "/charcoal_briquette_test_1770259238325.png", alt: "Lab Analysis" },
    ];

    return (
        <section id="about" className="py-32 bg-coco-sandy relative overflow-hidden">
            <div className="absolute -right-24 top-0 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full"
                    >
                        {/* Masonry-style Grid */}
                        <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-full">
                            <div className="col-span-1 row-span-2 relative">
                                <Image
                                    src={galleryImages[0].url}
                                    alt={galleryImages[0].alt}
                                    fill
                                    className="object-cover rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 row-span-1 relative">
                                <Image
                                    src={galleryImages[1].url}
                                    alt={galleryImages[1].alt}
                                    fill
                                    className="object-cover rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-1 row-span-1 relative">
                                <Image
                                    src={galleryImages[2].url}
                                    alt={galleryImages[2].alt}
                                    fill
                                    className="object-cover rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-coco-gold mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="text-coco-forest/70 text-sm md:text-base mb-8 leading-relaxed">
                            {aboutText}
                        </p>

                        <Link href="/about" className="inline-block bg-coco-forest text-coco-sandy px-10 py-4 rounded-full font-bold hover:bg-coco-leaf transition-all">
                            Read More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
