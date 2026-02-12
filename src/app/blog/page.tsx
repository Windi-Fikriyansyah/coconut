import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Coconut Industry Blog | Insights & News',
    description: 'Stay updated with the latest trends in the coconut industry. From charcoal briquette production to VCO health benefits and global export market news.',
    openGraph: {
        title: 'Indonesia Coconut Industry Insights | PT Sumber Niaga Alam Sejahtera Blog',
        description: 'Professional insights into coconut derivative manufacturing, sustainable farming, and global market dynamics.',
    }
};

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
