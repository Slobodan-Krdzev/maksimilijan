import React from "react";
export interface InputPaymentProps {
  type: string;
  placeholder: string;
}

export const InputPayment = ({ type, placeholder }: InputPaymentProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border p-2 w-full"
      required
    />
  );
};
