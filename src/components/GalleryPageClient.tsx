"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage, GalleryMetadata } from '@/lib/data';

interface GalleryPageClientProps {
    images: GalleryImage[];
    metadata: GalleryMetadata | null;
}

const defaultImages = [
    { src: '/semi_husked_sorting_1770259203229.png', title: 'Quality Sorting', category: 'Production' },
    { src: '/charcoal_briquette_test_1770259238325.png', title: 'Product Testing', category: 'Quality Control' },
    { src: '/vco_lab_test_1770259220705.png', title: 'Laboratory Analysis', category: 'Testing' },
    { src: '/gallery/avhzmedcnpjq862xhv4i.jpg', title: 'Shipping Logistics', category: 'Operation' },
];

const GalleryPageClient = ({ images, metadata }: GalleryPageClientProps) => {
    const displayImages = images.length > 0 ? images : defaultImages;

    const title = metadata?.title || "Moments of Excellence";
    const subtitle = metadata?.subtitle || "Our Visual Story";
    const description = metadata?.description || "Explore our world of sustainable coconut production, from farm-to-table processes to our global distribution hub.";
    const bgImage = metadata?.background_image || "/background_hero.webp";

    return (
        <>
            {/* Hero Header */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden text-center">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url("${bgImage}")`,
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
                            {subtitle}
                        </motion.span>
                        <h1
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg max-w-4xl"
                        >
                            {title}
                        </h1>
                        <p className="text-sm md:text-base text-coco-sandy/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pt-24 pb-32 px-4">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {displayImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="aspect-square relative font-bold">
                                    <Image
                                        src={image.src || ''}
                                        alt={image.title || 'Gallery Image'}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest/90 via-coco-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-coco-gold text-[8px] font-bold uppercase tracking-widest mb-1 leading-none">
                                            {image.category}
                                        </span>
                                        <h3 className="text-white font-bold text-sm leading-tight">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryPageClient;
