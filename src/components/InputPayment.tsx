import React from "react";

export interface InputPaymentProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPayment = ({
  id,
  type,
  placeholder,
  value,
  onChange,
}: InputPaymentProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="border p-2 w-full"
      value={value}
      onChange={onChange}
      required
    />
  );
};
