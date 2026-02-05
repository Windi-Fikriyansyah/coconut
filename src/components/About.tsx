"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { AboutData } from '@/lib/data';

interface AboutProps {
    data?: AboutData | null;
}

const About = ({ data }: AboutProps) => {
    const subtitle = data?.subtitle || "The Heritage";
    const title = data?.title || "Rooted in Nature, <br />Driven by Excellence";
    const aboutText = data?.description || "Global Coco Prime started as a small initiative to bring high-quality Indonesian coconut products to the world. We believe that sustainability and industrial progress can go hand-in-hand.";
    const image = data?.image || "https://images.unsplash.com/photo-1589139265243-78c773ee49fb?q=80&w=1200&auto=format&fit=crop";
    const highlightValue = data?.highlight_value || "15+ Years";
    const highlightText = data?.highlight_text || "Empowering more than 500 local farmers across the Indonesian archipelago.";
    const buttonText = data?.button_text || "Discover Our Process";
    const buttonLink = data?.button_link || "#process";

    const features = data?.features
        ? (typeof data.features === 'string' ? JSON.parse(data.features) : data.features)
        : [
            "Modern industrial processing standards",
            "Direct partnership with 500+ local farmers",
            "Sustainable waste-to-energy practice",
            "Global logistics and reliable export chain"
        ];

    return (
        <section id="about" className="py-32 bg-coco-sandy relative overflow-hidden">
            <div className="absolute -right-24 top-0 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={image}
                                alt="Plantation"
                                className="w-full h-[600px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-coco-forest p-10 rounded-3xl text-coco-sandy z-20 hidden md:block max-w-xs shadow-xl">
                            <h4 className="text-3xl font-bold text-coco-gold mb-2">{highlightValue}</h4>
                            <p className="text-sm opacity-80 leading-relaxed">
                                {highlightText}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block">{subtitle}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-coco-forest mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="text-coco-forest/70 text-lg mb-8 leading-relaxed">
                            {aboutText}
                        </p>


                        <div className="space-y-4 mb-10">
                            {features.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-coco-gold w-5 h-5 flex-shrink-0" />
                                    <span className="font-semibold text-coco-forest">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href={buttonLink} className="inline-block bg-coco-forest text-coco-sandy px-10 py-4 rounded-full font-bold hover:bg-coco-leaf transition-all">
                            {buttonText}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
