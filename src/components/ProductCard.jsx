import React, { useState } from 'react';
import { useCart } from './context/CartContext';

const ProductCard = ({ product, navigate }) => {
  const {
    id,
    name = 'Product Name',
    imageUrl, // Remove default imageUrl
    description = 'An excellent choice for your needs, offering great value and performance.',
    price = 0.00
  } = product || {};

  const { addToCart } = useCart(); // Get addToCart from context
  const displayDescription = description.length > 100 ? description.substring(0, 97) + '...' : description;
  const [showModal, setShowModal] = useState(false);

  const handleAddToCartClick = () => {
    addToCart(product);
    setShowModal(true);
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      <figure
        className="px-6 pt-6 h-60 bg-white rounded-t-lg cursor-pointer"
        onClick={() => navigate && id ? navigate(`/product/${id}`) : null} // Navigate to product details if navigate and id exist
      >
        <img
          src={imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} // Use placeholder if imageUrl is not provided
          alt={name}
          className="h-full w-full object-contain rounded-md"
        />
      </figure>
      <div className="card-body items-center text-center p-6 flex-grow">
        <h3 className="card-title text-xl font-semibold mb-2 min-h-[3em] flex items-center justify-center">{name}</h3>
        <p className="text-sm text-base-content/70 mb-3 h-20 overflow-hidden">{displayDescription}</p>
        <p className="text-lg font-bold text-primary mb-4">${parseFloat(price).toFixed(2)}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={handleAddToCartClick}
            disabled={!id}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Success!</h3>
            <p className="py-4">{product.name} has been added to your cart.</p>
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
