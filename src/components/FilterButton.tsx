import { FilterButtonProps } from "@/interface/type";
import React from "react";

const FilterButton = ({ filterType, label, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={() => onClick(filterType)}
      className="btn mr-2 mb-2 md:mr-5 md:mb-0 text-2xl md:text-3xl"
    >
      {label}
    </button>
  );
};

export default FilterButton;
