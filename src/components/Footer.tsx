import React from 'react';
import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

const Footer = ({ products }: { products?: Product[] }) => {
    const displayProducts = products && products.length > 0 ? products : [
        { title: 'Semi Husked Coconut', slug: 'semi-husked-coconut' },
        { title: 'Virgin Coconut Oil', slug: 'virgin-coconut-oil' },
        { title: 'Charcoal Briquettes', slug: 'bbq-charcoal-briquettes' }
    ];

    return (
        <footer className="bg-coco-sandy pt-24 pb-12 border-t border-coco-forest/10">
            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <Image
                                src="/logo.png"
                                alt="PT Sumber Niaga Alam Sejahtera Logo"
                                width={160}
                                height={40}
                                className="h-10 w-auto object-contain brightness-110"
                            />
                        </Link>
                        <p className="text-coco-forest/60 text-sm leading-relaxed mb-8">
                            Supplying the world's finest coconut derivatives from sustainable sources. Committed to quality, heritage, and global innovation.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-coco-forest/10 flex items-center justify-center hover:bg-coco-forest hover:text-coco-sandy transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sitemaps */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-coco-forest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Products', href: '/products' },
                                { name: 'About Us', href: '/about' },
                                { name: 'News', href: '/blog' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item, i) => (
                                <li key={i}>
                                    <Link href={item.href} className="text-coco-forest/60 hover:text-coco-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                                        {item.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-coco-forest mb-8">Products</h4>
                        <ul className="space-y-4">
                            {displayProducts.map((item, i) => (
                                <li key={i}>
                                    <Link href={`/products/${item.slug}`} className="text-coco-forest/60 hover:text-coco-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                                        {item.title}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-coco-forest mb-8">Market Insights</h4>
                        <p className="text-xs text-coco-forest/50 mb-6 leading-relaxed">
                            Subscribe to stay updated with global coconut market trends and commodity prices.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Business email"
                                suppressHydrationWarning
                                className="w-full bg-white border border-coco-forest/10 rounded-xl px-4 py-3 text-xs outline-none focus:border-coco-gold transition-colors"
                            />
                            <button suppressHydrationWarning className="absolute right-2 top-2 bottom-2 bg-coco-forest text-coco-sandy px-3 rounded-lg text-xs font-bold hover:bg-coco-leaf transition-all">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-12 border-t border-coco-forest/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs text-coco-forest/40 font-medium">
                        © 2026 PT Sumber Niaga Alam Sejahtera. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-8 text-xs font-bold text-coco-forest/40 uppercase tracking-widest">
                        <a href="#" className="hover:text-coco-forest transition-colors">Privacy</a>
                        <a href="#" className="hover:text-coco-forest transition-colors">Terms</a>
                        <a href="#" className="hover:text-coco-forest transition-colors">Logistics</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
