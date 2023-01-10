import React from 'react';
import s from './Navbar.module.css'
import '../../index.css'

const MenuCatalog = () => {
    return (
        <div className='col-sm-8 header__second__menu'>
            <div id='vue-catalog-menu' className={s.menuCatalog}>
                <ul id="catalog-menu_static" className={s.menuCatalogStatic}>
                    
                    <li className={s.MenuCatalogItem}>
                        <a itemProp="url" href="/ru/catalogue/electronic/" data-id="600" className="menu-catalog__link">
                            <span itemProp="name" className="menu-catalog__text">Электроника</span>
                        </a>
                    </li>
                    <li className={s.MenuCatalogItem}>
                        <a itemProp="url" href="/ru/catalogue/electronic/" data-id="600" className="menu-catalog__link">
                            <span itemProp="name" className="menu-catalog__text">Телевизоры</span>
                        </a>
                    </li>
                    <li className={s.MenuCatalogItem}>
                        <a itemProp="url" href="/ru/catalogue/electronic/" data-id="600" className="menu-catalog__link">
                            <span itemProp="name" className="menu-catalog__text">Бытовая техника</span>
                        </a>
                    </li>

                        
                </ul>
            </div>
        </div>
    );
};

export default MenuCatalog;