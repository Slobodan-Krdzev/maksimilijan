"use client";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Success handling
      alert("Вашата порака е испратена!");
    } else {
      // Error handling
      alert("Грешка при испраќање на пораката.");
    }
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="h-screen bg-wine">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <h1 className="text-cream text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
            Нарачај!
          </h1>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="my-2 py-2 px-4 rounded-md bg-wine text-cream w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600 border"
                  placeholder="Име"
                />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="my-2 py-2 px-4 rounded-md bg-wine text-cream w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600 border"
                  placeholder="Email"
                />
              </div>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="my-2 py-2 px-4 rounded-md bg-wine text-cream w-full outline-none focus:ring-2 focus:ring-blue-600 border"
              />
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Вашата порака/нарачка"
                className="my-2 py-2 px-4 rounded-md bg-wine text-cream w-full outline-none focus:ring-2 focus:ring-blue-600 border"
              ></textarea>
            </div>
            <button className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
              Испрати нарачка
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
