import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Container } from '@mui/system';
import MenuCatalog from '../../components/Navbar/MenuCatalog';
import MainSearch from '../../components/MainSearch/MainSearch';
import { Context } from '../../context';
import { useContext } from 'react';
import FastAccess from '../../components/FastAccess/FastAccess';

const Header = ({ showBackdrop }) => {

    const [openMenuCatalog, setOpenMenuCatalog] = useState(false)
    const [focusMainSearch, setFocusMainSearch] = useState(false)
    const [category, setCategory] = useState(null)

    // const handleShowBackdrop = () => {
    //     showBackdrop()
    // }

    // openMenuCatalog ? handleShowBackdrop(true) : handleShowBackdrop(false)

    const closeMainSearch = () => {
        setFocusMainSearch(false)
    }

    const openMainSearch = () => {
        setFocusMainSearch(true)
    }

    const handleShowBackdrop = (bool) => {
        showBackdrop(bool)
    }



    return (
        <>
            <Navbar openMenuCatalog={setOpenMenuCatalog} setCategory={setCategory} showBackdrop={handleShowBackdrop}/>

            { openMenuCatalog && <MenuCatalog  openList={openMenuCatalog} setOpenList={setOpenMenuCatalog} category={category} /> }

            <MainSearch focus={focusMainSearch} onOpen={openMainSearch} onClose={closeMainSearch}  showBackdrop={handleShowBackdrop} />

            <FastAccess />
        </>
    );
};

export default Header;