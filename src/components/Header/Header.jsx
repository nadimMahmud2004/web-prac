import "./Header.css";

import logo from "../../Images/logo.png";

import { BiMenuAltRight } from "react-icons/bi";

import { getMenuStyles } from "../../utils/common";

import useHeaderColor from "../../hooks/useHeaderColor";

import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const headerColor = useHeaderColor();

  return (
    <section
      className="h-wrapper"
      style={{
        background: headerColor,
      }}
    >
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <img src={logo} alt="Logo" width={100} />

        {/* Menu */}

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started </a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* For medium and small screens */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
