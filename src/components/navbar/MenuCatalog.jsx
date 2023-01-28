import React from "react";
// import s from "./Navbar.module.css";
import "../../index.css";
import { Box, ClickAwayListener, Container, Grid, MenuItem, MenuList, Paper, } from "@mui/material";
import { data } from "../../constants/catalogData";
import { useState } from "react";
import s from './AppBar.module.css'


const MenuCatalog = ({ openList, setOpenList, category }) => {


  const [submenu, setSubmenu] = useState(false)
  const [subCategory, setSubCategory] = useState('')

  const openDataMenu = (menuName) => {
    return data[category]
  }

  const openDataMenuSubmenu = (subCategory) => {

    const findSubCategory = data[category]?.find( sub => sub.Name === subCategory )
     
    setSubmenu( true )
    setSubCategory( findSubCategory )
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
    <Container maxWidth="xl">
      <div className={s.menuCatalog}>
      <Grid container spacing={1}>
      
        <Grid item xs={4}>
            <Paper className={s.menuCatalog_list}>
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList
                    autoFocusItem={openList}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {openDataMenu()?.map( item => (
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
                    {subCategory?.Submenu?.map( sub => (
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
      </div>
    </Container>

  );
};

export default MenuCatalog;
