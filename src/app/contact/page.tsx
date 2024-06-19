import React from "react";
import Map from "@/components/Map";
import Form from "@/components/Form";
import Banner from "@/components/Banner";
import { Contact } from "@/components/Contact";
export default function ContactPage() {
  return (
    <>
      <Banner imageSrc="/vizba.jpg" text="Taste the Wine!" />
      <Form />
      <div className="flex flex-col justify-between md:flex-row p-5">
        <Contact />

        <Map />
      </div>
    </>
  );
}
