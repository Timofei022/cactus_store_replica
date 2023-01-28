import React, { useState } from "react";
import s from "./AppBar.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

const lang = ["RU", "RO", "EN"]

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selLang, setSelLang] = useState("")
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = (el) => {
    setSelLang(el)
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="select-lang-btn"
        className={[s.btn_langSelect, "firstColor"]}
        onClick={handleClick}
      >
        {selLang || "RU"}
      </Button>
      <Menu
        id="select-lang-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {lang.map( el => (
          <MenuItem 
            key={el}
            onClick={() => handleClose(el)} 
          >{el}</MenuItem>
        ))}
      </Menu>
    </div>
)
};

export default Dropdown;
