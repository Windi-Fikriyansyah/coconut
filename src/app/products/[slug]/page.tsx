import type { Metadata } from 'next';
import { getProductBySlug, getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Download, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as FramerMotion from 'framer-motion';

export const revalidate = 3600; // ISR: Revalidate every 1 hour

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.slug,
    }));
}

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

    if (!product) {
        notFound();
    }

    const specifications = typeof product.specifications === 'string' ? JSON.parse(product.specifications) : product.specifications;
    const whyPoints = typeof product.why_points === 'string' ? JSON.parse(product.why_points) : product.why_points;
    const tags = typeof product.tags === 'string' ? JSON.parse(product.tags) : product.tags;

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src={product.image}
                        fill
                        className="object-cover blur-sm"
                        alt=""
                        priority
                    />
                    <div className="absolute inset-0 bg-coco-forest/80"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-8">
                        <Link href="/" className="hover:text-coco-gold transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/products" className="hover:text-coco-gold transition-colors">Products</Link>
                        <ChevronRight size={12} />
                        <span className="text-coco-gold">{product.title}</span>
                    </nav>

                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {product.title}
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            {product.short_description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Content */}
                        <div>
                            <h2 className="text-3xl font-bold text-coco-forest mb-8">Overview</h2>
                            <p className="text-coco-forest/70 text-lg leading-relaxed mb-12">
                                {product.long_description}
                            </p>

                            <div className="bg-white p-8 rounded-3xl border border-coco-forest/5 shadow-sm mb-12">
                                <h3 className="text-xl font-bold text-coco-forest mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-coco-gold text-coco-forest rounded-lg flex items-center justify-center text-sm">📋</span>
                                    Technical Specifications
                                </h3>
                                <div className="space-y-4">
                                    {specifications.map((spec: any, i: number) => (
                                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-coco-forest/5 last:border-0">
                                            <span className="font-bold text-coco-forest/40 uppercase text-xs tracking-widest">{spec.label}</span>
                                            <span className="text-coco-forest font-semibold md:text-right">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-coco-forest text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-coco-leaf transition-colors">
                                    <Download size={20} />
                                    Download Spec Sheet
                                </button>
                                <button className="flex-1 bg-coco-gold text-coco-forest px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white border border-coco-gold transition-colors">
                                    <Mail size={20} />
                                    Request Free Sample
                                </button>
                            </div>
                        </div>

                        {/* Right: Visuals */}
                        <div className="space-y-8">
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-coco-gold/90 backdrop-blur-md text-coco-forest px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
                                        Main Product
                                    </span>
                                </div>
                                <div className="relative aspect-square">
                                    <Image
                                        src={product.image}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        alt={product.title}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            <div className="bg-coco-forest p-10 rounded-3xl text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Behind the Scenes</h3>
                                    <p className="text-white/60 mb-8 italic">
                                        {product.slug === "semi-husked-coconut" && "Every coconut is manually inspected to ensure perfect maturity."}
                                        {product.slug === "virgin-coconut-oil" && "Our cold extraction process is strictly monitored to preserve enzyme purity."}
                                        {product.slug === "bbq-charcoal-briquettes" && "Regular burn tests to ensure heat consistency and burning duration."}
                                    </p>
                                    <div className="rounded-2xl overflow-hidden border border-white/10 group relative h-64">
                                        <Image
                                            src={product.bts_image || product.image}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt="Production Process"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                                {/* Decoration */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-coco-gold/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
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
