import React from 'react';
import { useCart } from './context/CartContext'; // Import the useCart hook
const IMAGE_URL_BASE = 'http://localhost:8080';

const Cart = () => {
  // Consume the cart context directly
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart // Add clearCart if you want a button for it
  } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
        <p className="text-gray-500">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="my-8 mx-auto max-w-[600px] p-4 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div 
            key={item.Id} 
            className="flex flex-col sm:flex-row justify-between items-center p-4 border border-base-300 rounded-lg bg-base-200"
          >
            <div className="flex items-center mb-4 sm:mb-0 flex-grow">
              <img 
                src={`${IMAGE_URL_BASE}${item.imageUrl}`} 
                alt={item.model} 
                className="w-20 h-20 object-contain rounded mr-4 bg-white p-1"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.brand} {item.model}</h3>
                <p className="text-sm text-base-content/70">ksh. {parseFloat(item.price).toFixed(2)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label htmlFor={`quantity-${item.Id}`} className="sr-only">Quantity for {item.model}</label>
              <input
                id={`quantity-${item.Id}`}
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  if (newQuantity >= 0) { 
                    updateQuantity(item.Id, newQuantity); // Use context function
                  }
                }}
                className="input input-bordered w-20 text-center"
                min="0"
              />
              <button
                onClick={() => removeFromCart(item.Id)} // Use context function
                className="btn btn-outline btn-error btn-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-base-300">
        <div className="flex justify-between items-center text-2xl font-bold mb-6">
          <p>Total:</p>
          <p>ksh. {getCartTotal.toFixed(2)}</p> {/* Use context total */}
        </div>
        <button className="btn btn-primary btn-block text-lg">
          Proceed to Checkout
        </button>
        {/* Optional: Clear Cart Button */}
        <button 
          onClick={clearCart} 
          className="btn btn-outline btn-error btn-block mt-4"
          disabled={cartItems.length === 0}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
