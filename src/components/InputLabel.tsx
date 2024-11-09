import React from "react";

export interface Props {
  value: string;
  name: string;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLabel = ({ id, name, onChange, type, value }: Props) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`peer shadow-sm text-wine border border-wine text-sm rounded-lg 
                 focus:ring-wine1 focus:border-wine block w-full p-2.5 
                 dark:placeholder-transparent dark:text-wine`}
        required
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`absolute left-2.5 top-2.5 text-sm text-wine 
                 transition-all duration-300 transform origin-[0] bg-white px-1 
                 peer-focus:bg-cream peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:left-2.5
                 ${value ? "-translate-y-5 scale-75 left-2.5" : "scale-100"}`}
        style={{ zIndex: 10 }}
      >
        {name}
      </label>
    </div>
  );
};

export default InputLabel;
