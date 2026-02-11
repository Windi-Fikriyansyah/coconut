"use client";

import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import { QualityCommitmentData, QualityCommitmentItem } from "@/lib/data";

interface QualityCommitmentProps {
    data: QualityCommitmentData | null;
    items: QualityCommitmentItem[];
}

const QualityCommitment = ({ data, items }: QualityCommitmentProps) => {
    // Fungsi sanitasi lokal (sama dengan di About.tsx)
    const cleanPath = (path: string | null | undefined) => {
        if (!path) return "";
        let clean = path.replace(/^(https?:\/\/)(localhost|127\.0\.0\.1)(:\d+)?/, "");
        clean = clean.replace(/^\/?public\//, "/");
        if (!clean.startsWith("/") && !clean.startsWith("http")) {
            clean = "/" + clean;
        }
        return clean;
    };

    // Parse data image (JSON string atau Array)
    let images: string[] = [];
    try {
        if (typeof data?.image === 'string' && data.image.trim().startsWith('[')) {
            images = JSON.parse(data.image);
        } else if (Array.isArray(data?.image)) {
            images = data.image;
        } else if (data?.image) {
            images = [data.image];
        }
    } catch (e) {
        console.error("Gagal parse quality images:", e);
    }

    // Sanitasi semua path
    const sanitizedImages = images.map(img => cleanPath(img));

    return (
        <WhyChooseUs
            data={items}
            title={data?.title || "Uncompromising Quality <br />At Every Stage"}
            subtitle={data?.subtitle || "Our Commitment"}
            reversed={true}
            mainImage={sanitizedImages[0] || "/vco_lab_test_1770259220705.png"}
            image2={sanitizedImages[1] || "/charcoal_briquette_test_1770259238325.png"}
            image3={sanitizedImages[2] || "/semi_husked_sorting_1770259203229.png"}
            image4={sanitizedImages[3] || "/vco_lab_test_1770259220705.png"}
        />
    );
};

export default QualityCommitment;
