import React from "react";
import Image from "next/image";
import Card, { WineProps } from "@/components/Card";
import { fetchData } from "@/fetchData";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WinesListing() {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WineProps[]>([]);

  useEffect(() => {
    const fetchDataAndSetWines = async () => {
      try {
        const data = await fetchData();
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
    <div className="flex flex-row p-5">
      <div className="basis-1/4 ">
        <p className="bg-cream text-wine text-center text-3xl p-4 rounded">
          Филтри
        </p>

        <div className="flex flex-row">
          <button onClick={() => handleFilterClick("Бело")} className="btn">
            Бели вина
          </button>
          <button onClick={() => handleFilterClick("Црвено")} className="btn">
            Црвени вина
          </button>
          <button onClick={() => handleFilterClick("")} className="btn">
            Сите вина
          </button>
        </div>
      </div>
      <div className="basis-3/4 ">
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-around text-center">
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
    </div>
  );
}
