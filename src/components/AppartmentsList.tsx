"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { fetchData } from "@/fetchData";
import { RoomDetailProps } from "@/interface/type";

export const AppartmentsList = () => {
  const [rooms, setRooms] = useState<RoomDetailProps[]>([]);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const endpoint = "smestuvanje";
        const data = await fetchData(endpoint);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching wine data:", error);
      }
    };

    fetchRooms();
  }, []);
  return (
    <>
      <div className="my-10">
        <p className="text-5xl text-wine text-center my-5 font-bold">
          СМЕСТУВАЊЕ
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-center p-10 ">
          {rooms.map((room: RoomDetailProps) => (
            <div key={room.id} className="flex-1 relative group">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={room.mainImage}
                  alt={room.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-start justify-start">
                  <span className="text-white text-center text-2xl font-bold bg-black w-full bg-opacity-50 p-4 rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                    {room.name}
                  </span>
                </div>
              </div>
              <div className="mt-5 mb-3">
                <Link
                  href={`/smestuvanje/${room.id}`}
                  className="border px-4 py-2 md:px-8 md:py-5 border-wine md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out block w-full text-center"
                >
                  Погледни
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
