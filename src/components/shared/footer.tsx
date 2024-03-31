import React from "react";
import FooterData from "@/data/footer/footerData.json";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] p-20 pb-5">
      <div className=" grid grid-cols-6">
        {FooterData.map((item, indx) => (
          <div key={indx}>
            <span className=" font-semibold">{item.title}</span>
            <div className="flex flex-col mt-3">
              {item.submenu.map((item, indx) => (
                <Link
                  className=" text-[#999] mt-2 hover:text-white transition duration-200"
                  href={item.href}
                  key={indx}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <span>Connect With Us</span>
          <div className="mt-3 flex items-center gap-2">
            <Link
              className=" bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] p-3 transition duration-200 rounded-md"
              target="_blank"
              href={"https://t.me/khayrullayev_coder"}
            >
              <FaTelegram />
            </Link>
            <Link
              className=" bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] p-3 transition duration-200 rounded-md"
              target="_blank"
              href={"https://instagram.com/ogabek.khayrullayev"}
            >
              <FaInstagram />
            </Link>
            <Link
              className=" bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] p-3 transition duration-200 rounded-md"
              href={"https://youtube.com/@xayrullayev_ogabek"}
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-20 text-sm border-t border-[#262626] pt-5">
        <p className=" text-[#999]">
          &copy; 2023 KH movies, All Rights Reserved
        </p>
        <div className=" flex items-center gap-5 text-[#999] ">
          <span>Terms of Use</span>
          <span className=" border-l border-r px-3 border-[#262626]">
            Privacy Policy
          </span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
