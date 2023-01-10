import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavTop from './NavTop';
import Cart from './Cart';
import MenuCatalog from './MenuCatalog';
import s from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className='container'>
            <div className={["row", s.headerTop].join(' ')}>
                <NavbarLogo/>
                <NavTop/>
                <hr className={s.headerTopLine}/>
            </div>
            <div className={["row", s.headerSecond].join(' ')}>
                <div className="col"></div>
                <MenuCatalog />
                <Cart/>
            </div>
        </div>
    );
};

export default Navbar;