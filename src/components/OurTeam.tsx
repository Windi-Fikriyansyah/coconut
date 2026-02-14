"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Instagram } from 'lucide-react';
import { TeamMember } from '@/lib/data';

interface OurTeamProps {
    data?: TeamMember[];
    title?: string;
    subtitle?: string;
}

const OurTeam = ({ data, title, subtitle }: OurTeamProps) => {
    const members = data || [];


    if (members.length === 0) return null;

    return (
        <section className="py-20 bg-white" id="team">
            <div className="container mx-auto px-5 md:px-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block"
                    >
                        {subtitle || "Masterminds"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-coco-forest mb-6"
                    >
                        {title || "Meet Our Experts"}
                    </motion.h2>

                    <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                </div>

                {/* Team Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-10">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}

                            className="group w-full sm:w-64 lg:w-72"
                        >
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-lg border border-coco-forest/5">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay with Socials */}
                                <div className="absolute inset-0 bg-gradient-to-t from-coco-forest/90 via-coco-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                                    <div className="flex gap-4">
                                        {member.linkedin_url && (
                                            <a
                                                href={member.linkedin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-coco-gold transition-colors"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.instagram_url && (
                                            <a
                                                href={member.instagram_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-coco-gold transition-colors"
                                            >
                                                <Instagram className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-bold text-coco-forest mb-1">{member.name}</h4>
                                <p className="text-coco-gold font-medium text-sm lg:text-base">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
