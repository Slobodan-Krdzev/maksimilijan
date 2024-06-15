"use client";

import Banner from "@/components/Banner";
import WinesListing from "@/components/WinesListing";

export default function Products() {
  return (
    <>
      <Banner imageSrc="/vineyard-hills.jpg" text="Нашите вина" />

      <WinesListing />
    </>
  );
}
