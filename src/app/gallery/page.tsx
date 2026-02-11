import React from 'react';
import Navbar from '@/components/Navbar';
import GalleryPageClient from '@/components/GalleryPageClient';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
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
