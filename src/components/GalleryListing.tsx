import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "@/fetchData";
import { usePathname } from "next/navigation";

export interface ImageProps {
  id: number;
  image: string;
}

interface GalleryListingProps {
  endpoint: string;
  title: string;
}

export const GalleryListing: React.FC<GalleryListingProps> = ({
  endpoint,
  title,
}) => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const currentPath = usePathname();

  useEffect(() => {
    const fetchDataImages = async () => {
      try {
        const data = await fetchData(endpoint);
        setImages(data);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchDataImages();
  }, [endpoint]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getImageSrc = (image: string) => {
    if (currentPath.includes("nagradi")) {
      return `/nagradi/${image}`;
    }
    return `/${image}`;
  };

  return (
    <>
      <p className="text-2xl md:text-5xl text-wine text-center my-5 font-bold">
        {title}
      </p>
      <div className="mb-10">
        <div className="flex flex-wrap justify-center text-center">
          {images.map((img: ImageProps) => (
            <div
              key={img.id}
              className="relative w-full md:w-2/4	lg:w-1/4	 h-56"
              onClick={() => handleImageClick(img.image)}
            >
              <Image
                className="object-cover w-full h-full rounded-lg cursor-pointer p-5 "
                src={getImageSrc(img.image)}
                alt="Gallery image"
                layout="fill"
                loading="lazy"
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
                  src={getImageSrc(selectedImage)}
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
