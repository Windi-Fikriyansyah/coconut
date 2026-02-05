"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        title: "Massive Export Potential for Indonesia's Coconut Derivatives in 2026",
        excerpt: "Understanding global market trends and why the demand for Indonesian coconut products is surging.",
        date: "Feb 05, 2026",
        author: "Global Coco Admin",
        tag: "Market Trends",
        image: "https://images.unsplash.com/photo-1591193510594-106bdcb12a76?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "A Guide to VCO Quality Standards for the International Market",
        excerpt: "What do international buyers look for? From lauric acid content to hygienic extraction methods.",
        date: "Jan 28, 2026",
        author: "QC Team",
        tag: "Quality Control",
        image: "https://images.unsplash.com/photo-1621441394707-160682245c11?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Why Indonesian Coconut Charcoal Briquettes are the Best in the World?",
        excerpt: "Technical comparison between coconut shell briquettes and other wood charcoal alternatives for BBQ.",
        date: "Jan 15, 2026",
        author: "Product Specialist",
        tag: "Technical",
        image: "https://images.unsplash.com/photo-1610473068533-3d36cd6609da?q=80&w=800&auto=format&fit=crop"
    }
];

const BlogPage = () => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Blog & <span className="text-coco-gold">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Sharing the latest information on the Indonesian coconut industry and international trade tips.
                    </motion.p>
                </div>
            </section>

            {/* Blog List Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden border border-coco-forest/5 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                                    <div className="absolute top-4 left-4">
                                        <span className="flex items-center gap-1.5 bg-coco-forest/80 backdrop-blur-md text-coco-gold px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            <Tag size={12} />
                                            {post.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-coco-forest/40 text-xs font-bold uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-coco-forest mb-4 group-hover:text-coco-gold transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-coco-forest/60 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <Link href="#" className="inline-flex items-center gap-2 text-coco-forest font-bold text-sm hover:gap-3 transition-all">
                                        Read More
                                        <ArrowRight size={16} className="text-coco-gold" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center gap-4">
                        <button className="w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold text-coco-forest hover:bg-coco-forest hover:text-white transition-all">1</button>
                        <button className="w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold text-coco-forest/40 hover:bg-coco-forest/5 transition-all">2</button>
                        <button className="w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold text-coco-forest/40 hover:bg-coco-forest/5 transition-all">3</button>
                    </div>
                </div>
            </section>

            {/* Subscription CTA */}
            <section className="py-24 bg-coco-forest text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Industry Insights Delivered Straight to Your Inbox</h2>
                        <p className="text-white/60 mb-10">Subscribe to our newsletter for monthly stock updates and the latest export market trends.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input type="email" className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors text-white" placeholder="email@company.com" />
                            <button className="bg-coco-gold text-coco-forest px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">Subscribe</button>
                        </form>
                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-coco-gold rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-coco-gold rounded-full blur-[100px]"></div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;
