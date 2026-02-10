"use client";

import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";

import Link from "next/link";

import * as LucideIcons from "lucide-react";
import { ArrowRight, Leaf } from "lucide-react";
import { WhyChooseUsItem } from "@/lib/data";

// const iconMap: { [key: string]: LucideIcon } = {

//     Leaf,

//     Award,

//     Truck,

//     ShieldCheck

// };

const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  // Ambil komponen dari library berdasarkan string nama (misal: "Truck")
  // @ts-ignore
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    // Fallback jika nama ikon di database tidak cocok dengan Lucide
    return <Leaf className={className} />;
  }

  return <IconComponent className={className} />;
};

interface WhyChooseUsProps {
  data?: WhyChooseUsItem[];

  title?: string;

  subtitle?: string;
}

const defaultItems: WhyChooseUsItem[] = [
  {
    icon: "Leaf",

    title: "100% Sustainable",

    description:
      "Every part of the coconut is utilized, ensuring zero-waste production and eco-friendly practices.",
  },

  {
    icon: "Award",

    title: "Uncompromising Quality",

    description:
      "Multi-stage quality control ensures only premium products reach our international clients.",
  },

  {
    icon: "Truck",

    title: "Global Logistics",

    description:
      "Seamless global distribution network with tracking and reliable delivery timelines.",
  },

  {
    icon: "ShieldCheck",

    title: "Certified Excellence",

    description:
      "Our facilities and products are ISO, Organic, and Halal certified for global compliance.",
  },

  // Tambahkan item tambahan untuk memastikan list lebih panjang dari gambar

  {
    icon: "Leaf",

    title: "Eco Innovation",

    description:
      "Continuously researching new ways to process coconut by-products into high-value goods.",
  },
];

const WhyChooseUs = ({
  data,

  title = "Why Global Partners <br />Trust Us",

  subtitle = "The Advantage",
}: WhyChooseUsProps) => {
  const items = data && data.length > 0 ? data : defaultItems;

  return (
    <section className="py-28 bg-coco-sandy">
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul untuk Mobile (Tampil di atas gambar) */}

        {/* Perubahan Penting: Menggunakan items-start agar kolom kanan bisa memanjang bebas */}

        <div className="grid lg:grid-cols-2 gap-20 items-start relative">
          {/* LEFT — IMAGE COLLAGE (STICKY) */}

          {/* h-fit memastikan container gambar hanya setinggi kontennya, bukan setinggi kolom kanan */}

          <div className="lg:sticky lg:top-32 h-fit hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full"
            >
              {/* Main Frame */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[75%] border-[6px] border-coco-gold rounded-[40px] z-0"></div>

              {/* 1. BIG CENTER IMAGE */}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <Image
                  src="/semi_husked_sorting_1770259203229.png"
                  alt="Warehouse storage"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 2. TOP RIGHT IMAGE */}

              <div className="absolute top-[4%] right-[1%] w-[30%] h-[30%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20">
                <Image
                  src="/charcoal_briquette_test_1770259238325.png"
                  alt="Exhibition booth"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 3. BOTTOM LEFT IMAGE */}

              <div className="absolute bottom-[-9%] left-[2%] w-[45%] h-[35%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20">
                <Image
                  src="/semi_husked_sorting_1770259203229.png"
                  alt="Team working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* 4. BOTTOM RIGHT IMAGE */}

              <div className="absolute bottom-[1%] right-[1%] w-[25%] h-[25%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20">
                <Image
                  src="/charcoal_briquette_test_1770259238325.png"
                  alt="Product packaging"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT (SCROLLABLE LIST) */}

          <div className="flex flex-col min-h-screen">
            {/* Judul untuk Desktop (Ikut terscroll ke atas bersama item) */}

            {/* List Items */}

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-coco-gold/20 group"
                >
                  {/* Icon Container */}
                  <div className="min-w-[64px] h-16 rounded-2xl bg-coco-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <DynamicIcon
                      name={item.icon}
                      className="text-coco-forest w-8 h-8"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-coco-forest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-coco-forest/70 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TOMBOL EXPLORE PRODUCT (Di paling bawah list) */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 mb-10"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-4 bg-coco-forest text-white px-10 py-5 rounded-full font-bold hover:bg-coco-gold hover:text-coco-forest transition-all shadow-xl group"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
