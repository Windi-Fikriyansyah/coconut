"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from './ProductCard';

interface RelatedProductsSliderProps {
    products: Product[];
}

const RelatedProductsSlider = ({ products }: RelatedProductsSliderProps) => {
    const sliderRef = React.useRef<any>(null);

    const settings = {
        dots: false,
        infinite: products.length > 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: products.length > 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    infinite: products.length > 1,
                }
            }
        ]
    };

    if (products.length === 0) return null;

    return (
        <section className="py-24 bg-coco-sandy/30 overflow-hidden">
            <div className="container mx-auto px-8 md:px-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block"
                        >
                            Our Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-coco-forest"
                        >
                            Other Premium Products
                        </motion.h2>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="w-12 h-12 bg-white rounded-full shadow-lg border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all transform hover:scale-110 active:scale-95"
                            aria-label="Previous slide"
                        >
                            <IoIosArrowBack size={24} />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="w-12 h-12 bg-white rounded-full shadow-lg border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all transform hover:scale-110 active:scale-95"
                            aria-label="Next slide"
                        >
                            <IoIosArrowForward size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <Slider ref={sliderRef} {...settings} className="related-products-carousel -mx-4">
                        {products.map((product) => (
                            <div key={product.id} className="px-4 py-8">
                                <ProductCard
                                    slug={product.slug}
                                    title={product.title}
                                    description={product.short_description}
                                    image={product.image}
                                    tags={[]} // Tags empty as focus is on product title/desc
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default RelatedProductsSlider;
