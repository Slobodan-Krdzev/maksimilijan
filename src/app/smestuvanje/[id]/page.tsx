"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/Banner";
import RoomsDetails from "@/components/RoomsDetails";

export default function RoomDetails() {
  const params = useParams<{ id: string }>();

  const [roomData, setRoomData] = useState<any>(null);
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

        const found = db.smestuvanje?.find(
          (room: any) => String(room.id) === String(params.id)
        );

        console.log("ROOM ID:", params.id);
        console.log("FOUND ROOM:", found);

        if (!found) {
          setRoomData(null);
          setErr(`Не е пронајдена соба со id: ${params.id}`);
        } else {
          setRoomData(found);
        }
      } catch (e: any) {
        console.error("Error fetching room data:", e);
        setErr(e?.message || "Непозната грешка");
        setRoomData(null);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) load();
  }, [params?.id]);

  if (loading) return <p className="p-6 text-center">Се вчитува...</p>;

  if (err) return <p className="p-6 text-center text-red-600">{err}</p>;

  if (!roomData)
    return <p className="p-6 text-center">Нема податоци за ова сместување.</p>;

  return (
    <>
      <Banner imageSrc={roomData.mainImage} text={""} />
      <div>
        <RoomsDetails
          name={roomData.name}
          price={roomData.price}
          description={roomData.description}
          id={roomData.id}
          location={roomData.location}
          mainImage={roomData.mainImage}
          images={roomData.images}
        />
      </div>
    </>
  );
}
