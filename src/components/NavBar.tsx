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
        <div className="md:flex md:items-center md:justify-between md:px-8">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <Image
                src="/logo_white.jpg"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="close menu" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="open menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-between md:items-center">
            <div className="flex-1 text-wine bg-cream md:bg-white transition-all duration-700 ease-in-out">
              <ul className="flex justify-center items-center">
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
            <div className="ml-auto">
              <Link
                href={"/addtocart"}
                className={`text-xl py-2 mx-1 md:px-6 text-center md:border-b-0 transition-colors duration-700 ease-in-out `}
              >
                🛒
              </Link>
            </div>
          </div>
          <div className={`md:hidden ${navbar ? 'block' : 'hidden'}`}>
            <div className="flex-1 text-wine bg-cream transition-all duration-700 ease-in-out">
              <ul className="flex flex-col items-center justify-center">
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
