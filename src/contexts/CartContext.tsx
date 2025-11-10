import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        toast({
          title: "🛒 Cart Updated!",
          description: `${item.name} quantity increased to ${existingItem.quantity + 1}`,
          className: "bg-gradient-to-r from-primary to-secondary text-white border-white/20",
        });
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      
      toast({
        title: "✨ Added to Cart!",
        description: `${item.name} (₹${item.price}) is ready for checkout`,
        className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-white/20",
      });
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    const removedItem = items.find((item) => item.id === id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast({
      title: "🗑️ Removed from Cart",
      description: `${removedItem?.name || "Item"} has been removed`,
      className: "bg-gradient-to-r from-red-500 to-rose-600 text-white border-white/20",
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    const itemCount = getTotalItems();
    setItems([]);
    toast({
      title: "🧹 Cart Cleared",
      description: `${itemCount} item${itemCount !== 1 ? 's' : ''} removed from your cart`,
      className: "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-white/20",
    });
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
