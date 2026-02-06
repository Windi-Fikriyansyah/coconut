import type { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import BlogPostPageClient from '@/components/BlogPostPageClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found | PT Sumber Niaga Alam Sejahtera',
        };
    }

    return {
        title: `${post.title} | Coconut Industry Insights`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostPageClient post={post} />;
}
