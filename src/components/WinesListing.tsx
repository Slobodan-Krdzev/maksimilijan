import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { WineProps } from "@/interface/type";
import FilterButton from "./FilterButton";
import { useRouter } from "next/router";

export default function WinesListing({ wines }: { wines: WineProps[] }) {
  const [filteredWines, setFilteredWines] = useState<WineProps[]>(wines);
  const router = useRouter();

  const filterWines = (items: WineProps[], criteria: string) => {
    return items.filter((item) => {
      return item.color === criteria;
    });
  };

  const handleFilterClick = (criteria: string) => {
    const query = criteria ? { color: criteria } : {};
    router.push({
      pathname: "/products",
      query,
    });
  };

  const addToCart = (wine: WineProps) => {
    const existingItems = JSON.parse(localStorage.getItem("cartItems") ?? "[]");
    const updatedItems = [...existingItems, wine];
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    setFilteredWines(wines);
  }, [wines]);

  return (
    <>
      <div className="text-center p-5 text-wine bg-cream mb-5 flex flex-wrap justify-center">
        <FilterButton
          filterType="Бело"
          label="Бели вина"
          onClick={() => handleFilterClick("Бело")}
        />
        <FilterButton
          filterType="Црвено"
          label=" Црвени вина"
          onClick={() => handleFilterClick("Црвено")}
        />
        <FilterButton
          filterType=""
          label="Сите вина"
          onClick={() => handleFilterClick("")}
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
