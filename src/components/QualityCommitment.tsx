"use client";

import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import { WhyChooseUsItem } from "@/lib/data";

const qualityItems: WhyChooseUsItem[] = [
    {
        icon: "ShieldCheck",
        title: "Rigorous Quality Assurance",
        description: "Our state-of-the-art laboratory testing ensures every batch meets international purity and safety standards."
    },
    {
        icon: "Leaf",
        title: "Ethical Sourcing",
        description: "We work directly with local farmers, ensuring fair trade practices and the highest quality raw materials."
    },
    {
        icon: "Factory",
        title: "Modern Facilities",
        description: "Equipped with advanced processing technology to maintain the natural integrity of our coconut derivatives."
    },
    {
        icon: "Globe",
        title: "Customized Export Solutions",
        description: "Flexible packaging and logistics tailored to meet the specific regulatory needs of your destination country."
    }
];

const QualityCommitment = () => {
    return (
        <WhyChooseUs
            data={qualityItems}
            title="Uncompromising Quality <br />At Every Stage"
            subtitle="Our Commitment"
            reversed={true}
            mainImage="/vco_lab_test_1770259220705.png"
        />
    );
};

export default QualityCommitment;
