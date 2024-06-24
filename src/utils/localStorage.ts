// utils/localStorage.ts

import { CartItem } from "@/interface/type";

export const addToCart = (product: CartItem): void => {
  if (typeof window !== "undefined") {
    let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity! += 1;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  }
  return [];
};

export const removeFromCart = (name: string) => {
  if (typeof window !== "undefined") {
    const cart = getCart();
    const updatedCart = cart.filter((item: CartItem) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};

export const updateCartQuantity = (name: string, quantity: number) => {
  if (typeof window !== "undefined") {
    const cart = getCart();
    const updatedCart = cart.map((item: CartItem) =>
      item.name === name ? { ...item, quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
};