"use client";

import { useState, useEffect } from 'react';

export default function ProductGallery({ imageData, title }: { imageData: any, title: string }) {
    const getImages = () => {
        if (!imageData) return [];

        let rawImages = [];
        if (typeof imageData !== 'string') {
            rawImages = Array.isArray(imageData) ? imageData : [imageData];
        } else {
            try {
                // Remove potential leading/trailing whitespace or accidental characters
                const cleanData = imageData.trim();
                if (cleanData.startsWith('[') || cleanData.startsWith('{')) {
                    rawImages = JSON.parse(cleanData);
                    if (!Array.isArray(rawImages)) rawImages = [rawImages];
                } else {
                    rawImages = [{ url: cleanData }];
                }
            } catch (error) {
                rawImages = [{ url: imageData }];
            }
        }

        // Normalize to array of objects with 'url' property
        return rawImages.map((img: any) => {
            if (typeof img === 'string') return { url: img };
            return {
                ...img,
                url: img.url || img.src || ""
            };
        }).filter((img: any) => img.url);
    };

    const images = getImages();
    const [mainImage, setMainImage] = useState(images[0]?.url);

    useEffect(() => {
        if (images[0]?.url) {
            setMainImage(images[0].url);
        }
    }, [imageData]);

    if (!images || images.length === 0) return <div className="h-full w-full bg-gray-200 animate-pulse rounded-3xl min-h-[400px]" />;

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* GAMBAR BESAR */}
            <div className="relative flex-1 rounded-3xl overflow-hidden bg-white shadow-sm border border-coco-forest/5 min-h-[350px]">
                <img
                    src={mainImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    key={mainImage}
                />
            </div>

            {/* THUMBNAILS */}
            {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                    {images.map((img: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => setMainImage(img.url)}
                            className={`relative flex-none w-20 h-20 rounded-xl overflow-hidden border-2 transition-all 
                                ${mainImage === img.url ? 'border-coco-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                            <img
                                src={img.url}
                                alt={`${title} ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}