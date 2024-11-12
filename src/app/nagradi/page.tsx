"use client";
import Banner from "@/components/Banner";
import { GalleryListing } from "@/components/GalleryListing";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Награди",
};

export default function Nagradi() {
  return (
    <>
      <Banner imageSrc="/gallery16.webp" text="Награди" />
      <GalleryListing endpoint="awards" title="НАГРАДИ" />
    </>
  );
}
