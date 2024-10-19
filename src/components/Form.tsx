"use client";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
          <form className="space-y-8">
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
                id="phone"
                className="shadow-sm text-wine border border-wine text-sm rounded-lg focus:ring-wine1 block w-full p-2.5 dark:placeholder-wine1 dark:text-wine dark:focus:border-wine1"
                placeholder="4"
                value={formData.message}
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
      </div>
    </div>
  );
}
