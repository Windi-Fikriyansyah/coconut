import React from "react";
import QuotePageClient from "@/components/QuotePageClient";
import { getContactData, getProducts, getCountries } from "@/lib/data";

export default async function RequestQuotePage() {
  const [contactData, products, countries] = await Promise.all([
    getContactData(),
    getProducts(),
    getCountries(), // Ambil data negara dari DB
  ]);

  if (!contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-coco-sandy">
        <p className="text-coco-forest/50 font-bold">Data not found.</p>
      </div>
    );
  }

  return (
    <QuotePageClient
      data={contactData}
      products={products}
      dbCountries={countries}
    />
  );
}
