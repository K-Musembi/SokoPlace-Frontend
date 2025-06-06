import React from 'react';
import { useCart } from './context/CartContext'; // Import the useCart hook

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
    <div className="p-4 bg-base-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div 
            key={item.id} 
            className="flex flex-col sm:flex-row justify-between items-center p-4 border border-base-300 rounded-lg bg-base-200"
          >
            <div className="flex items-center mb-4 sm:mb-0 flex-grow">
              <img 
                src={item.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} 
                alt={item.name} 
                className="w-20 h-20 object-contain rounded mr-4 bg-white p-1"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.name || 'Product Name'}</h3>
                <p className="text-sm text-base-content/70">${parseFloat(item.price).toFixed(2)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity for {item.name}</label>
              <input
                id={`quantity-${item.id}`}
                type="number"
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  if (newQuantity >= 0) { 
                    updateQuantity(item.id, newQuantity); // Use context function
                  }
                }}
                className="input input-bordered w-20 text-center"
                min="0"
              />
              <button
                onClick={() => removeFromCart(item.id)} // Use context function
                className="btn btn-outline btn-error btn-sm" // Use context function
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
          <p>${getCartTotal.toFixed(2)}</p> {/* Use context total */}
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
