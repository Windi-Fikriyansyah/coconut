"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GalleryImage, GalleryMetadata } from '@/lib/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ShippingGalleryProps {
    data?: GalleryImage[];
    section?: GalleryMetadata | null;
}

const ShippingGallery = ({ data, section }: ShippingGalleryProps) => {
    const items = data || [];
    const sliderRef = React.useRef<any>(null);
    const [slidesToShow, setSlidesToShow] = React.useState(1); // Default to 1 (safe for mobile)

    const title = section?.title || "Shipping & Logistics Gallery";
    const subtitle = section?.subtitle || "Documented Process";

    React.useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth >= 1280) setSlidesToShow(4);
            else if (window.innerWidth >= 1024) setSlidesToShow(3);
            else if (window.innerWidth >= 768) setSlidesToShow(2);
            else setSlidesToShow(1);
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    const settings = {
        dots: false,
        infinite: items.length > slidesToShow,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    if (items.length === 0) return null;

    return (
        <section className="pt-10 pb-16 md:pb-24 bg-white overflow-hidden" id="documentation">
            <div className="container mx-auto px-5 md:px-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block"
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-coco-forest mb-6"
                    >
                        {title}
                    </motion.h2>
                    <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                </div>

                {/* Carousel */}
                <div className="relative group/carousel">
                    {/* Navigation Buttons - Hidden on Mobile */}
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white rounded-full shadow-xl border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all"
                    >
                        <IoIosArrowBack className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white rounded-full shadow-xl border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all"
                    >
                        <IoIosArrowForward className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <Slider ref={sliderRef} {...settings} className="shipping-carousel -mx-3">
                        {items.map((item, index) => (
                            <div key={index} className="px-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative h-64 rounded-3xl overflow-hidden shadow-lg border border-coco-forest/5"
                                >
                                    <Image
                                        src={item.src || ''}
                                        alt={item.title || 'Shipping Documentation'}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-coco-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <p className="text-white font-medium">{item.title}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ShippingGallery;
