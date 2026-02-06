"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TreePalm, ClipboardCheck, Factory, SearchCheck, Box, Ship, LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
    TreePalm,
    ClipboardCheck,
    Factory,
    SearchCheck,
    Box,
    Ship
};

interface ProcessStepData {
    step_number: string;
    title: string;
    description: string;
    icon: string;
}

const Process = ({ data }: { data?: ProcessStepData[] }) => {
    const displaySteps = data || [];

    return (
        <section id="process" className="py-24 bg-coco-forest text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-10 w-64 h-64 bg-coco-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-coco-gold rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Our Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        From Indonesian Groves to Global Markets
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70"
                    >
                        Our end-to-end production process is engineered to guarantee consistency, safety, and superior quality for every coconut derivative we export.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                    {displaySteps.map((step, index) => {
                        const IconComponent = iconMap[step.icon] || TreePalm;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative z-10 group text-center flex flex-col items-center"
                            >
                                <div className="mb-8 relative flex justify-center w-full">
                                    {/* Connection Line - Desktop (3 cols) */}
                                    <div className={`hidden lg:block absolute top-10 h-px bg-white/10 -translate-y-1/2 z-0 
                                        ${(index + 1) % 3 === 0 ? 'hidden' : 'left-1/2 w-[calc(100%+3rem)]'}
                                    `}></div>

                                    {/* Connection Line - Tablet (2 cols) */}
                                    <div className={`hidden md:block lg:hidden absolute top-10 h-px bg-white/10 -translate-y-1/2 z-0 
                                        ${(index + 1) % 2 === 0 ? 'hidden' : 'left-1/2 w-[calc(100%+3rem)]'}
                                    `}></div>

                                    <div className="text-8xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-coco-gold/10 transition-colors duration-500">
                                        {step.step_number}
                                    </div>
                                    <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-coco-gold group-hover:bg-coco-gold group-hover:text-coco-forest transition-all duration-500 relative z-20 mx-auto">
                                        <IconComponent size={36} className="text-coco-gold group-hover:text-coco-forest transition-colors duration-500" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-coco-gold transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                                    {step.description}
                                </p>

                                <div className="mt-8 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-px bg-coco-gold"></div>
                                    <span className="text-coco-gold text-xs font-bold uppercase tracking-tighter">Excellent Standard</span>
                                    <div className="w-8 h-px bg-coco-gold"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Process;
