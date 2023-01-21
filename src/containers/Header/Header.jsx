import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Container } from '@mui/system';
import MenuCatalog from '../../components/Navbar/MenuCatalog';

const Header = () => {

    const [openMenuCatalog, setOpenMenuCatalog] = useState(false)
    const [arrIndex, setArrIndex] = useState(0)


    return (
        <>
            <Navbar openMenuCatalog={setOpenMenuCatalog} setIndex={setArrIndex}/>

            <Container maxWidth="xl">
                { openMenuCatalog && <MenuCatalog  openList={openMenuCatalog} setOpenList={setOpenMenuCatalog} arrIndex={arrIndex} />}
            </Container>   
        </>
    );
};

export default Header;