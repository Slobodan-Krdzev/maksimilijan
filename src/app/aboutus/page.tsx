import React from "react";

export const metadata: Metadata = {
  title: "За нас",
};

import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import { Gallery } from "@/components/Gallery";
import { Metadata } from "next";

export default function AboutUs() {
  return (
    <>
      <Banner imageSrc="/gallery12.webp" text="За нас" />
      <AboutSection reverse={false} image="/gallery14.webp" />
      <Gallery />
    </>
  );
}
