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

                <div className="container mx-auto px-5 relative z-10 pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >

                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6 drop-shadow-lg max-w-4xl"
                            dangerouslySetInnerHTML={{ __html: data.hero_title }}
                        />
                        <p className="text-sm md:text-base text-coco-sandy/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
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
            <section className="py-16 md:py-24 bg-white border-t border-coco-forest/5">
                <div className="container mx-auto px-5 md:px-16">
                    <div className="bg-coco-forest p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
                                {data.cta_title}
                            </h2>
                            <p className="text-white/70 text-sm md:text-base mb-8 md:mb-10">
                                {data.cta_description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href={`https://wa.me/${(data.cta_whatsapp || '').replace(/[^\d]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-[#25D366] transition-all transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {data.cta_whatsapp_label || 'WhatsApp'}
                                </a>
                                <a
                                    href={`mailto:${data.cta_email}`}
                                    className="flex items-center gap-3 bg-white text-coco-forest px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-coco-gold hover:text-coco-forest transition-all transform hover:scale-105 border border-white"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    {data.cta_email_label || 'Email Inquiry'}
                                </a>
                            </div>
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
