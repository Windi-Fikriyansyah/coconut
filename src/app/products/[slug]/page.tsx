import type { Metadata } from 'next';
import { getProductBySlug, getProducts, getProductRowDetails, getContactData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Download, Mail, ChevronRight, CheckCircle2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Product Not Found | PT Sumber Niaga Alam Sejahtera',
        };
    }

    return {
        title: `${product.title} | Indonesia Coconut Supplier`,
        description: product.short_description,
        openGraph: {
            title: `${product.title} | Premium Coconut Derivatives`,
            description: product.short_description,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 800,
                    alt: product.title,
                },
            ],
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    const contactData = await getContactData();

    if (!product) {
        notFound();
    }

    const details = await getProductRowDetails(product.id);

    const whyPoints = typeof product.why_points === 'string' ? JSON.parse(product.why_points) : product.why_points;

    const emailTo = contactData?.email || 'sales@globalcocoprime.com';
    const emailSubject = encodeURIComponent(`Order Inquiry: ${product.title} `);

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden text-center">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url("${product.image}")`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 md:px-16 relative z-10">
                    <div className="flex flex-col items-center">
                        <div className="max-w-4xl text-center">
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                                {product.title}
                            </h1>
                            <p className="text-sm md:text-base text-coco-sandy/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                                {product.short_description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Product Details Section */}
            <section className="py-24">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="space-y-24">
                        {details.map((detail) => {
                            return (
                                <div key={detail.id} className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
                                    {/* Image Container - Adjusted margin top to align with description */}
                                    <div className="flex-none w-full md:w-[350px] lg:w-[400px] md:mt-12">
                                        <div className="rounded-3xl overflow-hidden">
                                            <img
                                                src={detail.image}
                                                className="w-full h-auto rounded-3xl shadow-sm"
                                                alt={detail.title || product.title}
                                            />
                                        </div>
                                    </div>

                                    {/* Text Container */}
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-coco-forest mb-3">
                                            {detail.title}
                                        </h2>
                                        <div
                                            className="text-coco-forest/60 text-base leading-relaxed product-detail-description mb-8"
                                            dangerouslySetInnerHTML={{ __html: detail.description || '' }}
                                        />

                                        <a
                                            href={`mailto:${emailTo}?subject=${emailSubject}`}
                                            className="bg-coco-gold text-coco-forest px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-3 hover:bg-coco-forest hover:text-white transition-all transform hover:scale-105 shadow-xl"
                                        >
                                            <ShoppingCart size={18} />
                                            Order Now
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-coco-forest mb-12 text-center">Why Choose Our {product.title}?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whyPoints.map((point: string, i: number) => (
                                <div
                                    key={i}
                                    className="p-6 bg-coco-sandy rounded-2xl border border-coco-forest/5"
                                >
                                    <CheckCircle2 className="text-coco-gold mb-4" size={24} />
                                    <p className="font-semibold text-coco-forest">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
