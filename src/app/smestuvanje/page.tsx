import { AppartmentsList } from "@/components/AppartmentsList";
import Banner from "@/components/Banner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сместување",
};

export default function page() {
  return (
    <>
      <Banner imageSrc="/gallery19.webp" text="НАШИТЕ СОБИ" />
      <AppartmentsList />
    </>
  );
}
