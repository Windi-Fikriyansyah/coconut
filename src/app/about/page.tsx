import React from 'react';
import AboutPageClient from '@/components/AboutPageClient';
import { getAboutPageData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | PT Sumber Niaga Alam Sejahtera',
    description: 'Learn about our journey as Indonesia\'s leading coconut derivatives exporter. Committed to quality, sustainability, and global excellence since our establishment.',
    openGraph: {
        title: 'About PT Sumber Niaga Alam Sejahtera | Coconut Derivative Experts',
        description: 'Discover our mission, vision, and the values that drive our commitment to supplying the world\'s finest coconut products.',
    }
};

export const revalidate = 0;

export default async function AboutPage() {
    const data = await getAboutPageData();

    if (!data) {
        // Fallback or 404 if data is missing
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-coco-forest/50">About page content not found in database.</p>
            </div>
        );
    }

    return <AboutPageClient data={data} />;
}


