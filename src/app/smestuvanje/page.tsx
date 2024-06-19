import { AppartmentsList } from "@/components/AppartmentsList";
import Banner from "@/components/Banner";
import React from "react";

export default function page() {
  return (
    <>
      <Banner imageSrc="/accomodation.jpg" text="НАШИТЕ СОБИ" />
      <AppartmentsList />
    </>
  );
}
