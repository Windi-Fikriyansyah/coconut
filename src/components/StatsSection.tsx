"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CompanyStat } from '@/lib/data';

interface StatsSectionProps {
    data: CompanyStat[];
}

const StatsSection = ({ data }: StatsSectionProps) => {
    // If no data, use fallback
    const stats = data && data.length > 0 ? data : [
        { id: 1, value: "20+", label: "Farmers & Fishermen Partners", display_order: 1 },
        { id: 2, value: "50+", label: "Natural Products", display_order: 2 },
        { id: 3, value: "10+", label: "Export Ready Products", display_order: 3 },
        { id: 4, value: "100%", label: "Quality Commitment", display_order: 4 },
    ];

    return (
        <section className="bg-blue-600 py-4 md:py-8 text-white">
            <div className="container mx-auto px-5 md:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center justify-center p-4"
                        >
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-sm md:text-base lg:text-lg font-medium opacity-90 leading-snug max-w-[200px]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
