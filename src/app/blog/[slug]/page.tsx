import React from 'react';
import { getBlogPostBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import BlogPostPageClient from '@/components/BlogPostPageClient';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostPageClient post={post} />;
}
