"use client";
import Banner from "@/components/Banner";
import { GalleryListing } from "@/components/GalleryListing";
import React from "react";

export default function Gallery() {
  return (
    <>
      <Banner imageSrc="/outdoor.jpg" text="Галерија" />
      <GalleryListing />
    </>
  );
}
