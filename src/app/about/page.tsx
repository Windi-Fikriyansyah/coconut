import React from 'react';
import AboutPageClient from '@/components/AboutPageClient';
import { getAboutPageData } from '@/lib/data';
import { notFound } from 'next/navigation';

export const revalidate = 86400;

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


