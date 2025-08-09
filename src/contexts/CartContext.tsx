import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  options?: Record<string, string>;
  observation?: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCartByIndex: (index: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: CartItem) {
    setCart((prev) => [...prev, item]);
  }


  function removeFromCartByIndex(index: number) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCartByIndex, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}