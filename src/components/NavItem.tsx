import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive }) => {
  return (
    <li
      className={`text-xl py-2 mx-1 md:px-6 text-center md:border-b-0 transition-colors duration-700 ease-in-out ${
        isActive ? "active" : ""
      }`}
    >
      <Link href={href} className="underline-hover-effect">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
