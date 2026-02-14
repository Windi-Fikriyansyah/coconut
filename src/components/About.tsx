"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutData } from '@/lib/data';
import { getOptimizedImage } from '@/lib/utils';

interface AboutProps {
    data?: AboutData | null;
}
const About = ({ data }: AboutProps) => {
    // Fungsi sanitasi lokal agar path gambar dari JSON benar
    const cleanPath = (path: any) => {
        if (!path) return "";

        // Handle if path is an object from JSON
        let strPath = "";
        if (typeof path === 'string') {
            strPath = path;
        } else if (typeof path === 'object' && path !== null) {
            strPath = path.url || path.src || "";
        }

        if (!strPath || typeof strPath !== 'string') return "";

        // Handle ImageKit or other CDN URLs
        // If it's an absolute URL and not localhost, keep it as is
        if (strPath.startsWith('http') && !strPath.match(/^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/)) {
            return strPath;
        }

        // Remove localhost if present
        let clean = strPath.replace(/^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/, "");
        // Remove /public or public/ if present
        clean = clean.replace(/^\/?public\//, "/");
        // Ensure it starts with / if not an absolute URL
        if (!clean.startsWith("/") && !clean.startsWith("http")) {
            clean = "/" + clean;
        }
        return clean;
    };

    const title = data?.title || "Rooted in Nature, <br />Driven by Excellence";
    const aboutText = data?.description || "PT Sumber Niaga Alam Sejahtera...";
    const buttonLink = data?.button_link || "#about";

    // 1. Ambil dan Parse data dari column image (sekarang sebagai source gallery)
    let dbGallery: string[] = [];
    try {
        if (typeof data?.image === 'string' && data.image.trim().startsWith('[')) {
            dbGallery = JSON.parse(data.image);
        } else if (Array.isArray(data?.image)) {
            dbGallery = data.image;
        } else if (data?.image) {
            dbGallery = [data.image];
        }
    } catch (e) {
        console.error("Gagal parse image gallery:", e);
        if (data?.image) dbGallery = [data.image];
    }

    // 2. Sanitasi dan Hilangkan Duplikat
    const finalImages = Array.from(new Set(dbGallery.map(img => cleanPath(img))));

    // 3. Mapping ke variabel gallery
    const galleryImages = [
        { url: finalImages[0] || "/fallback-1.jpg", alt: "PT Sumber Niaga Alam Sejahtera Coconut Production Facility" },
        { url: finalImages[1] || "/fallback-2.jpg", alt: "Quality Control of Coconut Briquettes" },
        { url: finalImages[2] || "/fallback-3.jpg", alt: "Premium Virgin Coconut Oil Processing" },
    ];
    return (
        <section id="about" className="pt-16 md:pt-32 pb-10 bg-coco-sandy relative overflow-hidden">
            <div className="absolute -right-24 top-0 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-5 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* IMAGE GRID */}
                    {/* IMAGE GRID */}
                    {/* IMAGE GRID */}
                    {/* IMAGE GRID */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Grid container: di desktop h-full agar sama tinggi dengan kolom teks */}
                        <div className="grid grid-cols-2 gap-4 lg:h-full items-start lg:items-stretch">

                            {/* BIG - Left Column */}
                            <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group bg-white/5">
                                <div className="block lg:hidden"> {/* Tampilan Mobile: Mengikuti Rasio Gambar */}
                                    <Image
                                        src={getOptimizedImage(finalImages[0] || "/fallback-1.jpg", 500, 700)}
                                        alt="Production"
                                        width={500}
                                        height={700}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="hidden lg:block absolute inset-0"> {/* Tampilan Desktop: Mengikuti Tinggi Text */}
                                    <Image
                                        src={getOptimizedImage(finalImages[0] || "/fallback-1.jpg", 800)}
                                        alt="Production"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                        sizes="(max-width: 1024px) 100vw, 25vw"
                                    />
                                </div>
                            </div>

                            {/* SMALL - Top Right */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group bg-white/5">
                                <div className="block lg:hidden">
                                    <Image
                                        src={getOptimizedImage(finalImages[1] || "/fallback-2.jpg", 500, 350)}
                                        alt="QC"
                                        width={500}
                                        height={350}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="hidden lg:block relative h-full min-h-[150px]">
                                    <Image
                                        src={getOptimizedImage(finalImages[1] || "/fallback-2.jpg", 400)}
                                        alt="QC"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                            </div>

                            {/* SMALL - Bottom Right */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group bg-white/5">
                                <div className="block lg:hidden">
                                    <Image
                                        src={getOptimizedImage(finalImages[2] || "/fallback-3.jpg", 500, 350)}
                                        alt="VCO"
                                        width={500}
                                        height={350}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="hidden lg:block relative h-full min-h-[150px]">
                                    <Image
                                        src={getOptimizedImage(finalImages[2] || "/fallback-3.jpg", 400)}
                                        alt="VCO"
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-coco-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">
                            Our Commitment to Excellence
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coco-gold mb-8 leading-tight"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-coco-forest/70 text-sm md:text-base mb-8 leading-relaxed">
                            {aboutText}
                        </p>
                        <Link href={buttonLink} className="inline-block w-fit bg-coco-forest text-coco-sandy px-10 py-4 rounded-full font-bold hover:bg-coco-leaf transition-all">
                            {data?.button_text || "Read More"}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;