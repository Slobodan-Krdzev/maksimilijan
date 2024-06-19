import React from "react";
import Image from "next/image";

export const Gallery = () => {
  return (
    <>
      <p className="text-3xl md:text-5xl text-wine text-center mb-5 font-bold">
        ГАЛЕРИЈА
      </p>
      <div className="h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-4/5 mx-auto">
          <div className="row-span-1 md:row-span-2 relative">
            <Image
              src="/bottles.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-red-100 col-span-1 md:col-span-2 relative">
            <Image
              src="/outdoor.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-purple-100 relative">
            <Image
              src="/vina.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-violet-100 row-span-1 md:row-span-2 relative">
            <Image
              src="/winery.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className="bg-sky-100 row-span-1 md:row-span-2 col-span-1 md:col-span-2 relative">
            <Image
              src="/temjanika.jpg"
              alt="card-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-emerald-100 relative">
            <Image
              src="/winebottle.png"
              alt="card-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="border px-6 py-3 md:px-8 md:py-5 border-wine text-lg md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out mb-10">
          <a href="/gallery">Оди кон галерија</a>
        </button>
      </div>
    </>
  );
};
