"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/data';

interface BlogPageClientProps {
    posts: BlogPost[];
    currentPage: number;
    totalPages: number;
}

const BlogPageClient = ({ posts, currentPage, totalPages }: BlogPageClientProps) => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1591193510594-106bdcb12a76?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Blog & <span className="text-coco-gold">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Sharing the latest information on the Indonesian coconut industry and international trade tips.
                    </motion.p>
                </div>
            </section>

            {/* Blog List Section */}
            <section className="py-24">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, index) => {
                            const tags = typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags;
                            return (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-coco-forest/5 shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="relative h-60 overflow-hidden">
                                            <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                                            <div className="absolute top-4 left-4">
                                                {tags && tags.length > 0 && (
                                                    <span className="flex items-center gap-1.5 bg-coco-forest/80 backdrop-blur-md text-coco-gold px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                        <Tag size={12} />
                                                        {tags[0]}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-8">
                                        <div className="flex items-center gap-4 text-coco-forest/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                                            <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date_str}</span>
                                            <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                                        </div>
                                        <Link href={`/blog/${post.slug}`}>
                                            <h3 className="text-xl font-bold text-coco-forest mb-4 group-hover:text-coco-gold transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                        </Link>

                                        <p className="text-coco-forest/60 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-coco-forest font-bold text-sm hover:gap-3 transition-all">
                                            Read More
                                            <ArrowRight size={16} className="text-coco-gold" />
                                        </Link>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center items-center gap-4">
                            {/* Prev Button */}
                            <Link
                                href={`/blog?page=${currentPage - 1}`}
                                className={`w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold text-coco-forest transition-all ${currentPage === 1 ? 'pointer-events-none opacity-20' : 'hover:bg-coco-forest hover:text-white'}`}
                            >
                                <ChevronLeft size={20} />
                            </Link>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <Link
                                    key={pageNum}
                                    href={`/blog?page=${pageNum}`}
                                    className={`w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold transition-all ${pageNum === currentPage ? 'bg-coco-forest text-white' : 'text-coco-forest/40 hover:bg-coco-forest/5'}`}
                                >
                                    {pageNum}
                                </Link>
                            ))}

                            {/* Next Button */}
                            <Link
                                href={`/blog?page=${currentPage + 1}`}
                                className={`w-12 h-12 rounded-full border border-coco-forest/10 flex items-center justify-center font-bold text-coco-forest transition-all ${currentPage === totalPages ? 'pointer-events-none opacity-20' : 'hover:bg-coco-forest hover:text-white'}`}
                            >
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Subscription CTA */}
            <section className="py-24 bg-coco-forest text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl md:text-3xl font-bold mb-6">Get Industry Insights Delivered Straight to Your Inbox</h2>
                        <p className="text-white/60 text-sm md:text-base mb-10">Subscribe to our newsletter for monthly stock updates and the latest export market trends.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
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

export default BlogPageClient;
