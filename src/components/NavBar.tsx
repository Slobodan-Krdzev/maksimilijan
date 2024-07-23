"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavItem from "./NavItem";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const currentPath = usePathname();

  return (
    <div>
      <nav className="z-10">
        <div className="justify-between md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href="/">
                <Image
                  src="/logo_white.jpg"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <div>
                <Link
                  href={"/addtocart"}
                  className={`text-xl py-2 mx-1 md:px-6 text-center md:border-b-0 transition-colors duration-700 ease-in-out`}
                >
                  🛒
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
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
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-cream md:bg-white transition-transform duration-700 ease-in-out transform ${
              navbar ? "translate-x-0" : "translate-x-full"
            } md:relative md:translate-x-0 md:flex md:w-auto md:h-auto`}
          >
            <div className="flex-1 justify-self-center text-wine md:block md:pb-0 md:mt-0">
              <ul className="items-center justify-center md:flex">
                <NavItem
                  href={"/"}
                  label={"Почетна"}
                  isActive={currentPath === "/"}
                />
                <NavItem
                  href={"/aboutus"}
                  label={"За нас"}
                  isActive={currentPath === "/aboutus"}
                />
                <NavItem
                  href={"/products"}
                  label={"Производи"}
                  isActive={currentPath === "/products"}
                />
                <NavItem
                  href={"/nagradi"}
                  label={"Награди"}
                  isActive={currentPath === "/nagradi"}
                />
                <NavItem
                  href={"/smestuvanje"}
                  label={"Сместување"}
                  isActive={currentPath === "/smestuvanje"}
                />
                <NavItem
                  href={"/contact"}
                  label={"Контакт"}
                  isActive={currentPath === "/contact"}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
