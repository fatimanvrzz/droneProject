import "./header.scss";
import { BiSearchAlt } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [headerBackgroundColorStyle, setHeaderBackgroundColorStyle] = useState("rgba(147, 197, 253, 0)");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
      setHeaderBackgroundColorStyle("rgba(147, 197, 253, 255)");
    } else {
      setHeaderBackgroundColorStyle("rgba(147, 197, 253, 0)");
    }
  };


  return (
    <div
      className="w-screen fixed z-[100]
     transition-all duration-150 flex flex-row items-center justify-around h-16 gap-36 text-white px-20"
     style={{
      backgroundColor: headerBackgroundColorStyle
     }}
    >
      <div className="">
        <img
          src="https://elomus-theme.myshopify.com/cdn/shop/files/logo-elomus.png?v=1613722537"
          alt=""
          className="h-6 aspect-auto"
        />
      </div>
      <div className="flex gap-8 text-white">
        {linkToPage("/", "Home")}
        {linkToPage("/", "Shop")}
        {linkToPage("/", "Top Products")}
        {linkToPage("/", "Product Pages")}
        {linkToPage("/", "Product Pages")}
      </div>
      <div className="flex flex-row items-center gap-2">
        <BiSearchAlt className="h-5 w-5" />
        <BsBasket2 className="h-5 w-5" />
        <TbSettings className="h-5 w-5" />
        <AiOutlineGlobal className="h-5 w-5" />
      </div>
    </div>
  );
}

function linkToPage(link, text) {
  return (
    <a
      href={link}
      className="w-fit flex flex-row items-center justify-center gap-2 border rounded-full px-5 py-2"
    >
      {text}
      <FaChevronDown size={"0.7rem"} />
    </a>
  );
}

export default Header;
