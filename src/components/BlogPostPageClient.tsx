"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/data';

interface BlogPostPageClientProps {
    post: BlogPost;
}

const BlogPostPageClient = ({ post }: BlogPostPageClientProps) => {
    const tags = typeof post.tags === 'string' ? JSON.parse(post.tags) : post.tags;

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={post.image} className="w-full h-full object-cover blur-sm" alt="" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-coco-gold font-bold text-sm mb-8 hover:translate-x-[-4px] transition-transform">
                        <ChevronLeft size={18} />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex flex-wrap gap-4 mb-6">
                            {tags && tags.map((tag: string, i: number) => (
                                <span key={i} className="flex items-center gap-1.5 bg-coco-gold/20 backdrop-blur-md text-coco-gold px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-coco-gold/30">
                                    <Tag size={12} />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-white/50 text-sm font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <Calendar size={18} className="text-coco-gold" />
                                {post.date_str}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={18} className="text-coco-gold" />
                                {post.author}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Post Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-coco-forest/5 border border-coco-forest/5"
                        >
                            <div
                                className="prose prose-lg max-w-none text-coco-forest/70 leading-relaxed
                                    prose-headings:text-coco-forest prose-headings:font-bold
                                    prose-p:mb-6 prose-strong:text-coco-forest
                                    prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-12"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </motion.div>

                        {/* Author Bio Placeholder */}
                        <div className="mt-12 bg-coco-forest p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 text-white relative overflow-hidden">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex-shrink-0 flex items-center justify-center border border-white/10">
                                <User size={48} className="text-coco-gold" />
                            </div>
                            <div className="relative z-10 text-center md:text-left">
                                <h4 className="text-xl font-bold mb-2">Written by {post.author}</h4>
                                <p className="text-white/60 leading-relaxed">
                                    PT Sumber Niaga Alam Sejahtera editorial team provides expert insights into the coconut industry, focusing on sustainable exports and international quality standards.
                                </p>
                            </div>
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-coco-gold/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPostPageClient;
