"use client";
import Banner from "@/components/Banner";
import { GalleryListing } from "@/components/GalleryListing";
import React from "react";

export default function Nagradi() {
  return (
    <>
      <Banner imageSrc="/outdoor.jpg" text="Награди" />
      <GalleryListing endpoint="awards" title="НАГРАДИ" />
    </>
  );
}
