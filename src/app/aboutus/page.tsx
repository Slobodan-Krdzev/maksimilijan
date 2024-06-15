import React from "react";

import Banner from "@/components/Banner";
import AboutSection from "@/components/AboutSection";
import { Gallery } from "@/components/Gallery";

export default function AboutUs() {
  return (
    <>
      <Banner imageSrc="/outdoor.jpg" text="За нас" />
      <AboutSection reverse={false} image="/bottles.jpg" />
      <Gallery />
    </>
  );
}
