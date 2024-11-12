"use client";
import React, { useEffect, useState, Fragment } from "react";
import { getCart } from "@/utils/localStorage";
import { CartItem } from "@/interface/type";
import Image from "next/image";
import { InputPayment } from "@/components/InputPayment";
import { Dialog, Transition } from "@headlessui/react";
import InputLabel from "./InputLabel";

export const OrderForm = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

    const data = {
      ...formData,
      to_email: "denitrajkov@yahoo.com",
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
    };

    try {
      const response = await fetch("https://formspree.io/f/xanwnvrv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalMessage("Вашата порака е испратена!");
        openModal();
      } else {
        setModalMessage("Грешка при испраќање на пораката.");
        openModal();
      }
    } catch (error) {
      setModalMessage("Грешка при испраќање на пораката.");
      openModal();
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-5 lg:flex lg:justify-between border-t">
      <div className="lg:w-2/3 bg-cream">
        <h2 className="text-2xl font-bold mb-5">Детали за нарачка</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <InputLabel
              id="firstName"
              name="Име*"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputLabel
              id="lastName"
              name="Презиме*"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputLabel
              id="country"
              name="Држава*"
              type="text"
              value={formData.country}
              onChange={handleChange}
            />
            <InputLabel
              id="street"
              name="Адреса на живеење*"
              type="text"
              value={formData.street}
              onChange={handleChange}
            />
            <InputLabel
              id="town"
              name="Град*"
              type="text"
              value={formData.town}
              onChange={handleChange}
            />
            <InputLabel
              id="postcode"
              name="Поштенски број*"
              type="text"
              value={formData.postcode}
              onChange={handleChange}
            />
            <InputLabel
              id="phone"
              name="Телефон за контакт *"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputLabel
              id="email"
              name="Емаил *"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            id="message"
            placeholder="Порака "
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
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Известување
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{modalMessage}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Затвори
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
