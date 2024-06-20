"use client";

import Banner from "@/components/Banner";
import { GalleryListing } from "@/components/GalleryListing";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Галерија",
};

export default function Gallery() {
  return (
    <>
      <Banner imageSrc="/outdoor.jpg" text="Галерија" />
      <GalleryListing endpoint="images" title="ГАЛЕРИЈА" />
    </>
  );
}
