"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutData } from '@/lib/data';

interface AboutProps {
    data?: AboutData | null;
}
const About = ({ data }: AboutProps) => {
    // Fungsi sanitasi lokal agar path gambar dari JSON benar
    const cleanPath = (path: string | null | undefined) => {
        if (!path) return "";
        // Menghapus localhost jika ada
        let clean = path.replace(/^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/, "");
        // Menghapus /public atau public/ jika ada
        clean = clean.replace(/^\/?public\//, "/");
        // Memastikan diawali dengan / jika bukan URL absolute
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
        <section id="about" className="pt-32 pb-10 bg-coco-sandy relative overflow-hidden">
            <div className="absolute -right-24 top-0 w-96 h-96 bg-coco-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full"
                    >
                        <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-full">
                            {/* Gambar 1 */}
                            <div className="col-span-1 row-span-2 relative">
                                <Image
                                    src={galleryImages[0].url}
                                    alt="About Image 1"
                                    fill
                                    unoptimized
                                    className="object-cover rounded-3xl shadow-lg"
                                />
                            </div>
                            {/* Gambar 2 */}
                            <div className="col-span-1 row-span-1 relative">
                                <Image
                                    src={galleryImages[1].url}
                                    alt="About Image 2"
                                    fill
                                    className="object-cover rounded-3xl shadow-lg"
                                />
                            </div>
                            {/* Gambar 3 */}
                            <div className="col-span-1 row-span-1 relative">
                                <Image
                                    src={galleryImages[2].url}
                                    alt="About Image 3"
                                    fill
                                    className="object-cover rounded-3xl shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-coco-gold mb-8 leading-tight"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-coco-forest/70 text-sm md:text-base mb-8 leading-relaxed">
                            {aboutText}
                        </p>

                        <Link href={buttonLink} className="inline-block bg-coco-forest text-coco-sandy px-10 py-4 rounded-full font-bold hover:bg-coco-leaf transition-all">
                            {data?.button_text || "Read More"}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;