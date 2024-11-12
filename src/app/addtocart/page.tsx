"use client";
import React, { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateCartQuantity,
} from "@/utils/localStorage";
import { CartItem } from "@/interface/type";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

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

  const handleRemove = (name: string) => {
    removeFromCart(name);
    const updatedItems = getCart();
    setCartItems(updatedItems);
    updateSubtotal(updatedItems);
  };

  const handleQuantityChange = (name: string, quantity: number) => {
    updateCartQuantity(name, quantity);
    const updatedItems = getCart();
    setCartItems(updatedItems);
    updateSubtotal(updatedItems);
  };

  return (
    <>
      <Banner imageSrc="/gallery14.webp" text="" />
      <div className="p-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3">
            {cartItems.length === 0 ? (
              <p className="text-5xl text-center text-wine">
                Вашата картичка е празна вратете се во
                <Link href="/products" className="bg-cream">
                  производи.
                </Link>
              </p>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th>Производ</th>
                    <th>Цена</th>
                    <th>Количина</th>
                    <th>Вкупно</th>
                    <th>Избриши</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={
                        index % 2 === 0
                          ? "bg-cream text-wine"
                          : "bg-wine text-cream"
                      }
                    >
                      <td className="flex flex-col md:flex-row  md:items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <span className="ml-2">{item.name}</span>
                      </td>

                      <td>{item.price} ден</td>
                      <td>
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.name,
                                item.quantity! - 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-l"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.name,
                                parseInt(e.target.value)
                              )
                            }
                            className="w-12 text-center border-t border-b p-1"
                          />
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.name,
                                item.quantity! + 1
                              )
                            }
                            className="px-2 py-1 bg-gray-200 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item.price * item.quantity!} ден</td>
                      <td>
                        <button
                          onClick={() => handleRemove(item.name)}
                          className="text-red-500 "
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="lg:w-1/3 lg:ml-5 mt-5 lg:mt-0">
              <h2 className="text-2xl font-bold mb-2">ВКУПНО</h2>
              <div className="border p-5">
                <p className="flex justify-between mb-2">
                  <span>Вкупно денари</span>
                  <span>{subtotal} ден</span>
                </p>
                <p className="flex justify-between mb-2">
                  <span>Достава</span>
                  <span>
                    {subtotal > 2000
                      ? "Бесплатна достава на нарачка над 2000 ден"
                      : "120 ден"}
                  </span>
                </p>
                <p className="flex justify-between mb-2 font-bold">
                  <span>ВКУПНО</span>
                  <span>
                    (вклучено 18% ДДВ) {subtotal + (subtotal > 2000 ? 0 : 120)}{" "}
                    ден
                  </span>
                </p>
                <Link href={"/checkout"}>
                  <button className="w-full bg-red-500 text-white py-2 mt-3">
                    Продолжи со нарачка
                  </button>
                </Link>
                <Link
                  href="/products"
                  className="w-full block text-center bg-gray-200 text-black py-2 mt-2"
                >
                  Врати се на производи
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
