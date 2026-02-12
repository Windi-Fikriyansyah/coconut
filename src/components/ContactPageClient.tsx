"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { ContactData } from '@/lib/data';

const ContactPageClient = ({ data }: { data: ContactData }) => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={(data as any).hero_image || '/background_hero.webp'}
                        alt="Contact Us - PT Sumber Niaga Alam Sejahtera"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-5 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block"
                    >
                        {data.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-5 md:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-xl md:text-3xl font-bold text-coco-forest mb-10">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-coco-forest/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all flex-shrink-0">
                                        <MapPin size={24} className="md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-base md:text-lg">Location</h4>
                                        <p className="text-coco-forest/60 text-sm md:text-base whitespace-pre-wrap">{data.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-coco-forest/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all flex-shrink-0">
                                        <Mail size={24} className="md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-base md:text-lg">Email Inquiry</h4>
                                        <a href={`mailto:${data.email}`} className="text-coco-forest/60 text-sm md:text-base block hover:text-coco-gold transition-colors">{data.email}</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 md:gap-6 group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-coco-forest/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all flex-shrink-0">
                                        <Phone size={24} className="md:w-7 md:h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-base md:text-lg">Phone & WhatsApp</h4>
                                        <p className="text-coco-forest/60 text-sm md:text-base">{data.phone}</p>
                                        <a
                                            href={`https://wa.me/${data.whatsapp.replace(/[^\d]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-coco-forest/60 text-sm md:text-base hover:text-coco-gold transition-colors block mt-1"
                                        >
                                            {data.whatsapp} (WhatsApp)
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 p-7 md:p-8 bg-coco-forest rounded-2xl md:rounded-[2rem] text-white">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <MessageSquare className="text-coco-gold" />
                                    Support 24/7
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                    Our team in Indonesia is ready to respond to your inquiries regardless of international time zone differences.
                                </p>

                                <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                                    <iframe
                                        src={data?.map_embed_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2415175923!2d106.759478!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e098ed2323%3A0x6d11f7c0d0232490!2sJakarta%20Pusat%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        className="w-full h-full opacity-80"
                                    ></iframe>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-7 md:p-12 rounded-2xl md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-coco-forest/5"
                        >
                            <h3 className="text-xl md:text-3xl font-bold text-coco-forest mb-6 md:mb-8">Send a Message (Inquiry Form)</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-coco-forest/40">Full Name</label>
                                        <input type="text" className="w-full bg-coco-sandy/50 border border-coco-forest/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-coco-forest/40">Email Address</label>
                                        <input type="email" className="w-full bg-coco-sandy/50 border border-coco-forest/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-coco-forest/40">Company & Country</label>
                                    <input type="text" className="w-full bg-coco-sandy/50 border border-coco-forest/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors" placeholder="Example Corp, USA" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-coco-forest/40">Product of Interest</label>
                                    <select className="w-full bg-coco-sandy/50 border border-coco-forest/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors appearance-none">
                                        <option>Semi Husked Coconut</option>
                                        <option>Virgin Coconut Oil (VCO)</option>
                                        <option>BBQ Coconut Charcoal</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-coco-forest/40">Message Detail / Inquiry</label>
                                    <textarea rows={4} className="w-full bg-coco-sandy/50 border border-coco-forest/10 p-4 rounded-xl focus:outline-none focus:border-coco-gold transition-colors" placeholder="Explain your export volume requirements..."></textarea>
                                </div>

                                <button className="w-full bg-coco-forest text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-coco-gold transition-all hover:shadow-xl transform hover:-translate-y-1">
                                    Send Inquiry Now
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                    </div>


                </div>
            </section>
        </main>
    );
};

export default ContactPageClient;
