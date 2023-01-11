import React from "react";
import s from "./Navbar.module.css";

const Dropdown = () => {
  return (
    <ul className={["nav navbar-nav navbar-right", s.headerLang].join(" ")}>
      <li className="dropdown">
        <a
          href="##"
          className="dropdown-toggle text-uppercase"
          data-toggle="dropdown"
          role="button"
          aria-expanded="false"
        >
          ru
        </a>
        <ul className={s.dropdownMenu}>
          <li>
            <span>
              <b>Русский</b>
            </span>
          </li>

          <li>
            <span>
              <a href="/ro/">Romanian</a>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
