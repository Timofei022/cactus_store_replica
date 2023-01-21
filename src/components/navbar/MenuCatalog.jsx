import React from "react";
<<<<<<< Updated upstream
import { Grid } from "@mui/material";
import { menuList } from "../../constants/navbar.constants";
=======
import "../../index.css";
import {
  Box,
  ClickAwayListener,
  Grid,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
>>>>>>> Stashed changes
import { useState } from "react";
import { data } from "../../constants/catalogData";

<<<<<<< Updated upstream
const MenuCatalog = () => {
  const [items, setItems] = useState([]);

  const getItemsList = (parentId) => {
    fetch(
      `https://www.cactus.md/api/categories.ashx?cmd=submenu&parentid=${parentId}&lng=ru`
    )
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Grid container xs={12} justify="space-evenly" spacing={1}>
        {menuList.map((item) => (
          <Grid item xs={1}>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                width: "100",
                height: "100",
              }}
              key={item.name}
              onClick={() => getItemsList(item.parentid)}
            >
              {item.name}
            </div>
          </Grid>
        ))}
        {JSON.stringify(items)}
      </Grid>
    </div>
=======
const MenuCatalog = ({ openList, setOpenList, category }) => {
  const [submenu, setSubmenu] = useState(false);
  const [subCategory, setSubCategory] = useState("");

  const openDataMenu = (menuName) => {
    return data[category];
  };

  const openDataMenuSubmenu = (subCategory) => {

    const findSubCategory = data[category]?.find(
      (el) => el.Name === subCategory
    );

    setSubmenu(true);
    setSubCategory(findSubCategory);
  };

  const handleClose = () => {
    setOpenList(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenList(false);
    } else if (event.key === "Escape") {
      setOpenList(false);
    }
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              autoFocusItem={openList}
              id="composition-menu"
              aria-labelledby="composition-button"
              onKeyDown={handleListKeyDown}
            >
              {openDataMenu()?.map((item) => (
                <MenuItem
                  key={item.ID}
                  onMouseEnter={() => openDataMenuSubmenu(item.Name)}
                >
                  {item.Name}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grid>

      {submenu && (
        <Grid item xs>
          <Box>
            <Paper>
              <MenuList
                autoFocusItem={openList}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
                {subCategory?.Submenu?.map((sub) => (
                  <MenuItem
                    style={{ display: "inline-flex" }}
                    key={sub.ID}
                    onClick={openDataMenu}
                  >
                    {sub.Name}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Box>
        </Grid>
      )}
    </Grid>
>>>>>>> Stashed changes
  );
};

export default MenuCatalog;
