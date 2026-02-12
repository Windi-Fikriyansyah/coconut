import React from 'react';
import ProductsPageClient from '@/components/ProductsPageClient';
import { getProducts, getProductsPageData } from '@/lib/data';

export const revalidate = false; // On-demand revalidation

export default async function ProductsPage() {
    const [products, data] = await Promise.all([
        getProducts(),
        getProductsPageData()
    ]);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-coco-forest/50">Products page content not found in database.</p>
            </div>
        );
    }

    return <ProductsPageClient products={products} data={data} />;
}
