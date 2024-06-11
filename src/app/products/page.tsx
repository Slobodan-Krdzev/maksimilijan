"use client";

import WinesListing from "@/components/WinesListing";

export default function Products() {
  return (
    <>
      <div className=" mx-auto w-72 my-5">
        <p className="bg-wine text-white text-center text-3xl p-4 rounded">
          Maksimilijan Family Winery
        </p>
      </div>
      <WinesListing />
    </>
  );
}
