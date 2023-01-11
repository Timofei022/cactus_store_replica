import React from "react";
import logo from "../../assets/logo.png";
import s from "./Navbar.module.css";

const NavbarLogo = () => {
  function join(arr) {
    return arr.join(" ");
  }

  return (
    <div className={join(["col-sm-3", s.headerTopLogo])}>
      <span className="navbar-brand header__logo">
        <img src={logo} alt="cactus" className="header__logo_img" />
        <span className={s.headerLogoText}>CACTUS</span>
      </span>
    </div>
  );
};

export default NavbarLogo;
