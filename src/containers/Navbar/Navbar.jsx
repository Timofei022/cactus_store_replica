import React from "react";
import NavbarLogo from "../../components/Navbar/NavbarLogo";
import NavTop from "../../components/Navbar/NavTop";
import Cart from "../../components/Cart/Cart";
import MenuCatalog from "../../components/Navbar/MenuCatalog";

const Navbar = () => {
  return (
    <div className="">
      <div>
        <NavbarLogo />
        <NavTop />
        <hr/>
      </div>
      <div >
        <div className="col"></div>
        <MenuCatalog />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
