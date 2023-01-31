import * as React from 'react';
import { TextField, MenuList, MenuItem, Box, ClickAwayListener } from '@mui/material';
import { Container } from '@mui/system';
import s from './MainSearch.module.css'
import { data } from '../../constants/catalogData'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import isEqual from '../../utils/utils';

// function sleep(delay = 0) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

export default function MainSearch({ focus, onOpen, onClose, showBackdrop }) {

  // const mainSearchRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const [searchQuick, setSearchQuick] = useState(false)
  const [searchResult, setSearchResult] = useState(false)

  // useEffect(() => {
  //   if(!focus) return

  //   const handleClick = (e) => {
  //     if(!mainSearchRef.current) return
  //     if(!mainSearchRef.current.contains(e.target)) {
  //       onClose()
  //       setSearchQuick(false)
  //       setSearchResult(false)

  //     }
  //   };

  //   document.addEventListener("click", handleClick)

  //   return () => {
  //     document.removeEventListener("click", handleClick)
  //   }
  // }, [ focus, onClose ])

  
  const subCategories = () => {
    let sub = []
    Object.values(data)?.map(category => category?.map(subCat => sub.push(subCat)))
    return sub
  }


  const nameOfProducts = () => {
    const categories = []
    const subCategoriesList = []
    Object.values(data).map( category => category.find(el => el.Name !== "Популярное")
      ? categories.push(...category) 
      : null
    )

    categories?.map( subCategory => subCategory.Submenu 
        ? subCategoriesList?.push(...subCategory?.Submenu) 
        : null)
    return subCategoriesList
  }


  const filteredSubCategoriesList = nameOfProducts()?.filter(e => e.Name.toLowerCase().includes(inputValue.toLowerCase()))
  

  const handleChangeInput = (event) => {
    setInputValue(event.target.value)
    setSearchQuick(false)
    setSearchResult(true)

    if(event.target.value === ''){
      setSearchResult(false)
      setSearchQuick(true)
    }
  }

  const onFocus = (bool) => {

    if(bool === false) {
      document.getElementById("search-form").classList.remove(s.focused)
      // showBackdrop(false)
      setSearchResult(false)
      setSearchQuick(false)


    } else {
      document.getElementById("search-form").classList.add(s.focused)
      setSearchQuick(true)
      // showBackdrop(true)
    }
  }

  return (
    <section className={s.mainSearch}>
    <Container maxWidth="lg">
      <Box
        id="search-form"
        className={s.search}
        component="form"
      >
        <ClickAwayListener onClickAway={() => onFocus(false)}>
        <TextField
              role="presentation"
              id="search-input"
              className={s.searchInput}
              label="Поиск по интернет магазину"
              type="search"
              variant="filled"
              fullWidth
              value={inputValue}
              onChange={handleChangeInput}
              onClick={() => onFocus(true)}
        />
        </ClickAwayListener>

        {searchQuick && 
        <Box className={s.searchQuick} >
          <div className={s.searchQuick_title}>Быстрые ссылки</div>
          <ul className={s.searchQuick_list}>
            <li><a href="##">Контакты</a></li>
            <li><a href="##">Обратная связь</a></li>
          </ul>
        </Box>}

        {searchResult && 
        <Box className={s.searchResult} >
          <MenuList
            className={s.searchResult_subCategories}
            // autoFocusItem={openList}
            id="composition-menu"
            aria-labelledby="composition-button"
          >
            { filteredSubCategoriesList?.map( (item, inx) => (
              <MenuItem
                id='search-result-item'
                key={inx} 
              >
                {item.Name}
              </MenuItem>
            ))}
          </MenuList>
          <Box className={s.searchResult_content} >

          </Box>
        </Box>}

      </Box>
    </Container>
    </section>
  );
}