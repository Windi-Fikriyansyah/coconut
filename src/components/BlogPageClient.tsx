"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1591193510594-106bdcb12a76?q=80&w=1600&auto=format&fit=crop"
                        alt="Indonesia Coconut Industry Development"
                        fill
                        priority
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
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

                                        <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap bg-coco-gold text-coco-forest px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-xs hover:bg-coco-forest hover:text-white transition-all">
                                            Read More

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

        </main>
    );
};

export default BlogPageClient;
