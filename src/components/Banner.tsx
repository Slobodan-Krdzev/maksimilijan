"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BannerProps {
  imageSrc: string;
  text: string;
}
const Banner: React.FC<BannerProps> = ({ imageSrc, text }) => {
  const currentPath = usePathname();
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`relative  ${currentPath === "/" ? "h-screen " : "min-h-96"}`}
    >
      <div className="absolute inset-0">
        <Image
          className="opacity-80"
          src={imageSrc}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div
        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${
          isTextVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-7xl font-bold text-white">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
