"use client";
import Card, { WineProps } from "@/components/Card";
import React, { useEffect, useState } from "react";

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState<WineProps[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (wineId: number) => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems") ?? "[]");

    const updatedItems = existingItems.filter(
      (item: WineProps) => item.id !== wineId
    );

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    setCartItems(updatedItems);
  };

  return (
    <div>
      <h1>Кошничка {cartItems.length}</h1>

      {cartItems.map((wine, index) => (
        <Card
          key={wine.id}
          image={wine.image}
          name={wine.name}
          id={wine.id}
          color={wine.color}
          addCardToShop={() => removeFromCart(wine.id)}
        />
      ))}
    </div>
  );
};

export default AddToCartPage;
