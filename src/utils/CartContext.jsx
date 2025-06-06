// src/utils/CartContext.js
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });

  const addToCart = (quantity = 1) => {
    setCartCount((prev) => prev + quantity);
  };

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
