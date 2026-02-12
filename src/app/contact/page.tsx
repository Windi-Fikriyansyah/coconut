import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | PT Sumber Niaga Alam Sejahtera',
    description: 'Get in touch with Indonesia\'s leading coconut exporter. Request a sample, ask for a quote, or discuss your industrial specifications with our sales team.',
    openGraph: {
        title: 'Connect with PT Sumber Niaga Alam Sejahtera | Global Export Support',
        description: 'Ready to partner? Reach out to us for premium coconut derivatives export inquiries and customized industrial solutions.',
    }
};

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
