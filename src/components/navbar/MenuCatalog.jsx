import React, { useEffect, useRef } from "react";
// import s from "./Navbar.module.css";
import "../../index.css";
import { Box, ClickAwayListener, Grid, Grow, Menu, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { electronics, appliances, sports } from "../../constants/catalogData";
import { useState } from "react";



const MenuCatalog = ({ openList, setOpenList, arrIndex }) => {


  const [submenu, setSubmenu] = useState(false)
  const [index, setIndex] = useState('')

  const openDataMenu = () => {
    const data = []
    if(arrIndex === 0) {
      data.push(...electronics)
    } else if (arrIndex === 1) {
      data.push(...appliances)
    } else if (arrIndex === 2) {
      data.push(...sports)
    }

    return data
  }

  const openDataMenuSubmenu = (i) => {
    setSubmenu( true )
    setIndex(i)
  }

  const handleClose = () => {
    setOpenList(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenList(false);
    } else if (event.key === 'Escape') {
      setOpenList(false);
    }
  }

  

  return (
    <Grid container spacing={1}>
      
        <Grid item xs={4}>
            <Paper>
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList
                    autoFocusItem={openList}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {openDataMenu().map( (item, i) => (
                      <MenuItem 
                        key={item.ID} 
                        onMouseLeave={() => openDataMenuSubmenu(i)}
                      >
                        {item.Name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
            </Paper>
        </Grid>


        {submenu && 
        <Grid item xs>
          <Box>
              <Paper>
                  <MenuList
                    autoFocusItem={openList}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {openDataMenu()[index].Submenu.map( sub => (
                      <MenuItem 
                      style={{display: 'inline-flex'}}
                      key={sub.ID} 
                      onClick={openDataMenu} 
                    >
                      {sub.Name}
                    </MenuItem>
                    ) )}
            
                  </MenuList>
              </Paper>
            </Box>
        </Grid>
        }
        




      </Grid>
  );
};

export default MenuCatalog;
