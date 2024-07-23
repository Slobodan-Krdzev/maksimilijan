"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";
import { fetchData } from "@/fetchData";
import { WineProps } from "@/interface/type";
import FilterButton from "@/components/FilterButton";

export default function Products() {
  const [wines, setWines] = useState<WineProps[]>([]);
  const [filteredWines, setFilteredWines] = useState<WineProps[]>([]);
  const router = useRouter();
  const { color } = router.query;

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

  useEffect(() => {
    if (color) {
      const filtered = filterWines(wines, color as string);
      setFilteredWines(filtered);
    } else {
      setFilteredWines(wines);
    }
  }, [color, wines]);

  const filterWines = (items: WineProps[], criteria: string) => {
    return items.filter((item) => {
      return item.color === criteria;
    });
  };

  const handleFilterClick = (criteria: string) => {
    if (criteria === "") {
      router.push('/wines');
    } else {
      router.push(`/wines?color=${criteria}`);
    }
  };

  return (
    <>
      <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />
      <div className="text-center p-5 text-wine bg-cream mb-5 flex flex-wrap justify-center">
        <FilterButton
          filterType="Бело"
          label="Бели вина"
          onClick={() => handleFilterClick("Бело")}
        />
        <FilterButton
          filterType="Црвено"
          label="Црвени вина"
          onClick={() => handleFilterClick("Црвено")}
        />
        <FilterButton
          filterType=""
          label="Сите вина"
          onClick={() => handleFilterClick("")}
        />
      </div>
      <WinesListing wines={filteredWines} />
    </>
  );
}
