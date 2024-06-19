import React from "react";
import Map from "@/components/Map";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import Form from "@/components/Form";
import Banner from "@/components/Banner";
export default function Contact() {
  return (
    <>
      <Banner imageSrc="/vizba.jpg" text="Taste the Wine!" />
      <Form />
      <div className="flex flex-col justify-between md:flex-row p-5">
        <div className="w-full mb-5 sm:mb-0 bg-wine text-cream p-10 mr-2">
          <p className="text-2xl md:text-5xl">Контакт</p>
          <div className="py-5 text-2xl">
            <p>Maksimilihan Famili Winery</p>
            <p>с. Пепелиште</p>
            <p>Неготино 1440</p>
          </div>

          <div className="py-5 text-2xl">
            <span className="my-1 flex items-center">
              <IoMail />
              <p>ivizlc@yahoo.com</p>
            </span>
            <span className="my-1 flex items-center">
              <IoCall />
              <p>+389 71 261 335</p>
            </span>
          </div>

          <div className="py-5 flex">
            <span className="text-2xl md:text-5xl">
              <a
                href="https://www.facebook.com/profile.php?id=100064194423358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaFacebook />
              </a>
            </span>
            <span className="text-2xl md:text-5xl">
              <a
                href="https://www.instagram.com/maksimilijan.family.winery/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
        <div className="w-full">
          <Map />
        </div>
      </div>
    </>
  );
}
