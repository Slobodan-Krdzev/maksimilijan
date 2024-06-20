"use client";
import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";
import { generateMetadata } from "@/metadata/generateMetadata";
import { Metadata } from "next";

export default function Products() {
  return (
    <>
      <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />

      <WinesListing />
    </>
  );
}
