import React, { useState } from 'react';
import style from "./style.module.css"
console.log(style);

const Hamburger = () => {

    const [burgerClick, setBurgerClick] = useState(false)
    
    return (
        <div>
            <div onClick={() => setBurgerClick(!burgerClick)} 
                 className={burgerClick 
                    ? [style.btn, style.active].join(' ') 
                    : [style.btn]}
                >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Hamburger;