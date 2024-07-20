import "./header.scss";
import { BiSearchAlt } from "react-icons/bi";
import { BsBasket2 } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">Elomus</div>
        <div className="links">
          {linkToPage("/", "Home")}
          {linkToPage("/", "Shop")}
          {linkToPage("/", "Top Products")}
          {linkToPage("/", "Product Pages")}
          {linkToPage("/", "Pages / Layouts")}
        </div>
        <div className="container">
          <BiSearchAlt />
          <BsBasket2 />
          <TbSettings />
          <AiOutlineGlobal />
        </div>
      </div>
    </div>
  );
}

function linkToPage(link, text) {
  return (
    <a href={link}>
      {text}
      <FaChevronDown size={"0.7rem"} />
    </a>
  );
}

export default Header;
