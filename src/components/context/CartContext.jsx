import React, { createContext, useState, useContext, useMemo, useCallback, useEffect } from 'react';

// 1. Create the Context
const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartItemCount: () => 0,
});

// 2. Create a custom hook for easy consumption
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Create the Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Optional: Load cart from localStorage on initial load
    try {
      const localData = localStorage.getItem('sokoPlaceCart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart from localStorage", error);
      return [];
    }
  });

  // Optional: Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sokoPlaceCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  }, [cartItems]);

  const getCartItemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  }), [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
