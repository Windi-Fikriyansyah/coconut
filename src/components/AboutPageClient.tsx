"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Target, Eye, Heart, ShieldCheck, Users, Globe } from 'lucide-react';
import { AboutPageData } from '@/lib/data';
import { motion } from 'framer-motion';

const iconMap: any = {
    ShieldCheck,
    Heart,
    Globe,
    Users
};

export default function AboutPageClient({ data }: { data: AboutPageData }) {
    const missionPoints = typeof data.mission_points === 'string' ? JSON.parse(data.mission_points) : data.mission_points;
    const valuesData = typeof data.values_data === 'string' ? JSON.parse(data.values_data) : data.values_data;

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                    <img src={data.hero_image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        {data.hero_badge}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        dangerouslySetInnerHTML={{ __html: data.hero_title }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        {data.hero_description}
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-coco-forest mb-6">{data.journey_title}</h2>
                            <p className="text-coco-forest/70 text-lg leading-relaxed mb-6">
                                {data.journey_description_1}
                            </p>
                            <p className="text-coco-forest/70 text-lg leading-relaxed">
                                {data.journey_description_2}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img src={data.journey_image} alt="Our Journey" className="w-full h-auto" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-coco-forest text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10"
                        >
                            <div className="w-16 h-16 bg-coco-gold rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="text-coco-forest" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{data.vision_title}</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {data.vision_description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10"
                        >
                            <div className="w-16 h-16 bg-coco-gold rounded-2xl flex items-center justify-center mb-6">
                                <Target className="text-coco-forest" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{data.mission_title}</h3>
                            <ul className="space-y-4 text-white/70 text-lg">
                                {missionPoints.map((point: string, i: number) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-coco-gold rounded-full flex-shrink-0"></div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-coco-forest mb-4">Core Values</h2>
                        <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valuesData.map((value: any, i: number) => {
                            const Icon = iconMap[value.icon] || ShieldCheck;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl border border-coco-forest/5 text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-coco-sandy rounded-xl flex items-center justify-center mx-auto mb-6 text-coco-forest">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-coco-forest mb-2">{value.title}</h4>
                                    <p className="text-coco-forest/60 text-sm leading-relaxed">{value.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
