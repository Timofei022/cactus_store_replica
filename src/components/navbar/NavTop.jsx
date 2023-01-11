import React from "react";
import Dropdown from "./Dropdown";
import s from "./Navbar.module.css";
import { TELEFON } from "../../constants/navbar.constants";

const NavTop = () => {
  return (
    <div className={["col-9", s.headerTopMenu].join(" ")}>
      <a href="tel:+37360956120" className={s.headerPhone}>
        {TELEFON}
      </a>
      <Dropdown />
    </div>
  );
};

export default NavTop;
