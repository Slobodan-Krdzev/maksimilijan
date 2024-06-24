"use client";
import React, { useEffect, useState } from "react";
import { getCart } from "@/utils/localStorage";
import { CartItem } from "@/interface/type";
import Image from "next/image";
import Modal from "@/components/Modal";
import { InputPayment } from "@/components/InputPayment";

export const OrderForm = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [cardNumber, setCardNumber] = useState("");
  // const [expiration, setExpiration] = useState("");
  // const [cvv, setCVV] = useState("");
  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [isValidExpiration, setIsValidExpiration] = useState(true);
  const [isValidCVV, setIsValidCVV] = useState(true);

  useEffect(() => {
    const items = getCart();
    setCartItems(items);
    updateSubtotal(items);
  }, []);

  const updateSubtotal = (items: CartItem[]) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity!,
      0
    );
    setSubtotal(total);
  };

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  // const validateCardNumber = () => {
  //   setIsValidCardNumber(/^\d{16}$/.test(cardNumber.trim()));
  // };

  // const validateExpiration = () => {
  //   setIsValidExpiration(/^\d{2}\/\d{2}$/.test(expiration.trim()));
  // };

  // const validateCVV = () => {
  //   setIsValidCVV(/^\d{3}$/.test(cvv.trim()));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   validateCardNumber();
  //   validateExpiration();
  //   validateCVV();

  //   if (isValidCardNumber && isValidExpiration && isValidCVV) {
  //     console.log("Плаќањето е потврдено.");
  //     setIsModalOpen(false);
  //   } else {
  //     console.log("Пополнете ги точно сите полиња.");
  //   }
  // };

  return (
    <div className="p-5 lg:flex lg:justify-between border-t">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold mb-5">Детали за плаќање</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <InputPayment placeholder="First Name*" type="text" />
            <InputPayment placeholder="Last Name*" type="text" />
            <InputPayment placeholder="Country / Region *" type="text" />
            <InputPayment placeholder="Street address *" type="text" />
            <InputPayment placeholder="Town / City *" type="text" />
            <InputPayment placeholder="Postcode / ZIP *" type="text" />
            <InputPayment placeholder="Phone *" type="tel" />
            <InputPayment placeholder="Email address *" type="email" />
          </div>

          <textarea
            placeholder="Order notes (optional)"
            className="border p-2 w-full"
          ></textarea>
        </form>
      </div>
      <div className="lg:w-1/3 lg:ml-5 mt-5 lg:mt-0">
        <h2 className="text-2xl font-bold mb-2">Вашата нарачка</h2>
        <div className="border p-5 space-y-2">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <span className="ml-2">
                  {item.name} {item.liter}
                </span>
              </div>
              <span>
                Количина: {item.quantity} - {item.price * item.quantity!} ден
              </span>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <span>Вкупно</span>
            <span>{subtotal} ден</span>
          </div>
          <div className="flex justify-between">
            <span>Достава</span>
            <span>
              {subtotal > 2000
                ? "Бесплатна достава на нарачка над 2000 ден"
                : "120 ден"}
            </span>
          </div>
          <div className="flex justify-between font-bold">
            <span>ВКУПНО</span>
            <span>{subtotal + (subtotal > 2000 ? 0 : 120)} ден</span>
          </div>
        </div>
        <div className="mt-5">
          <label className="flex items-center">
            <input type="radio" name="paymentMethod" className="mr-2" checked />
            Плаќање со кредитна картичка
          </label>

          <button
            className="w-full bg-red-500 text-white py-2 mt-3"
            onClick={handleOrder}
          >
            НАРАЧАЈ
          </button>
        </div>
      </div>

      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Внесете податоци за плаќање</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ex. 1234 1234 1234 1234"
            className={`border p-2 w-full ${
              !isValidCardNumber && "border-red-500"
            }`}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            onBlur={validateCardNumber}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Форамт (MM/YY)"
              className={`border p-2 w-full ${
                !isValidExpiration && "border-red-500"
              }`}
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              onBlur={validateExpiration}
              required
            />

            <input
              type="text"
              placeholder="CVV"
              className={`border p-2 w-full ${!isValidCVV && "border-red-500"}`}
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              onBlur={validateCVV}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 mt-3 rounded"
          >
            Потврди плаќање
          </button>
        </form>
      </Modal> */}
    </div>
  );
};
