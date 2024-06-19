import { WineDescriptionProps } from "@/interface/type";
import React from "react";

export const WineDesc = ({ desc, result }: WineDescriptionProps) => {
  return (
    <div className="mb-3 px-5">
      <p className="text-xl lg:text-3xl font-bold">{desc}</p>
      <p className="text-lg lg:text-xl">{result}</p>
    </div>
  );
};
