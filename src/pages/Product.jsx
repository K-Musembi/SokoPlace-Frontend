import { useEffect, useState } from "react";
import { fetchProduct } from "../services/apiServices";
import ProductCard from "../components/ProductCard";


const Product = ({ title, category, navigate }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedProducts = await fetchProduct(category);
        setProducts(fetchedProducts);
      } catch (err) {
        // Corrected template literal for error logging
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
        <p>No {title ? title.toLowerCase() : 'products'} found at the moment.</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-base-100"> {/* Standard page background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
