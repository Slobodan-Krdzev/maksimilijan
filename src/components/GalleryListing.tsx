import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "@/fetchData";

export interface ImageProps {
  id: number;
  image: string;
}

export const GalleryListing = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataImages = async () => {
      try {
        const endpoint = "images";
        const data = await fetchData(endpoint);
        setImages(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchDataImages();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <p className="text-5xl text-wine text-center my-5 font-bold">ГАЛЕРИЈА</p>
      <div className="px-20 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map((img: ImageProps) => (
            <div
              key={img.id}
              className="relative w-full h-48"
              onClick={() => handleImageClick(img.image)}
            >
              <Image
                className="object-cover w-full h-full rounded-lg cursor-pointer"
                src={`/${img.image}`}
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
    </>
  );
};
