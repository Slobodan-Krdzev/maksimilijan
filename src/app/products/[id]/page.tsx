"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/Banner";
import WineDetail from "@/components/WineDetail";

export default function WineDetails() {
  const params = useParams<{ id: string }>();

  const [wineData, setWineData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr(null);

        const url = `${window.location.origin}/db.json`;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`db.json fetch failed: ${res.status}`);

        const db = await res.json();

        const found = db.wines?.find(
          (w: any) => String(w.id) === String(params.id)
        );

        console.log("DETAIL ID:", params.id);
        console.log("FOUND:", found);

        if (!found) {
          setWineData(null);
          setErr(`Не е пронајден производ со id: ${params.id}`);
        } else {
          setWineData(found);
        }
      } catch (e: any) {
        console.error("Error fetching wine data:", e);
        setErr(e?.message || "Непозната грешка");
        setWineData(null);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) load();
  }, [params?.id]);

  if (loading) return <p className="p-6 text-center">Се вчитува...</p>;

  if (err) return <p className="p-6 text-center text-red-600">{err}</p>;

  if (!wineData)
    return <p className="p-6 text-center">Нема податоци за овој продукт.</p>;

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
