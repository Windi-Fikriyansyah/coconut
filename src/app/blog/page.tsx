import React from 'react';
import BlogPageClient from '@/components/BlogPageClient';
import { getBlogPostsPaginated, getBlogPostsCount } from '@/lib/data';

export const revalidate = 0;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const params = await searchParams;
    const page = parseInt(params.page || '1');
    const limit = 6;

    const [posts, totalCount] = await Promise.all([
        getBlogPostsPaginated(page, limit),
        getBlogPostsCount()
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return <BlogPageClient posts={posts} currentPage={page} totalPages={totalPages} />;
}
