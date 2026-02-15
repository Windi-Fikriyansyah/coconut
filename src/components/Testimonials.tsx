"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface TestimonialsProps {
    data?: Testimonial[];
    title?: string;
    subtitle?: string;
}

const Testimonials = ({ data, title, subtitle }: TestimonialsProps) => {
    const items = data || [];
    const sliderRef = React.useRef<any>(null);

    const [slidesToShow, setSlidesToShow] = React.useState(1);

    React.useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth >= 1280) setSlidesToShow(3);
            else if (window.innerWidth >= 768) setSlidesToShow(2);
            else setSlidesToShow(1);
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    const settings = {
        dots: true,
        infinite: items.length > slidesToShow,
        speed: 800,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        dotsClass: "slick-dots custom-dots",
    };

    if (items.length === 0) return null;

    return (
        <section className="py-20 bg-coco-sandy/30 overflow-hidden" id="testimonials">
            <div className="container mx-auto px-5 md:px-16">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block"
                    >
                        {subtitle || "Success Stories"}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-coco-gold mb-6"
                    >
                        {title || "What Our Partners Say"}
                    </motion.h2>

                    <div className="w-20 h-1 bg-coco-gold mx-auto"></div>
                </div>

                {/* Carousel */}
                <div className="relative group/carousel px-4">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Previous Testimonial"
                    >
                        <IoIosArrowBack className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl border border-coco-forest/10 flex items-center justify-center text-coco-forest hover:bg-coco-gold hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Next Testimonial"
                    >
                        <IoIosArrowForward className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <Slider ref={sliderRef} {...settings} className="testimonial-carousel -mx-4">
                        {items.map((item, index) => (
                            <div key={index} className="px-4 py-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-coco-forest/5 relative flex flex-col h-full min-h-[400px]"
                                >
                                    <Quote className="absolute top-8 right-8 w-12 h-12 text-coco-sandy/30" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-coco-gold text-coco-gold" />
                                        ))}
                                    </div>

                                    <p className="text-coco-forest/80 text-lg leading-relaxed mb-8 flex-grow italic">
                                        "{item.content}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-coco-sandy/30">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-coco-gold/20">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-coco-forest">{item.name}</h4>
                                            <p className="text-coco-gold text-sm font-medium">{item.role}</p>
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

export default Testimonials;
