import React, { useState } from 'react';
import { useCart } from './context/CartContext';

const IMAGE_URL_BASE = 'http://localhost:8080';

const ProductCard = ({ product, navigate }) => {

  const { addToCart } = useCart(); // Get addToCart from context
  const [showModal, setShowModal] = useState(false);

  const handleAddToCartClick = () => {
    addToCart(product);
    setShowModal(true);
  };

  const imageUrl = `${IMAGE_URL_BASE}${product.imageUrl}`;
  const capitalizedBrand = product.brand.charAt(0).toUpperCase() + product.brand.slice(1);

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      <figure
        className="px-6 pt-6 h-60 bg-white rounded-t-lg cursor-pointer"
        onClick={() => navigate && product.Id ? navigate(`/product/${product.Id}`) : null} // Navigate to product details if navigate and product.id exist
      >
        <img
          src={imageUrl} alt={product.brand} className="h-full w-full object-contain rounded-md"
        />
      </figure>
      <div className="card-body items-center text-center p-6 flex-grow">
        <h3 className="card-title text-xl font-semibold mb-2 min-h-[3em] flex items-center justify-center">{capitalizedBrand}</h3>
        <h3 className="card-title text-xl font-semibold mb-2 min-h-[3em] flex items-center justify-center">{product.model}</h3>
        <p className="text-lg font-bold text-primary mb-4">ksh. {parseFloat(product.price).toFixed(2)}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={handleAddToCartClick}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Success!</h3>
            <p className="py-4">{product.model} has been added to your cart.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowModal(false)}>
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
