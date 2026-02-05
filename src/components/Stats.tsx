"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '@/lib/data';

interface StatsProps {
    data?: StatItem[];
}

const defaultStats: StatItem[] = [
    { label: 'Countries Exported', value: '25+', suffix: '' },
    { label: 'Tons Shipped / Year', value: '5000', suffix: '+' },
    { label: 'Quality Certificates', value: '12', suffix: '' },
    { label: 'Happy Partners', value: '150', suffix: '+' },
];

const Stats = ({ data }: StatsProps) => {
    const stats = data && data.length > 0 ? data : defaultStats;

    return (
        <section className="bg-coco-sandy py-20 border-y border-coco-forest/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-coco-forest mb-2 group-hover:text-coco-gold transition-colors">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm md:text-xs font-bold uppercase tracking-[0.2em] text-coco-forest/40">
                                {stat.label}
                            </div>
                            <div className="w-8 h-1 bg-coco-gold/20 mx-auto mt-4 group-hover:w-16 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

