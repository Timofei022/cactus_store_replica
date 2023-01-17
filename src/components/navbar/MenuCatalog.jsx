import React, { useEffect, useRef, useState } from "react";
// import s from "./Navbar.module.css";
import "../../index.css";
import { Button, ClickAwayListener, Grid, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { categories, electronics, appliances } from "../../constants/catalogData";



const MenuCatalog = ({ openList, setOpenList, anchorRef, arrIndex }) => {


  // const handleToggle = () => {
  //   setOpenList((prevOpen) => !prevOpen);
  // };

  console.log(arrIndex);

  const handleOpen = (arrIndex) => {
    const data = []
    if(arrIndex === 0) {
      electronics.map(item => data.push(item.Name))
    } else if (arrIndex === 1) {
      appliances.map(item => data.push(item.Name))
    }
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

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

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = useRef(openList);
  // useEffect(() => {
  //   if (prevOpen.current === true && openList === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = openList;
  // }, [openList]);


  return (
    <Grid container spacing={1}>
        {/* <Grid item xs={3}> */}
        
        {/* <Button
          ref={anchorRef}
          onClick={handleToggle}

          color="inherit"
          fullWidth
        >
          Dashboard
        </Button> */}
        
        <Grid item xs={3}>
        <Popper
          open={openList}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={openList}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {electronics.map( item => (
                      <MenuItem key={item.Name} onClick={handleClose} >{item.Name}</MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          
          )}
        </Popper>

        </Grid>


        {/* </Grid> */}




        {/* <Grid item xs>
        <Paper  sx={{backgroundColor: "black", color: "yellow"}}>
            Paper
        </Paper>
        </Grid> */}
      </Grid>
  );
};

export default MenuCatalog;
