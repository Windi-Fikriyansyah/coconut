import ProductCard from './ProductCard';

const ProductGrid = ({ data }: { data?: any[] }) => {
    const products = data || [];

    return (
        <section id="products" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-coco-gold font-bold uppercase tracking-widest text-xs mb-4 block">Our Products</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-coco-forest">Premium Derived <br /><span className="text-coco-forest/50">Products</span></h2>
                    </div>
                    <p className="text-coco-forest/60 max-w-sm">
                        We source only the finest matured coconuts to produce high-value derivatives with strict quality control.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            slug={product.slug}
                            title={product.title}
                            description={product.short_description}
                            image={product.image}
                            tags={typeof product.tags === 'string' ? JSON.parse(product.tags) : product.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
