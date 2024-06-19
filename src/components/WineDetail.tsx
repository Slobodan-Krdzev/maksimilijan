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
    <section className="flex flex-col lg:flex-row justify-center items-center text-wine p-5 lg:p-10">
      <div className="lg:w-1/3 lg:text-start mb-5 lg:mb-0">
        <p className="text-3xl lg:text-5xl font-bold mb-5">{name}</p>
        <p className="text-lg lg:text-2xl">{description}</p>
      </div>
      <div className="lg:w-1/3 w-full lg:px-5">
        <div
          className="relative overflow-hidden rounded-lg lg:h-auto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={image}
            alt="ecommerce"
            width={800}
            height={1000}
            layout="responsive"
            className="object-cover lg:object-contain"
          />
        </div>
      </div>
      <div className="lg:w-1/3 lg:pl-10 grid grid-cols-2 lg:flex lg:flex-col">
        <div className="mb-3 px-5">
          <p className="text-xl lg:text-3xl font-bold">Берба</p>
          <p className="text-lg lg:text-xl">{vintage}</p>
        </div>
        <div className="mb-3 px-5">
          <p className="text-xl lg:text-3xl font-bold">Созревање</p>
          <p className="text-lg lg:text-xl">Барик</p>
        </div>
        <div className="mb-3 px-5 lg:mb-0">
          <p className="text-xl lg:text-3xl font-bold">Алкохол</p>
          <p className="text-lg lg:text-xl">{alchocol}</p>
        </div>
        <div className="mb-3 px-5">
          <p className="text-xl lg:text-3xl font-bold">Боја</p>
          <p className="text-lg lg:text-xl">{color}</p>
        </div>
      </div>
    </section>
  );
}
