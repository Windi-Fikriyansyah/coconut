"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shield, Box, Ship, Globe, Leaf, LucideIcon } from 'lucide-react';
import { TrustItem } from '@/lib/data';

const iconMap: { [key: string]: LucideIcon } = {
    Factory,
    Shield,
    Box,
    Ship,
    Globe,
    Leaf
};

interface TrustSectionProps {
    data?: TrustItem[];
    title?: string;
    subtitle?: string;
}

const defaultItems: TrustItem[] = [
    {
        title: "Direct Factory Access",
        text: "We control the entire supply chain from the farm to the container.",
        icon: "Factory"
    },
    {
        title: "International Standards",
        text: "Our products undergo rigorous Quality Control (QC) to meet global export requirements.",
        icon: "Shield"
    },
    {
        title: "Flexible Packaging",
        text: "We offer Private Label (OEM) services and various packaging sizes (Bulk, Retail, or Custom).",
        icon: "Box"
    },
    {
        title: "Efficient Logistics",
        text: "Strategically located near major Indonesian ports to ensure timely delivery worldwide.",
        icon: "Ship"
    }
];

const TrustSection = ({ data, title = "Confidence at Scale: Your Strategic Supply Partner", subtitle = "Confidence & Scale" }: TrustSectionProps) => {
    const items = data && data.length > 0 ? data : defaultItems;

    return (
        <section className="py-24 bg-coco-sandy/50 border-t border-coco-forest/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                            {subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-coco-forest mb-6">
                            {title}
                        </h2>
                        <div className="w-24 h-1 bg-coco-gold mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {items.map((item, index) => {
                            const IconComponent = iconMap[item.icon] || Factory;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-coco-forest/5 rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all duration-300">
                                            <IconComponent size={28} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-coco-forest mb-2 group-hover:text-coco-gold transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-coco-forest/60 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

