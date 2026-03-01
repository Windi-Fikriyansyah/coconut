"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
            <section className="relative pt-40 pb-20 overflow-hidden min-h-[60vh] flex items-end">
                {/* Background Image - Full Visibility */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        fill
                        unoptimized
                        className="object-cover"
                        alt=""
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-sm bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-xl border border-white/20"
                    >
                        <Link href="/blog" className="inline-flex items-center gap-2 text-coco-gold font-bold text-[10px] mb-4 hover:translate-x-[-4px] transition-transform uppercase tracking-widest">
                            <ChevronLeft size={14} />
                            Back to Blog
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags && tags.map((tag: string, i: number) => (
                                <span key={i} className="flex items-center gap-1 bg-coco-gold/10 text-coco-gold px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-coco-gold/20">
                                    <Tag size={10} />
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-xl md:text-2xl font-bold text-coco-forest mb-4 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 text-coco-forest/60 text-[9px] font-bold uppercase tracking-widest border-t border-coco-forest/10 pt-4">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={12} className="text-coco-gold" />
                                {post.date_str}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <User size={12} className="text-coco-gold" />
                                {post.author}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Post Content */}
            <section className="py-24">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-coco-forest/5 border border-coco-forest/5"
                        >
                            <div
                                className="blog-content prose prose-lg max-w-none text-coco-forest/70 leading-relaxed
                                    prose-headings:text-coco-forest prose-headings:font-bold
                                    prose-p:mb-6 prose-strong:text-coco-forest
                                    prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-8
                                    prose-li:marker:text-coco-gold
                                    prose-blockquote:border-l-4 prose-blockquote:border-coco-gold 
                                    prose-blockquote:bg-coco-sandy/50 prose-blockquote:px-6 prose-blockquote:py-4 
                                    prose-blockquote:not-italic prose-blockquote:rounded-r-lg"
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
