<<<<<<< Updated upstream
import React from "react";
import NavbarLogo from "../../components/Navbar/NavbarLogo";
import NavTop from "../../components/Navbar/NavTop";
import Cart from "../../components/Cart/Cart";
import MenuCatalog from "../../components/Navbar/MenuCatalog";

const Navbar = () => {
  return (
    <div className="">
      <div>
        <NavbarLogo />
        <NavTop />
        <hr/>
      </div>
      <div >
        <div className="col"></div>
        <MenuCatalog />
        <Cart />
      </div>
    </div>
  );
};

=======
import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import catalogData from "../../constants/catalogData";
import s from "../../components/navbar/AppBar.module.css";
import Logo from "../../components/navbar/Logo";
import Cart from "../../components/Cart/Cart";
import Dropdown from "../../components/navbar/Dropdown";
import { TELEPHONE } from "../../constants/navbar.constants";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar({ openMenuCatalog, setCategory }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const anchorRef = useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMenuCatalog = (category) => {
    setCategory(category);
    handleCloseNavMenu();
    openMenuCatalog((prev) => !prev);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit" className={s.appBar}>
      <Container maxWidth="xl" ref={anchorRef}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box gridColumn="span 2">
            {/*Лого и название сайта - md (большой)*/}
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            fontFamily="inherit"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cactus
          </Typography> */}
            <Logo />
          </Box>

          <Box gridColumn="span 10" className={s.headerTop}>
            {/* Лого и название сайта - xs (маленький)
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cactus
          </Typography> */}

            <a href="tel:+37360956120" className={s.headerPhone}>
              {TELEPHONE}
            </a>
            <Dropdown />

            <div className={s.headerTopLine} />
          </Box>

          <Box gridColumn="span 2" className={s.headerSecond}></Box>
          <Box gridColumn="span 10" className={s.headerSecond}>
            {/*Меню категорий - xs (маленький)*/}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {catalogData.categories.map((category) => (
                  <MenuItem
                    key={category}
                    onClick={() => handleOpenMenuCatalog(category)}
                  >
                    <Typography textAlign="center">{category}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/*Меню категорий md*/}
            <Box
              ref={anchorElNav}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {catalogData.categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleOpenMenuCatalog(category)}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {category}
                </Button>
              ))}
            </Box>

            <Cart />

            {/*Бокс аватара и настроек сайта*/}
            {/* <Box sx={{ flexGrow: 0 }}> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  className={s.userAvatar}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
>>>>>>> Stashed changes
export default Navbar;
