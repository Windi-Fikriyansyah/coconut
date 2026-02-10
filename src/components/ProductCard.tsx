"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  title,
  description,
  image,
  tags,
}) => {
  const emailTo = "hello@globalcocoprime.com"; // Default sales email
  const emailSubject = encodeURIComponent(`Inquiry: ${title}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-coco-forest/5 hover:shadow-xl transition-all duration-500 h-full flex flex-col"
    >
      <Link
        href={`/products/${slug}`}
        className="relative h-48 overflow-hidden block"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-8 flex-1 flex flex-col">
        <Link href={`/products/${slug}`}>
          <h3 className="text-xl font-bold text-coco-forest mb-3 group-hover:text-coco-gold transition-colors">
            {title}
          </h3>
        </Link>
        {/* <p className="text-coco-forest/60 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p> */}
        <div className="mt-auto flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
          <Link
            href={`/products/${slug}`}
            className="flex items-center justify-center gap-2 whitespace-nowrap text-coco-forest font-bold text-xs hover:text-coco-gold transition-colors"
          >
            View Detail
            <MoveRight className="w-4 h-4" />
          </Link>

          <a
            href={`mailto:${emailTo}?subject=${emailSubject}`}
            className="flex items-center justify-center bg-coco-gold/10 text-coco-gold px-4 py-2 rounded-full font-bold text-xs hover:bg-coco-gold hover:text-coco-forest transition-all"
          >
            Get Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
