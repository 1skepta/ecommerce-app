import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      let updatedCart;
      if (exists) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [
          ...prev,
          {
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            quantity,
            image: product.image?.cart || product.image?.mobile || "",
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateQuantity = (id, value) => {
    setCartItems((prev) => {
      const updated = prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + value) }
            : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const removeAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
