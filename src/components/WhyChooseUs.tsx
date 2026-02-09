"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Truck, ShieldCheck, LucideIcon } from 'lucide-react';
import { WhyChooseUsItem } from '@/lib/data';

const iconMap: { [key: string]: LucideIcon } = {
    Leaf,
    Award,
    Truck,
    ShieldCheck
};

interface WhyChooseUsProps {
    data?: WhyChooseUsItem[];
    title?: string;
    subtitle?: string;
}

const defaultItems: WhyChooseUsItem[] = [
    {
        icon: "Leaf",
        title: "100% Sustainable",
        description: "Every part of the coconut is utilized, ensuring zero-waste production and eco-friendly practices."
    },
    {
        icon: "Award",
        title: "Uncompromising Quality",
        description: "Multi-stage quality control ensures only premium products reach our international clients."
    },
    {
        icon: "Truck",
        title: "Global Logistics",
        description: "Seamless global distribution network with tracking and reliable delivery timelines."
    },
    {
        icon: "ShieldCheck",
        title: "Certified Excellence",
        description: "Our facilities and products are ISO, Organic, and Halal certified for global compliance."
    }
];

const WhyChooseUs = ({ data, title = "Why Global Partners <br />Trust Us", subtitle = "The Advantage" }: WhyChooseUsProps) => {
    const items = data && data.length > 0 ? data : defaultItems;

    return (
        <section className="py-32 bg-coco-forest text-coco-sandy">
            <div className="container mx-auto px-8 md:px-16">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block">{subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: title }} />
                    <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {items.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || Leaf;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors"
                            >
                                <div className="bg-coco-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-coco-gold transition-colors duration-500">
                                    <IconComponent className="text-coco-gold w-8 h-8 group-hover:text-coco-forest transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

