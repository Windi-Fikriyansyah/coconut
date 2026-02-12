"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product, ProductsPageData } from '@/lib/data';

interface ProductsPageClientProps {
    products: Product[];
    data: ProductsPageData;
}

const ProductsPageClient = ({ products, data }: ProductsPageClientProps) => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden text-center">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.hero_image}
                        alt={data.hero_title.replace(/<[^>]*>?/gm, '')}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
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

                        <h1
                            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg max-w-4xl"
                            dangerouslySetInnerHTML={{ __html: data.hero_title }}
                        />
                        <p className="text-sm md:text-base text-coco-sandy/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                            {data.hero_description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main product grid */}
            <div className="py-12">
                <ProductGrid data={products} />
            </div>

            {/* Sustainable Quality Section */}
            <section className="py-24 bg-white border-t border-coco-forest/5">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="bg-coco-forest p-12 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
                                {data.cta_title}
                            </h2>
                            <p className="text-white/70 text-sm md:text-base mb-10">
                                {data.cta_description}
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-coco-gold text-coco-forest px-10 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
                            >
                                {data.cta_button_text}
                            </a>
                        </div>
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-coco-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coco-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductsPageClient;
