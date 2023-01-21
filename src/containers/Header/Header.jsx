import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/system";
import MenuCatalog from "../../components/navbar/MenuCatalog";

const Header = () => {
  const [openMenuCatalog, setOpenMenuCatalog] = useState(false);
  const [category, setCategory] = useState(null);

  return (
    <>
      <Navbar openMenuCatalog={setOpenMenuCatalog} setCategory={setCategory} />

      <Container maxWidth="xl">
        {openMenuCatalog && (
          <MenuCatalog
            openList={openMenuCatalog}
            setOpenList={setOpenMenuCatalog}
            category={category}
          />
        )}
      </Container>
    </>
  );
};

export default Header;
