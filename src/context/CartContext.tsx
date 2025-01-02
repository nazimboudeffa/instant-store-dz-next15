"use client";
import { createContext, useState, useContext, ReactNode, useMemo } from 'react';

interface ProductData {
  title: string;
  description: string;
  price: number;
}

interface CartContextType {
  cartItems: ProductData[];
  addToCart: (product: ProductData) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductData[]>([]);

  const addToCart = (product: ProductData) => {
    setCartItems([...cartItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo(() => ({ cartItems, addToCart, clearCart }), [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};