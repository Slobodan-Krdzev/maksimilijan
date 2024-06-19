import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "@/fetchData";
import { usePathname } from "next/navigation";
import { GalleryListingProps, ImageProps } from "@/interface/type";
import ImageModal from "./ImageModal";

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
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};
