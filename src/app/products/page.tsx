import React from 'react';
import ProductsPageClient from '@/components/ProductsPageClient';
import { getProducts } from '@/lib/data';

export default async function ProductsPage() {
    const products = await getProducts();

    return <ProductsPageClient products={products} />;
}
