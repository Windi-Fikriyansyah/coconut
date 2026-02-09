"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ContactData } from '@/lib/data';

interface ContactProps {
    data?: ContactData | null;
    isGlobal?: boolean;
}

const Contact = ({ data, isGlobal }: ContactProps) => {
    const subtitle = data?.subtitle || "Get In Touch";
    const title = data?.title || "Let's Discuss Your <br />Industrial Needs";
    const description = data?.description || "Ready to elevate your supply chain? Reach out to our team for export inquiries, samples, or customized specifications.";
    const email = data?.email || "hello@globalcocoprime.com";
    const phone = data?.phone || "+62 812 3456 7890";
    const address = data?.address || "HQ Jakarta, Indonesia";
    const mapImage = data?.map_image || "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop";

    const pathname = usePathname();

    // Don't show the global contact section on the dedicated contact page
    if (pathname === '/contact') return null;

    // Hide global instance on home page (we'll place it manually)
    if (isGlobal && pathname === '/') return null;

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block">{subtitle}</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-coco-forest mb-8" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="text-coco-forest/60 text-sm md:text-base mb-12 max-w-md">
                            {description}
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email", value: email },
                                { icon: Phone, label: "Phone", value: phone },
                                { icon: MapPin, label: "Address", value: address }
                            ].map((item, i) => (

                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-coco-sandy flex items-center justify-center flex-shrink-0">
                                        <item.icon className="text-coco-forest w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-coco-forest/40 mb-1">{item.label}</div>
                                        <div className="text-coco-forest font-semibold">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 w-full h-[250px] bg-coco-sandy rounded-[2rem] overflow-hidden border border-coco-forest/5 relative shadow-inner">
                            <iframe
                                src={data?.map_embed_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2415175923!2d106.759478!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e098ed2323%3A0x6d11f7c0d0232490!2sJakarta%20Pusat%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.2)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale-[0.2]"
                            ></iframe>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-coco-sandy p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-coco-forest/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-coco-forest/50 mb-2 px-1">Full Name</label>
                                    <input suppressHydrationWarning type="text" className="w-full bg-white border border-coco-forest/10 rounded-2xl px-5 py-4 focus:border-coco-gold outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-coco-forest/50 mb-2 px-1">Email Address</label>
                                    <input suppressHydrationWarning type="email" className="w-full bg-white border border-coco-forest/10 rounded-2xl px-5 py-4 focus:border-coco-gold outline-none transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-coco-forest/50 mb-2 px-1">Company Name</label>
                                <input suppressHydrationWarning type="text" className="w-full bg-white border border-coco-forest/10 rounded-2xl px-5 py-4 focus:border-coco-gold outline-none transition-colors" placeholder="Your Corp Ltd" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-coco-forest/50 mb-2 px-1">Product of Interest</label>
                                <select suppressHydrationWarning className="w-full bg-white border border-coco-forest/10 rounded-2xl px-5 py-4 focus:border-coco-gold outline-none transition-colors appearance-none">
                                    <option>Coconut Charcoal</option>
                                    <option>Virgin Coconut Oil</option>
                                    <option>Desiccated Coconut</option>
                                    <option>Other / Customized</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-coco-forest/50 mb-2 px-1">Message</label>
                                <textarea rows={4} className="w-full bg-white border border-coco-forest/10 rounded-2xl px-5 py-4 focus:border-coco-gold outline-none transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button suppressHydrationWarning className="w-full bg-coco-forest text-coco-sandy py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-coco-leaf transition-all shadow-xl shadow-coco-forest/10">
                                Send Inquiry
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
