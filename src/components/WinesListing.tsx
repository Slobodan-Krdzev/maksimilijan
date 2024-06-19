import React from "react";

import Card, { WineProps } from "@/components/Card";
import { fetchData } from "@/fetchData";

import { useEffect, useState } from "react";

export default function WinesListing() {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WineProps[]>([]);

  useEffect(() => {
    const fetchDataAndSetWines = async () => {
      try {
        const endpoint = "wines";
        const data = await fetchData(endpoint);
        setWines(data);
        setFilteredWines(data);
      } catch (error) {
        console.error("Error fetching wine data:", error);
      }
    };

    fetchDataAndSetWines();
  }, []);

  const filterWines = (items: WineProps[], criteria: string) => {
    return items.filter((item) => {
      return item.color === criteria;
    });
  };

  const handleFilterClick = (criteria: string) => {
    if (criteria === "") {
      setFilteredWines(wines);
    } else {
      const filtered = filterWines(wines, criteria);
      setFilteredWines(filtered);
    }
  };

  const addToCart = (wine: WineProps) => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems") ?? "[]");

    const updatedItems = [...existingItems, wine];

    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  return (
    <>
      <div className="text-center p-5 text-wine bg-cream mb-5 flex flex-wrap justify-center">
        <button
          onClick={() => handleFilterClick("Бело")}
          className="btn mr-2 mb-2 md:mr-5 md:mb-0 text-2xl md:text-3xl"
        >
          Бели вина
        </button>
        <button
          onClick={() => handleFilterClick("Црвено")}
          className="btn mr-2 mb-2 md:mr-5 md:mb-0 text-2xl md:text-3xl"
        >
          Црвени вина
        </button>
        <button
          onClick={() => handleFilterClick("")}
          className="btn mr-2 mb-2 md:mr-5 md:mb-0 text-2xl md:text-3xl"
        >
          Сите вина
        </button>
      </div>

      <div>
        <div className="flex flex-wrap justify-center justify-around text-center">
          {filteredWines.map((wine: WineProps) => (
            <Card
              key={wine.id}
              image={wine.image}
              name={wine.name}
              id={wine.id}
              color={wine.color}
              addCardToShop={() => addToCart(wine)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
