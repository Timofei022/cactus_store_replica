import React from "react";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import s from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={s.cartWrapper}>
      <div className="cartCompact">
        <button className={["btn btn-default", s.cartBtnToggle].join(" ")}>
          <div className="cart__btn_toggle__ico">
            <ShoppingCartTwoToneIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
