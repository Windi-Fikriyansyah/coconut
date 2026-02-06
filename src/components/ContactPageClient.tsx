"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { ContactData } from '@/lib/data';

const ContactPageClient = ({ data }: { data: ContactData }) => {
    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        {data.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/70 max-w-2xl leading-relaxed"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-coco-forest mb-10">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-coco-forest/5 rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-lg">Location</h4>
                                        <p className="text-coco-forest/60 whitespace-pre-wrap">{data.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-coco-forest/5 rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-lg">Email Inquiry</h4>
                                        <a href={`mailto:${data.email}`} className="text-coco-forest/60 block hover:text-coco-gold transition-colors">{data.email}</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-coco-forest/5 rounded-2xl flex items-center justify-center group-hover:bg-coco-forest group-hover:text-white transition-all">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-coco-forest text-lg">Phone & WhatsApp</h4>
                                        <p className="text-coco-forest/60">{data.phone}</p>
                                        <a
                                            href={`https://wa.me/${data.whatsapp.replace(/[^\d]/g, '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-coco-forest/60 hover:text-coco-gold transition-colors block mt-1"
                                        >
                                            {data.whatsapp} (WhatsApp)
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-8 bg-coco-forest rounded-[2rem] text-white">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <MessageSquare className="text-coco-gold" />
                                    Support 24/7
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Our team in Indonesia is ready to respond to your inquiries regardless of international time zone differences.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-coco-forest/5"
                        >
                            <h3 className="text-2xl font-bold text-coco-forest mb-8">Send a Message (Inquiry Form)</h3>
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
