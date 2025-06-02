import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../services/apiServices';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ title, category, navigate }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedProducts = await fetchProduct(category);
                setProducts(fetchedProducts.slice(0, 3));
            } catch (err) {
                console.error(`Error fetching ${category} products:`, err);
                setError(`Failed to load ${title}. Please try again later.`);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            loadProducts();
        }
    }, [category, title]);

    if (loading) {
        return (
            <div className="py-12 text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12 text-center text-error">
                <p>{error}</p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="py-12 text-center">
                <p>No {title.toLowerCase()} found at the moment.</p>
            </div>
        );
    }

    return (
        <div className="py-12 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.id || product.name} 
                            product={product} 
                            navigate={navigate}
                        />
                    ))}
                </div>
                {products.length > 0 && (
                    <div className="text-center mt-12">
                        <button
                            className="btn btn-secondary btn-wide"
                            onClick={() => navigate(`/${category}s`)}
                        >
                            More {category.charAt(0).toUpperCase() + category.slice(1)}s
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;
