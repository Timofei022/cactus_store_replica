import React from 'react';
import s from "./Navbar.module.css"
import MenuCatalog from './MenuCatalog';

const NavSecond = () => {
    return (
        <div className={["row", s.headerSecond].join(' ')}>
            <MenuCatalog/>
        </div>
    );
};

export default NavSecond;