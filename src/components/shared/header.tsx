"use client";
import React from "react";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import NavigationData from "@/data/navbar/navigations.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`flex ${
        isScrolled ? "bg-[#141414]" : ""
      } fixed z-50 top-0 w-full items-center justify-between px-16 py-3 transition-all duration-100`}
    >
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <h3>KH Movies</h3>
      </div>
      <div className="flex -ml-20 items-center bg-[#0f0f0f] py-[6px] gap-1 rounded-[12px] border-4 border-[#1f1f1f] px-[10px]">
        {NavigationData.map((item, indx) => (
          <div
            key={indx}
            className={` cursor-pointer ${
              pathname === item.href ? "bg-[#1a1a1a]" : ""
            } hover:bg-[#1a1a1a] transition duration-200 rounded-[8px] px-[24px] py-[14px]`}
          >
            <Link href={item.href}>{item.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
