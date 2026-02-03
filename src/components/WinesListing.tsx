"use client";
import Card from "@/components/Card";
import { fetchData } from "@/fetchData";
import { useEffect, useState } from "react";
import { WineProps } from "@/interface/type";
import FilterButton from "./FilterButton";

export default function WinesListing() {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WineProps[]>([]);

  useEffect(() => {
    const fetchDataAndSetWines = async () => {
      try {
        const endpoint = "wines";
        const data = await fetchData(endpoint);
        console.log("DATA:", data);

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
        <FilterButton
          filterType="Бело"
          label="Бели вина"
          onClick={handleFilterClick}
        />
        <FilterButton
          filterType="Црвено"
          label=" Црвени вина"
          onClick={handleFilterClick}
        />
        <FilterButton
          filterType="Ракија"
          label="Ракија"
          onClick={handleFilterClick}
        />
        <FilterButton
          filterType=""
          label="Сите производи"
          onClick={handleFilterClick}
        />
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
