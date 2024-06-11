"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface WineDetailProps {
  image: string;
  name: string;
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
    <section className="text-gray-700 body-font overflow-hidden bg-cream text-wine">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={image}
              alt="ecommerce"
              width={100}
              height={100}
              layout="responsive"
              className="rounded"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-wine">
              {name}
            </h1>

            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div>
                <p>Боја: {color}</p>
                <p>Алкохол: {alchocol} %</p>
                <p>Берба: {vintage}</p>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-wine">
                {price} денари
              </span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
