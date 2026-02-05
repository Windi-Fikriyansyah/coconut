import React from 'react';
import Navbar from '@/components/Navbar';
import { Target, Eye, Heart, ShieldCheck, Users, Globe } from 'lucide-react';
import { getGlobalContent } from '@/lib/data';

export default async function AboutPage() {
    const globalContent = await getGlobalContent();
    const aboutText = globalContent.about_text || "Global Coco Prime started with a simple vision: to bring added value to local coconut farmers in Indonesia. We saw great potential in our coconut harvests, but the challenge was maintaining consistent quality for the international market.";

    return (
        <main className="min-h-screen bg-coco-sandy">
            <Navbar solid />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-coco-forest overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1543207064-751bd7394220?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <span className="text-coco-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                        Since 2018
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-coco-gold">Global Coco Prime</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Building a bridge between Indonesia's rich coconut plantations and the global market through quality and integrity.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-coco-forest mb-6">Our Journey</h2>
                            <p className="text-coco-forest/70 text-lg leading-relaxed mb-6">
                                {aboutText}
                            </p>
                            <p className="text-coco-forest/70 text-lg leading-relaxed">
                                Today, we have grown into one of the most trusted exporters of coconut derivative products, serving partners in over 25 countries with uncompromising quality standards.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1591193510594-106bdcb12a76?q=80&w=800&auto=format&fit=crop" alt="Coconut plantation" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-coco-forest text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                            <div className="w-16 h-16 bg-coco-gold rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="text-coco-forest" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                To be a global leader in the coconut export industry known for sustainability, innovation, and local community empowerment.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
                            <div className="w-16 h-16 bg-coco-gold rounded-2xl flex items-center justify-center mb-6">
                                <Target className="text-coco-forest" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                            <ul className="space-y-4 text-white/70 text-lg">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-coco-gold rounded-full flex-shrink-0"></div>
                                    Ensuring export-standard product quality through rigorous quality control.
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-coco-gold rounded-full flex-shrink-0"></div>
                                    Building long-term, mutually beneficial partnerships with global buyers.
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-coco-gold rounded-full flex-shrink-0"></div>
                                    Implementing sustainable and eco-friendly business practices.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-coco-forest mb-4">Core Values</h2>
                        <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Integrity", text: "Honesty in every transaction and a commitment to punctuality.", icon: ShieldCheck },
                            { title: "Quality", text: "Only the best products pass our inspection standards.", icon: Heart },
                            { title: "Sustainability", text: "Supporting farming practices that preserve the ecosystem.", icon: Globe },
                            { title: "Empowerment", text: "Growing together with local coconut farming communities.", icon: Users },
                        ].map((value, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl border border-coco-forest/5 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-coco-sandy rounded-xl flex items-center justify-center mx-auto mb-6 text-coco-forest">
                                    <value.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-coco-forest mb-2">{value.title}</h4>
                                <p className="text-coco-forest/60 text-sm leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}


