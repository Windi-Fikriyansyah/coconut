import React from 'react';
import ContactPageClient from '@/components/ContactPageClient';
import { getContactData } from '@/lib/data';

export default async function ContactPage() {
    const data = await getContactData();

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-coco-sandy">
                <p className="text-coco-forest/50 font-bold">Contact information not found in database.</p>
            </div>
        );
    }

    return <ContactPageClient data={data} />;
}
