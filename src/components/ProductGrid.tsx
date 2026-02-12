import ProductCard from './ProductCard';

const ProductGrid = ({ data }: { data?: any[] }) => {
    const products = data || [];

    return (
        <section id="products" className="pt-5 pb-16 md:pb-32 bg-white">
            <div className="container mx-auto px-5 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-6">
                    <div className="max-w-xl">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-coco-forest">Products<br /></h2>
                    </div>

                </div>

                <div className="flex flex-wrap justify-center gap-5 md:gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="w-[calc(50%-0.7rem)] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                            <ProductCard
                                slug={product.slug}
                                title={product.title}
                                description={product.short_description}
                                image={product.image}
                                tags={typeof product.tags === 'string' ? JSON.parse(product.tags) : product.tags}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
