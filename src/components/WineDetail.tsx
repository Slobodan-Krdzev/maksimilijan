"use client";
import { CartItem, WineDetailProps } from "@/interface/type";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import { WineDesc } from "./WineDesc";
import { addToCart } from "@/utils/localStorage";
import { Dialog, Transition } from "@headlessui/react";

export default function WineDetail({
  image,
  name,
  color,
  vintage,
  alchocol,
  description,
  price,
}: WineDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleAddToCart = () => {
    const product: CartItem = {
      image,
      name,
      color,
      vintage,
      alchocol,
      description,
      price,
    };
    addToCart(product);
    openModal();
  };
  console.log(description);
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center text-wine p-5 lg:p-10">
      <div className="lg:w-1/3 lg:text-start mb-5 lg:mb-0">
        <p className="text-3xl lg:text-5xl font-bold mb-5">{name}</p>
        <p className="text-lg lg:text-2xl">{description}</p>
      </div>
      <div className="lg:w-1/3 w-full lg:px-5">
        <div className="relative overflow-hidden rounded-lg lg:h-auto">
          <Image
            src={image}
            alt={name}
            width={800}
            height={1000}
            layout="responsive"
            className="object-cover lg:object-contain "
            style={{ maxHeight: 500 }}
          />
        </div>
      </div>
      <div className="lg:w-1/3 lg:pl-10 grid grid-cols-2 lg:flex lg:flex-col">
        <WineDesc desc="Берба" result={vintage} />
        <WineDesc desc="Созревање" result="Барик" />
        <WineDesc desc="Алкохол" result={alchocol} />
        <WineDesc desc="Боја" result={color} />

        <button
          className="border px-6 py-3 md:px-4 md:py-2 border-wine text-lg md:text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
          onClick={handleAddToCart}
        >
          додади во 🛒
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
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
                    Продуктот е додаден во кошничката!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-wine">
                      <b>{name}</b> е успешно додаден во вашата кошничка.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cream px-4 py-2 text-sm font-medium text-wine hover:bg-cream-200 focus:outline-none focus-visible:ring-2 f"
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
    </section>
  );
}
