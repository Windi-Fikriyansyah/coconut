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

  reversed?: boolean;

  mainImage?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image?: any;

  bgColor?: string;
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
  reversed = false,
  image,
  mainImage: propMainImage,
  image2: propImage2,
  image3: propImage3,
  image4: propImage4,
  bgColor = "bg-coco-sandy"
}: WhyChooseUsProps) => {
  const items = data && data.length > 0 ? data : defaultItems;

  const cleanPath = (path: string | null | undefined) => {
    if (!path) return "";
    let clean = path.replace(/^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/, "");
    clean = clean.replace(/^\/?public\//, "/");
    if (!clean.startsWith("/") && !clean.startsWith("http")) {
      clean = "/" + clean;
    }
    return clean;
  };

  let images: string[] = [];
  try {
    if (typeof image === 'string' && image.trim().startsWith('[')) {
      images = JSON.parse(image);
    } else if (Array.isArray(image)) {
      images = image;
    } else if (image) {
      images = [image];
    }
  } catch (e) {
    console.error("Gagal parse images:", e);
  }

  const sanitizedImages = images.map(img => cleanPath(img));

  const finalMainImage = sanitizedImages[0] || propMainImage || "/semi_husked_sorting_1770259203229.png";
  const finalImage2 = sanitizedImages[1] || propImage2 || "/charcoal_briquette_test_1770259238325.png";
  const finalImage3 = sanitizedImages[2] || propImage3 || "/semi_husked_sorting_1770259203229.png";
  const finalImage4 = sanitizedImages[3] || propImage4 || "/vco_lab_test_1770259220705.png";

  return (
    <section className={`py-16 md:py-28 ${bgColor}`}>
      <div className="container mx-auto px-5 md:px-12">
        {/* Judul untuk Mobile (Tampil di atas gambar) */}

        {/* Perubahan Penting: Menggunakan items-start agar kolom kanan bisa memanjang bebas */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative">
          {/* IMAGE COLLAGE (STICKY) */}

          {/* IMAGE COLLAGE (MOBILE & DESKTOP) */}
          <div className={`${reversed ? 'lg:order-2' : 'lg:order-1'}`}>

            {/* Mobile Image Collage (Sekarang sama stylenya dengan desktop, hanya ukuran lebih kecil) */}
            <div className="lg:hidden relative h-[350px] w-full mb-12">
              {/* Main Frame Mobile */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] border-[4px] border-coco-gold rounded-[30px] z-0`}></div>

              {/* 1. BIG CENTER IMAGE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[70%] rounded-2xl overflow-hidden shadow-xl z-10 border-2 border-white">
                <Image src={finalMainImage} alt="Main" fill unoptimized className="object-cover" />
              </div>

              {/* 2. TOP RIGHT/LEFT IMAGE */}
              <div className={`absolute top-[5%] ${reversed ? 'left-[2%]' : 'right-[2%]'} w-[30%] h-[30%] rounded-xl overflow-hidden border-2 border-coco-gold shadow-lg z-20`}>
                <Image src={finalImage2} alt="Quality" fill unoptimized className="object-cover" />
              </div>

              {/* 3. BOTTOM LEFT/RIGHT IMAGE */}
              <div className={`absolute bottom-[2%] ${reversed ? 'right-[5%]' : 'left-[5%]'} w-[40%] h-[30%] rounded-xl overflow-hidden border-2 border-coco-gold shadow-lg z-20`}>
                <Image src={finalImage3} alt="Sorting" fill unoptimized className="object-cover" />
              </div>

              {/* 4. BOTTOM RIGHT/LEFT IMAGE */}
              <div className={`absolute bottom-[10%] ${reversed ? 'left-[5%]' : 'right-[5%]'} w-[25%] h-[25%] rounded-xl overflow-hidden border-2 border-coco-gold shadow-lg z-20`}>
                <Image src={finalImage4} alt="Testing" fill unoptimized className="object-cover" />
              </div>
            </div>

            {/* Desktop Image Collage (Tetap sama, tidak berubah) */}
            <motion.div
              initial={{ opacity: 0, x: reversed ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full hidden lg:block lg:sticky lg:top-32"
            >
              {/* ... (Konten desktop Anda tetap di sini tanpa perubahan) ... */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[75%] border-[6px] border-coco-gold rounded-[40px] z-0`}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[65%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <Image src={finalMainImage} alt="Main Desktop" fill unoptimized className="object-cover" />
              </div>
              <div className={`absolute top-[4%] ${reversed ? 'left-[1%]' : 'right-[1%]'} w-[30%] h-[30%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20`}>
                <Image src={finalImage2} alt="Image 2" fill unoptimized className="object-cover" />
              </div>
              <div className={`absolute bottom-[-9%] ${reversed ? 'right-[2%]' : 'left-[2%]'} w-[45%] h-[35%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20`}>
                <Image src={finalImage3} alt="Image 3" fill unoptimized className="object-cover" />
              </div>
              <div className={`absolute bottom-[1%] ${reversed ? 'left-[1%]' : 'right-[1%]'} w-[25%] h-[25%] rounded-2xl overflow-hidden border-4 border-coco-gold shadow-xl z-20`}>
                <Image src={finalImage4} alt="Image 4" fill unoptimized className="object-cover" />
              </div>
            </motion.div>
          </div>

          {/* CONTENT (SCROLLABLE LIST) */}

          <div className={`flex flex-col lg:min-h-screen ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Judul Teks */}

            {/* Judul untuk Desktop (Ikut terscroll ke atas bersama item) */}

            {/* List Items */}

            <div className="space-y-4 md:space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 md:gap-6 bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-coco-gold/20 group"
                >
                  {/* Icon Container */}
                  <div className="min-w-[48px] h-12 md:min-w-[64px] md:h-16 rounded-xl md:rounded-2xl bg-coco-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <DynamicIcon
                      name={item.icon}
                      className="text-coco-forest w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>

                  <div>
                    <h3 className="text-base md:text-xl font-bold text-coco-forest mb-1 md:mb-2">
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
                className="inline-flex items-center gap-3 md:gap-4 bg-coco-forest text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-base hover:bg-coco-gold hover:text-coco-forest transition-all shadow-xl group"
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
