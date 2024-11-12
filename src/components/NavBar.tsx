"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavItem from "./NavItem";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const currentPath = usePathname();

  const handleLinkClick = () => {
    setNavbar(false);
  };

  return (
    <div>
      <nav className="z-10">
        <div className="justify-between md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link href="/">
                <Image
                  src="/logo_white.webp"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>

              {/* Icon for mobile version*/}
              <div className="md:hidden mx-4">
                <Link href="/addtocart" className="text-xl text-center">
                  🛒
                </Link>
              </div>

              {/* Hamburger menu */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="/close.svg"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`flex-1 justify-self-center text-wine md:block md:pb-0 md:mt-0 transition-all duration-700 ease-in-out  ${
              navbar
                ? "bg-cream max-h-screen opacity-100 w-full"
                : "max-h-0 opacity-0 md:opacity-100 md:max-h-screen"
            }`}
          >
            <ul className="items-center justify-center md:flex">
              <NavItem
                href="/"
                label="Почетна"
                isActive={currentPath === "/"}
                onClick={handleLinkClick}
              />
              <NavItem
                href="/aboutus"
                label="За нас"
                isActive={currentPath === "/aboutus"}
                onClick={handleLinkClick}
              />
              <NavItem
                href="/products"
                label="Производи"
                isActive={currentPath === "/products"}
                onClick={handleLinkClick}
              />
              <NavItem
                href="/nagradi"
                label="Награди"
                isActive={currentPath === "/nagradi"}
                onClick={handleLinkClick}
              />
              <NavItem
                href="/smestuvanje"
                label="Сместување"
                isActive={currentPath === "/smestuvanje"}
                onClick={handleLinkClick}
              />
              <NavItem
                href="/contact"
                label="Контакт"
                isActive={currentPath === "/contact"}
                onClick={handleLinkClick}
              />
            </ul>
          </div>

          <div className="hidden md:block">
            <Link
              href="/addtocart"
              className="text-xl py-2 mx-1 md:px-6 text-center md:border-b-0 transition-colors duration-700 ease-in-out"
            >
              🛒
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
