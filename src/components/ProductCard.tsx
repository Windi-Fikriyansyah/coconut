"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
    slug: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ slug, title, description, image, tags }) => {
    return (
        <Link href={`/products/${slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-coco-forest/5 hover:shadow-xl transition-all duration-500"
            >
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-coco-forest/80 backdrop-blur-md text-coco-sandy px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-coco-forest mb-3">{title}</h3>
                    <p className="text-coco-forest/60 text-sm leading-relaxed mb-6">
                        {description}
                    </p>
                    <span className="flex items-center gap-2 text-coco-forest font-bold text-sm group-hover:text-coco-gold transition-colors">
                        View Specifications
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProductCard;
