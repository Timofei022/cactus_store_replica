import React from "react";
import { Grid } from "@mui/material";
import { menuList } from "../../constants/navbar.constants";
import { useState } from "react";

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
  );
};

export default MenuCatalog;
