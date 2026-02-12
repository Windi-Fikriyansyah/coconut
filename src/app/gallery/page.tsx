import React from 'react';
import Navbar from '@/components/Navbar';
import GalleryPageClient from '@/components/GalleryPageClient';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Product Gallery | PT Sumber Niaga Alam Sejahtera',
    description: 'Explore our coconut production facility and product lineup. We maintain the highest standards for Briquettes, VCO, and other coconut derivatives.',
    openGraph: {
        title: 'Indonesia Coconut Production Gallery | PT Sumber Niaga Alam Sejahtera',
        description: 'Visual insights into our quality control, production processing, and premium coconut derivative products.',
    }
};

import { getCertificates, getContactData, getGalleryImages, getGalleryMetadata } from '@/lib/data';

export const revalidate = 0;

export default async function GalleryPage() {
    const [certificatesData, contactData, galleryImages, galleryMetadata] = await Promise.all([
        getCertificates(),
        getContactData(),
        getGalleryImages(),
        getGalleryMetadata(),
    ]);

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />
            <GalleryPageClient images={galleryImages} metadata={galleryMetadata} />
            <Certificates data={certificatesData} />
            <Contact data={contactData} />
        </main>
    );
}
