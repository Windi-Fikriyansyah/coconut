import React from "react";
import SamplePageClient from "@/components/SamplePageClient";
import { getContactData, getProducts, getCountries } from "@/lib/data";

export default async function RequestSamplePage() {
  const [contactData, products, countries] = await Promise.all([
    getContactData(),
    getProducts(),
    getCountries(),
  ]);

  return (
    <SamplePageClient
      data={contactData}
      products={products}
      dbCountries={countries}
    />
  );
}
