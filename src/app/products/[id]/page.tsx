"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/Banner";
import WineDetail from "@/components/WineDetail";

export default function WineDetails() {
  const params = useParams<{ id: string }>();
  const [wineData, setWineData] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/db.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch db.json");

        const db = await res.json();
        const found = db.wines?.find((w: any) => w.id === params.id);

        setWineData(found || null);
      } catch (e) {
        console.error("Error fetching wine data:", e);
        setWineData(null);
      }
    };

    if (params?.id) load();
  }, [params?.id]);

  if (!wineData) return null; // можеш и "Loading..." ако сакаш

  return (
    <>
      <Banner imageSrc="/gallery8.webp" text="Нашите вина" />
      <div>
        <WineDetail
          image={wineData.image}
          name={wineData.name}
          color={wineData.color}
          alchocol={wineData.alchocol}
          vintage={wineData.vintage}
          price={wineData.price}
          description={wineData.description}
        />
      </div>
    </>
  );
}
