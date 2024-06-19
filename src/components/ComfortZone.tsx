import { ComfortZoneProps } from "@/interface/type";
import React from "react";

export const ComfortZone = ({ comfort, desc }: ComfortZoneProps) => {
  return (
    <div className="flex items-center space-x-2 px-5 mb-4 md:mb-0">
      <span className="text-2xl">{comfort}</span>
      <span className="text-2xl">{desc}</span>
    </div>
  );
};
