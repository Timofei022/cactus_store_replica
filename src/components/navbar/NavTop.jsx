import React from 'react';
import Dropdown from './Dropdown';
import s from "./Navbar.module.css"

const NavTop = () => {
    return (
        <div className={['col-9', s.headerTopMenu].join(' ')}>
            <a href="tel:+37360956120" className={s.headerPhone}>060-956-120</a>
            <Dropdown/>
        </div>
    );
};

export default NavTop;