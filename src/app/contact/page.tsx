import React from "react";
import Map from "@/components/Map";
import Form from "@/components/Form";
import Banner from "@/components/Banner";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Контакт",
};
export default function ContactPage() {
  return (
    <>
      <Banner imageSrc="/gallery1.webp" text="Taste the Wine!" />
      <div className="flex flex-col md:flex-row p-8 md:p-24">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-wine px-4 md:px-10 mb-8 md:mb-0">
          <Form />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-10">
          <Image
            src="/gallery12.webp"
            width={1000}
            height={1000}
            alt="logo"
            className="rounded"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between md:flex-row p-5">
        <Contact />

        <Map />
      </div>
    </>
  );
}
