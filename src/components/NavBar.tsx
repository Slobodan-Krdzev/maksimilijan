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
      <nav className="z-10 ">
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
          <div>
            <div
              className={`flex-1 justify-self-center text-wine md:block md:pb-0 md:mt-0 bg-cream md:bg-white transition-all duration-700 ease-in-out ${
                navbar
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0 md:opacity-100 md:max-h-screen"
              }`}
            >
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
