import React from "react";
import Map from "@/components/Map";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import Form from "@/components/Form";
export default function Contact() {
  return (
    <>
      <Form />
      <div className="flex p-5 text-center justify-center items-center text-wine font-bold background-image">
        <div className="w-1/2 bg-cream rounded">
          <p className="text-2xl font-bold ">Контакт</p>
          <ul className="flex flex-col items-center ">
            <li className="my-1">
              <a
                href="https://www.facebook.com/profile.php?id=100064194423358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaFacebook />
                <span className="ml-2">Maksimilijan Wine Room</span>
              </a>
            </li>
            <li className="my-1">
              <a
                href="https://www.instagram.com/maksimilijan.family.winery/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaInstagram />
                <span className="ml-2">Maksimilijan Wine Room</span>
              </a>
            </li>
            <li className="my-1 flex items-center">
              <IoMail />
              <p>ivizlc@yahoo.com</p>
            </li>
            <li className="flex items-center">
              <IoCall />
              <p>+389 71 261 335</p>
            </li>
          </ul>
        </div>
        <div className="w-1/2 p-5">
          <Map />
        </div>
      </div>
    </>
  );
}
