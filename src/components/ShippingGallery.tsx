"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ShippingGalleryItem } from '@/lib/data';

interface ShippingGalleryProps {
    data?: ShippingGalleryItem[];
}

const ShippingGallery = ({ data }: ShippingGalleryProps) => {
    const items = data || [];

    if (items.length === 0) return null;

    return (
        <section className="py-24 bg-white overflow-hidden" id="documentation">
            <div className="container mx-auto px-6">
                {/* Transparency Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-coco-forest/60 italic text-lg md:text-xl mb-8 leading-relaxed"
                    >
                        "We prioritize transparency at every stage of production. We invite our global partners to conduct factory audits and visit our facilities in Indonesia to witness our quality excellence firsthand."
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold text-coco-forest mb-4 flex items-center gap-4">
                            View Facility Gallery
                            <span className="w-8 h-8 rounded-full border border-coco-gold flex items-center justify-center text-xs text-coco-gold">→</span>
                        </h3>
                        <div className="w-24 h-1 bg-coco-gold"></div>
                    </motion.div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-coco-forest/10"
                        >
                            <Image
                                src={item.image || ''}
                                alt={item.title || 'Shipping Documentation'}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />

                            {/* Overlay for subtle depth */}
                            <div className="absolute inset-0 bg-coco-forest/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShippingGallery;
