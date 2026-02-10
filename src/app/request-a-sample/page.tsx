import React from "react";
import SamplePageClient from "@/components/SamplePageClient";
import { getProducts, getCountries } from "@/lib/data";

export default async function RequestSamplePage() {
  const [products, countries] = await Promise.all([
    getProducts(),
    getCountries(),
  ]);

  return <SamplePageClient products={products} dbCountries={countries} />;
}
