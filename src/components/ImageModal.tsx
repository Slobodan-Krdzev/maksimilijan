import React from "react";
import Image from "next/image";
import { ImageModalProps } from "@/interface/type";

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 m-4 p-2 font-bold text-wine bg-cream"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-4">
          <Image
            src={`/${image}`}
            alt="Selected image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
