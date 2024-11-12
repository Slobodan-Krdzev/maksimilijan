"use client";
import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";
import React from "react";

export default function Products() {
  return (
    <>
      <Banner imageSrc="/gallery11.webp" text="Нашите вина" />

      <WinesListing />
    </>
  );
}
