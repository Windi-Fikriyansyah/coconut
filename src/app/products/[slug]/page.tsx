import type { Metadata } from 'next';
import { getProductBySlug, getProducts, getProductRowDetails, getContactData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Download, Mail, ChevronRight, CheckCircle2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import RelatedProductsSlider from '@/components/RelatedProductsSlider';

export const revalidate = 0; // Revalidate every 60 seconds

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Product Not Found | PT Sumber Niaga Alam Sejahtera',
        };
    }

    const metaTitle = product.meta_title || `${product.title} | Indonesia Coconut Supplier`;
    const metaDescription = product.meta_description || product.short_description;

    return {
        title: metaTitle,
        description: metaDescription,
        openGraph: {
            title: product.meta_title || `${product.title} | Premium Coconut Derivatives`,
            description: metaDescription,
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
    const allProducts = await getProducts();
    const otherProducts = allProducts.filter(p => p.slug !== slug);
    const contactData = await getContactData();

    if (!product) {
        notFound();
    }

    const details = await getProductRowDetails(product.id);
    const whyPoints = typeof product.why_points === 'string' ? JSON.parse(product.why_points) : product.why_points;

    // Email logic ...
    const emailTo = contactData?.email || 'sales@globalcocoprime.com';
    const emailSubject = encodeURIComponent(`Order Inquiry: ${product.title} `);

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden text-center">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-5 md:px-16 relative z-10">
                    <div className="flex flex-col items-start pt-12">
                        <div className="max-w-4xl text-left">
                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.2] mb-6 drop-shadow-lg">
                                {product.title}
                            </h1>
                            <p className="text-sm md:text-base text-coco-sandy/90 max-w-3xl leading-relaxed drop-shadow-md">
                                {product.short_description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Product Details Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-5 md:px-16">
                    <div className="space-y-16 md:space-y-24">
                        {details.map((detail) => {
                            // PARSING DATA GAMBAR DARI DATABASE
                            // Jika detail.image berisi JSON string: [{"url": "..."}, {"url": "..."}]
                            let imageGallery = [];
                            try {
                                imageGallery = typeof detail.image === 'string'
                                    ? JSON.parse(detail.image)
                                    : detail.image;
                            } catch (e) {
                                // Fallback jika detail.image hanya string URL biasa
                                imageGallery = [{ url: detail.image }];
                            }

                            return (
                                /* Tambahkan items-stretch agar tinggi kolom kiri = kanan */
                                <div key={detail.id} className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 items-stretch">

                                    {/* Image Container - Tambahkan self-stretch */}
                                    <div className="flex-none w-full md:w-[350px] lg:w-[400px] self-stretch">
                                        <ProductGallery
                                            imageData={detail.image}
                                            title={detail.title || product.title}
                                        />
                                    </div>

                                    {/* Text Container - Biarkan konten menentukan tinggi baris ini */}
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-coco-forest mb-4 md:mb-3 mt-4 md:mt-0">
                                            {detail.title}
                                        </h2>
                                        <div
                                            className="text-coco-forest/60 text-sm md:text-base leading-relaxed product-detail-description mb-8"
                                            dangerouslySetInnerHTML={{ __html: detail.description || '' }}
                                        />

                                        <div className="mt-auto"> {/* Menaruh tombol di paling bawah jika teks pendek */}
                                            <a
                                                href={`mailto:${emailTo}?subject=${emailSubject}`}
                                                className="w-full sm:w-auto bg-coco-gold text-coco-forest px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-3 hover:bg-coco-forest hover:text-white transition-all transform hover:scale-105 shadow-xl text-sm md:text-base"
                                            >
                                                <ShoppingCart size={18} />
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-5 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-coco-forest mb-10 md:mb-12 text-center">Why Choose Our {product.title}?</h2>
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

            {/* Related Products Slider */}
            <RelatedProductsSlider products={otherProducts} />
        </main>
    );
}
