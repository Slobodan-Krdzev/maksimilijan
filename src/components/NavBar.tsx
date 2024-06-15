"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const currentPath = usePathname();

  return (
    <div>
      <nav className="z-10 mb-3">
        <div className="justify-between md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo_white.jpg"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out ${
                    currentPath === "/" ? "active" : ""
                  }`}
                >
                  <Link href="/" className="underline-hover-effect">
                    Почетна
                  </Link>
                </li>
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out ${
                    currentPath === "/aboutus" ? "active" : ""
                  }`}
                >
                  <Link href="/aboutus" className="underline-hover-effect">
                    За нас
                  </Link>
                </li>
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out  ${
                    currentPath === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="underline-hover-effect">
                    Производи
                  </Link>
                </li>
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out ${
                    currentPath === "/nagradi" ? "active" : ""
                  }`}
                >
                  <Link href="/nagradi" className="underline-hover-effect">
                    Награди
                  </Link>
                </li>
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out ${
                    currentPath === "/smestuvanje" ? "active" : ""
                  }`}
                >
                  <Link href="/smestuvanje" className="underline-hover-effect">
                    Сместување
                  </Link>
                </li>
                <li
                  className={`text-xl py-2 mx-1 md:px-6 text-center text-wine md:border-b-0 transition-colors duration-700 ease-in-out ${
                    currentPath === "/contact" ? "active" : ""
                  }`}
                >
                  <Link href="/contact" className="underline-hover-effect">
                    Контакт
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href={"/addtocart"}>Cart </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
