"use client";

import { useState } from "react";
import { WineProps } from "@/interface/type";
import Image from "next/image";
import Link from "next/link";

function Card({ id, name, color, image }: WineProps) {
  const [isLoading, setIsLoading] = useState(true); // Лоадинг состојба

  return (
    <div className="relative text-wine bg-white shadow-md bg-clip-border rounded-lg w-80 mb-12 transform transition duration-500 hover:scale-110">
      {/* Image Skeleton */}
      <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
        {isLoading && (
          <div className="w-full h-full animate-pulse">
            <div className="h-full bg-gray-300 rounded-t-lg"></div>
          </div>
        )}
        <Image
          src={image}
          alt="card-image"
          fill
          className={`object-contain transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* Text Skeleton */}
      <div className="p-6">
        {isLoading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-2xl">{name}</p>
          </div>
        )}
      </div>

      {/* Button Skeleton */}
      <div className="py-3 flex">
        {isLoading ? (
          <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
        ) : (
          <Link href={`/products/${id}`} className="w-full max-w-96">
            <button className="border px-10 py-3 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out">
              детали
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
