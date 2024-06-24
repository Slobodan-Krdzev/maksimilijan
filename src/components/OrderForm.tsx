"use client";
import React, { useEffect, useState } from "react";
import { getCart } from "@/utils/localStorage";
import { CartItem } from "@/interface/type";
import Image from "next/image";
import Modal from "@/components/Modal";
import { InputPayment } from "@/components/InputPayment";
import emailjs from "emailjs-com";

export const OrderForm = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [isValidExpiration, setIsValidExpiration] = useState(true);
  const [isValidCVV, setIsValidCVV] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    town: "",
    postcode: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_ttl6f7p",
        "template_mu0a5r4",
        {
          ...formData,
          to_email: "denitrajkov23@yahoo.com",
          to_name: "Ивица",
          from_firstName: formData.firstName,
          from_lastName: formData.lastName,
          from_number: formData.phone,
          from_town: formData.town,
          from_street: formData.street,
          from_postcode: formData.postcode,
          from_country: formData.country,
          from_email: formData.email,
          cartItems: cartItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity!,
          })),
          subtotal: subtotal,
          delivery: subtotal > 2000 ? "Бесплатна достава" : "120 ден",
          total: subtotal + (subtotal > 2000 ? 0 : 120),
        },
        "k7L6BS57GgSOHzd4O"
      );

      console.log("Email successfully sent!", response.status, response.text);
      alert("Вашата порака е испратена!");
    } catch (error) {
      console.error("Грешка при испраќање на пораката:", error);
      alert("Грешка при испраќање на пораката.");
    }
    setFormData({
      firstName: "",
      lastName: "",
      country: "",
      street: "",
      town: "",
      email: "",
      postcode: "",
      phone: "",
      message: "",
    });
  };

  useEffect(() => {
    const items = getCart();
    if (items) {
      setCartItems(items);
      updateSubtotal(items);
    }
  }, []);

  const updateSubtotal = (items: CartItem[]) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity!,
      0
    );
    setSubtotal(total);
  };

  return (
    <div className="p-5 lg:flex lg:justify-between border-t">
      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold mb-5">Детали за плаќање</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <InputPayment
              id="firstName"
              placeholder="First Name*"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputPayment
              id="lastName"
              placeholder="Last Name*"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputPayment
              id="country"
              placeholder="Country / Region *"
              type="text"
              value={formData.country}
              onChange={handleChange}
            />
            <InputPayment
              id="street"
              placeholder="Street address *"
              type="text"
              value={formData.street}
              onChange={handleChange}
            />
            <InputPayment
              id="town"
              placeholder="Town / City *"
              type="text"
              value={formData.town}
              onChange={handleChange}
            />
            <InputPayment
              id="postcode"
              placeholder="Postcode / ZIP *"
              type="text"
              value={formData.postcode}
              onChange={handleChange}
            />
            <InputPayment
              id="phone"
              placeholder="Phone *"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputPayment
              id="email"
              placeholder="Email address *"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            id="message"
            placeholder="Order notes (optional)"
            className="border p-2 w-full"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 mt-3"
          >
            НАРАЧАЈ
          </button>
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
        </div>
      </div>
    </div>
  );
};
