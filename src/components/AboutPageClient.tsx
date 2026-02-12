"use client";

import Link from 'next/link';
import Image from 'next/image';
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
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden text-center">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url("${data.hero_image}")`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block drop-shadow-md"
                        >
                            {data.hero_badge}
                        </motion.span>
                        <h1
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg max-w-4xl"
                            dangerouslySetInnerHTML={{ __html: data.hero_title }}
                        />
                        <p className="text-sm md:text-base text-coco-sandy/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            {data.hero_description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            {/* <section className="py-24">
                <div className="container mx-auto px-8 md:px-16">
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
                            className="rounded-3xl overflow-hidden shadow-2xl relative"
                        >
                            <Image
                                src={data.journey_image}
                                alt="Our Journey"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* Our Journey */}
            <section className="py-32 bg-coco-sandy relative overflow-hidden">

                {/* glow effect */}
                <div className="absolute -right-24 top-0 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-8 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">



                        {/* TEXT */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >

                            <span className="text-coco-gold font-bold uppercase tracking-widest text-sm">
                                Our Journey
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold text-coco-forest mb-8 leading-tight mt-4">
                                {data.journey_title}
                            </h2>

                            <p className="text-coco-forest/60 text-base leading-relaxed mb-6">
                                {data.journey_description_1}
                            </p>

                            <p className="text-coco-forest/60 text-base leading-relaxed mb-10">
                                {data.journey_description_2}
                            </p>

                            {/* OPTIONAL BUTTON */}
                            <Link
                                href="/contact"
                                className="inline-block bg-coco-forest text-coco-sandy px-10 py-4 rounded-full font-bold hover:bg-coco-leaf transition-all"
                            >
                                Contact Us
                            </Link>

                        </motion.div>


                        {/* IMAGE GRID */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-full"
                        >
                            <div className="grid grid-cols-2 gap-4 h-full">

                                {/* BIG - Left Column */}
                                <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={data.journey_image?.[0] || '/placeholder.png'}
                                        alt="Our Journey"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* SMALL - Top Right */}
                                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={data.journey_image?.[1] || data.journey_image?.[0] || '/placeholder.png'}
                                        alt="Production"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* SMALL - Bottom Right */}
                                <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                                    <Image
                                        src={data.journey_image?.[2] || data.journey_image?.[0] || '/placeholder.png'}
                                        alt="Testing"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            {data.commitment_title && (
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-8 md:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={data.commitment_image}
                                        alt={data.commitment_title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-3xl md:text-5xl font-bold text-coco-forest mb-8 leading-tight">{data.commitment_title}</h2>
                                <p className="text-coco-forest/60 text-base md:text-lg leading-relaxed mb-6">
                                    {data.commitment_description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Our Process Section */}
            {data.process_title && (
                <section className="pt-20 pb-32 bg-coco-sandy">
                    <div className="container mx-auto px-8 md:px-16">
                        <div className="text-center mb-20">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
                            >
                                {data.process_subtitle || "Methodology"}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-coco-forest"
                            >
                                {data.process_title}
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {data.process_items && (Array.isArray(data.process_items) ? data.process_items : []).map((item: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-coco-forest/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                            <span className="text-coco-gold font-bold text-sm uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                Step {idx + 1}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/70 text-sm leading-relaxed max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
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
                            <h3 className="text-xl md:text-2xl font-bold mb-4">{data.vision_title}</h3>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
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
                            <h3 className="text-xl md:text-2xl font-bold mb-4">{data.mission_title}</h3>
                            <ul className="space-y-4 text-white/70 text-sm md:text-base">
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
