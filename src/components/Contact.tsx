import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

export const Contact = () => {
  return (
    <div className="lg:w-1/2 bg-wine text-cream p-10 mr-2">
      <p className="text-5xl">Контакт</p>
      <div className="py-5 text-xl md:text-2xl">
        <p>Maksimilijan Family Winery</p>
        <p>с. Пепелиште</p>
        <p>Неготино 1440</p>
      </div>

      <div className="py-5 text-xl md:text-2xl">
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
        <span className="text-5xl">
          <a
            href="https://www.facebook.com/profile.php?id=100064194423358"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebook />
          </a>
        </span>
        <span className="mx-2 text-5xl">
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
  );
};
