import React from 'react';
import {Icon} from '@iconify/react'
import s from './Cart.module.css'

const Cart = () => {
    return (
        <div className={s.cartWrapper}>
            <div className="cartCompact">
                <button className={["btn btn-default", s.cartBtnToggle].join(' ')}>
                    <div className="cart__btn_toggle__ico">
                        <Icon icon="ic:twotone-shopping-cart" color="#9797a6" width="20" height="20"/>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Cart;