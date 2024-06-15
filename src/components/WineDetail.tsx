"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface WineDetailProps {
  image: string;
  name: string;
  description: string;
  color: string;
  vintage: number;
  alchocol: number;
  price: number;
}

export default function WineDetail({
  image,
  name,
  color,
  vintage,
  alchocol,
  description,
  price,
}: WineDetailProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="flex justify-center items-start text-wine p-10 h-screen items-center">
      <div className="w-1/3 text-start">
        <p className="text-5xl font-bold mb-10">{name}</p>
        <p className="text-2xl">{description}</p>
      </div>
      <div className="w-1/3 items-center ">
        <Image
          src={image}
          alt="ecommerce"
          width={300} // Зголемете ја ширината
          height={400} // Зголемете ја висината
          layout="responsive"
          className="h-full w-full" // Додајте класи за полна висина и ширина
        />
      </div>
      <div className="w-1/3 pl-10">
        <div className="mb-3">
          <p className="text-3xl font-bold">Берба</p>
          <p className="text-2xl">{vintage}</p>
        </div>
        <div className="mb-3">
          <p className="text-3xl font-bold">Созревање</p>
          <p className="text-2xl">Барик</p>
        </div>

        <div className="mb-3">
          <p className="text-3xl font-bold">Алкохол</p>
          <p className="text-2xl">{alchocol}</p>
        </div>
        <div className="mb-3">
          <p className="text-3xl font-bold">Боја</p>
          <p className="text-2xl">{color}</p>
        </div>
      </div>
    </section>
  );
}
