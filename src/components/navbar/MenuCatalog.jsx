import React from "react";
import s from "./Navbar.module.css";
import "../../index.css";
import { menuList } from "../../constants/navbar.constants";

const MenuCatalog = () => {
  return (
    <div className="col-sm-8 header__second__menu">
      <div id="vue-catalog-menu" className={s.menuCatalog}>
        <ul id="catalog-menu_static" className={s.menuCatalogStatic}>
          {menuList.map((item) => (
            <li className={s.MenuCatalogItem} key={item.name}>
              <a
                itemProp={item.itemProp}
                href={item.href}
                data-id="600"
                className="menu-catalog__link"
              >
                <span itemProp="name" className="menu-catalog__text">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuCatalog;
