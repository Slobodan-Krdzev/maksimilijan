"use client";
import { RoomDetailProps } from "@/interface/type";
import Image from "next/image";
import { useState } from "react";
import { ComfortZone } from "./ComfortZone";
import ImageModal from "./ImageModal";

const RoomDetails = ({
  id,
  name,
  description,
  price,
  location,
  images,
  mainImage,
}: RoomDetailProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="mx-auto px-4 py-8 text-wine">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-center">{name}</h1>
        </div>
        <div className="flex flex-col md:flex-row mb-8 items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Image
              src={mainImage}
              alt="Room Image"
              width={300}
              height={400}
              layout="responsive"
              className="object-cover rounded"
            />
          </div>

          <div className="w-full md:w-1/2 container mx-auto p-4 md:p-20">
            <h2 className="text-2xl font-bold mb-4">Опис</h2>
            <p className="text-lg">{description}</p>
            <div className="block mt-10">
              <a
                href="https://www.booking.com/Share-pWB61Bz"
                target="_blank"
                className="py-2 px-4 md:py-5 md:px-8 border border-wine text-lg md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
              >
                Резервирај
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 mb-8 text-center bg-cream">
          <h2 className="text-2xl font-bold mb-4">Комфорт зона</h2>
          <div className="flex flex-wrap justify-center">
            <ComfortZone comfort={"🛏️"} desc={`3 лица`} />
            <ComfortZone comfort={"🛁"} desc={`Бања`} />
            <ComfortZone comfort={"🛜"} desc={`Free wifi`} />
            <ComfortZone comfort={"🏠"} desc={`Тераса`} />
            <ComfortZone comfort={"🅿️"} desc={`Паркинг`} />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <p className="text-5xl text-wine text-center my-5 font-bold">
            ГАЛЕРИЈА
          </p>
          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {images &&
                images.map((img: string) => (
                  <div
                    key={img}
                    className="relative w-full h-48"
                    onClick={() => handleImageClick(img)}
                  >
                    <Image
                      className="object-cover w-full h-full rounded-lg cursor-pointer"
                      src={`/${img}`}
                      alt="Gallery image"
                      layout="fill"
                    />
                  </div>
                ))}
            </div>

            {selectedImage && (
              <ImageModal image={selectedImage} onClose={handleCloseModal} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
