"use client";
import { CartItem, WineDetailProps } from "@/interface/type";
import Image from "next/image";
import React from "react";
import { WineDesc } from "./WineDesc";
import { addToCart } from "@/utils/localStorage";
import router from "next/router";

export default function WineDetail({
  image,
  name,
  color,
  vintage,
  alchocol,
  description,
  price,
}: WineDetailProps) {
  const handleAddToCart = () => {
    const product: CartItem = {
      image,
      name,
      color,
      vintage,
      alchocol,
      description,
      price,
    };
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center text-wine p-5 lg:p-10">
      <div className="lg:w-1/3 lg:text-start mb-5 lg:mb-0">
        <p className="text-3xl lg:text-5xl font-bold mb-5">{name}</p>
        <p className="text-lg lg:text-2xl">{description}</p>
      </div>
      <div className="lg:w-1/3 w-full lg:px-5">
        <div className="relative overflow-hidden rounded-lg lg:h-auto">
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
        <WineDesc desc="Берба" result={vintage} />
        <WineDesc desc="Созревање" result="Барик" />
        <WineDesc desc="Алкохол" result={alchocol} />
        <WineDesc desc="Боја" result={color} />

        <button
          className="border px-6 py-3 md:px-4 md:py-2 border-wine text-lg md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          додади во 🛒
        </button>
      </div>
    </section>
  );
}
