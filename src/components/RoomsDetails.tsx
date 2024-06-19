"use client";
import Image from "next/image";
import { useState } from "react";
export interface RoomDetailProps {
  id: string;
  name: string;
  mainImage: string;
  description?: string;
  location?: string;
  price?: number;
  images?: [];
}
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
            <div className="block mt-5">
              <a
                href="/contact"
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
            <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
              <span className="text-2xl">&#128719;</span>
              <span className="text-2xl">3 лица</span>
            </div>
            <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
              <span className="text-2xl">&#128705;</span>
              <span className="text-2xl">Бања</span>
            </div>
            <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
              <span className="text-2xl">&#128246;</span>
              <span className="text-2xl">Free wifi</span>
            </div>
            <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
              <span className="text-2xl">&#127969;</span>
              <span className="text-2xl">Тераса</span>
            </div>
            <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
              <span className="text-2xl">&#127359;</span>
              <span className="text-2xl">Паркинг</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <p className="text-5xl text-wine text-center my-5 font-bold">
            ГАЛЕРИЈА
          </p>
          <div className="mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="relative bg-white rounded-lg shadow-lg">
                  <button
                    className="absolute top-0 right-0 m-4 p-2 font-bold text-wine bg-cream"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  <div className="p-4">
                    <Image
                      src={`/${selectedImage}`}
                      alt="Selected image"
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
