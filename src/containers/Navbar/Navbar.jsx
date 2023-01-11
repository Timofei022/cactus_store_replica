import React from "react";
import NavbarLogo from "../../components/Navbar/NavbarLogo";
import NavTop from "../../components/Navbar/NavTop";
import Cart from "../../components/Cart/Cart";
import MenuCatalog from "../../components/Navbar/MenuCatalog";
import s from "../../components/Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className={["row", s.headerTop].join(" ")}>
        <NavbarLogo />
        <NavTop />
        <hr className={s.headerTopLine} />
      </div>
      <div className={["row", s.headerSecond].join(" ")}>
        <div className="col"></div>
        <MenuCatalog />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
