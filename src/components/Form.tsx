"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

export default function Form() {
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberPeople: "",
  });

  const handleChange = (e: any) => {
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
      from_firstName: formData.name,
      from_lastName: formData.email,
      from_number: formData.phone,
      from_town: formData.numberPeople,
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
      name: "",
      email: "",
      phone: "",
      numberPeople: "",
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-5">
      <div className="bg-cream">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold text-center text-wine">
            Резервирај Дегустација
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-wine sm:text-xl">
            Пополнете ги податоците за Вас и Вашата нарачка. Нашиот тим ќе ве
            исконтактира веднаш со цел да се потврди нарачката. Taste the Wine!
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-wine">
                Вашиот email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm text-wine border border-wine text-sm rounded-lg focus:ring-wine1 block w-full p-2.5 dark:placeholder-wine1 dark:text-wine dark:focus:border-wine1"
                placeholder="name@flowbite.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Вашето име
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm text-wine border border-wine text-sm rounded-lg focus:ring-wine1 block w-full p-2.5 dark:placeholder-wine1 dark:text-wine dark:focus:border-wine1"
                placeholder="Вашето име"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Вашиот телефонски број
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow-sm text-wine border border-wine text-sm rounded-lg focus:ring-wine1 block w-full p-2.5 dark:placeholder-wine1 dark:text-wine dark:focus:border-wine1"
                placeholder="070123567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Број на луѓе
              </label>
              <input
                type="number"
                id="numberPeople"
                className="shadow-sm text-wine border border-wine text-sm rounded-lg focus:ring-wine1 block w-full p-2.5 dark:placeholder-wine1 dark:text-wine dark:focus:border-wine1"
                placeholder="4"
                value={formData.numberPeople}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="border px-8 py-5 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out block w-full"
            >
              Резервирај Дегустација
            </button>
          </form>
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
    </div>
  );
}
