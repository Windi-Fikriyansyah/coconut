"use client";

import React from "react";
import WhyChooseUs from "./WhyChooseUs";
import { QualityCommitmentData, QualityCommitmentItem } from "@/lib/data";

interface QualityCommitmentProps {
    data: QualityCommitmentData | null;
    items: QualityCommitmentItem[];
}

const QualityCommitment = ({ data, items }: QualityCommitmentProps) => {
    return (
        <WhyChooseUs
            data={items}
            title={data?.title || "Uncompromising Quality <br />At Every Stage"}
            subtitle={data?.subtitle || "Our Commitment"}
            reversed={true}
            image={data?.image}
        />
    );
};

export default QualityCommitment;
