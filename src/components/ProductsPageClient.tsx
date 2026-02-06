"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';

interface ProductsPageClientProps {
    products: Product[];
}

const ProductsPageClient = ({ products }: ProductsPageClientProps) => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1621441394707-160682245c11?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Premium Portfolio
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Exclusive <span className="text-coco-gold">Product Catalog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
                    >
                        We offer the finest coconut derivative products with rigorous international standards.
                    </motion.p>
                </div>
            </section>

            {/* Main product grid */}
            <div className="py-12">
                <ProductGrid data={products} />
            </div>

            {/* Sustainable Quality Section */}
            <section className="py-24 bg-white border-t border-coco-forest/5">
                <div className="container mx-auto px-6">
                    <div className="bg-coco-forest p-12 rounded-[3rem] text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Looking for Custom Specifications?</h2>
                            <p className="text-white/70 text-lg mb-10">
                                We can customize product specifications (coconut weight, FFA levels in VCO, or briquette size) according to your international market needs.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block bg-coco-gold text-coco-forest px-10 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
                            >
                                Discuss Your Requirements
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
