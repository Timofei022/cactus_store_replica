import React from 'react';
import s from './FastAccess.module.css'
import '../../index.css'
import bgItem from '../../assets/fast_access_img/bg.gif'
import { Container } from '@mui/system';
import { data } from '../../constants/catalogData';
import classNames from 'classnames';
import { useState } from 'react';

const FastAccess = () => {

    const [firstList, setFirstList] = useState(true)
    const [secondList, setSecondList] = useState(false)



    const popularList = (function() {
        const arr = []
        Object.values(data).map(el => el.find(item => item.Name === "Популярное" ? arr.push(...item.Submenu) : null ))
        return arr
    })()

    const firstListFastAccess = [   popularList[0], 
                                    popularList[2], 
                                    popularList[5], 
                                    popularList[1], 
                                    popularList[15], 
                                    popularList[4]
                                ]
    
    const showFAList = (number) => {

        const layer1 = document.getElementById(`fast-access-layer1`)
        const layer2 = document.getElementById(`fast-access-layer2`)

        if(number === 1) {
            layer2.classList?.remove("active")
            layer1.classList.add("active")
        }
        if(number === 2) {
            layer1.classList?.remove("active")
            layer2.classList.add("active")
        }
    }
    
    const openFirstList = () => {
        setTimeout(() => showFAList(1), 0)
        
        setSecondList(false)
        setFirstList(true)
    }
    const openSecondList = () => {
        setTimeout(() => showFAList(2), 0)
        setFirstList(false)
        setSecondList(true)
    }

    


    return (
        <section className={s.fastAccess} >
            <Container maxWidth="lg">
                <div id='fast-access-layer1' className={ classNames(s.fastAccess__item_row, "active") }>
                    <div className={s.grid_container}>

                        { firstListFastAccess.map(item => (
                        <div className={s.grid_item} key={item.ID}>
                            <div className={ classNames(s.fastAccess__item, {'dominoid': firstList}) }>
                                <img src={bgItem} alt="" className={s.fastAccess__item_bgImg}/>
                                <a href="##" className={s.fastAccess__item_inner}>
                                    <span className={s.fastAccess__item_inner_title}>{item.Name}</span>
                                    <img src={require(`../../${item.Img}`)} alt="" className={s.fastAccess__item_inner_img} />
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div id='fast-access-layer2' className={ classNames(s.fastAccess__item_row) }>
                    <div className={s.grid_container}>
                        
                        { firstListFastAccess.reverse().map(item => (
                        <div className={s.grid_item} key={item.ID}>
                            <div className={ classNames(s.fastAccess__item, {'dominoid': secondList}) }>
                                <img src={bgItem} alt="" className={s.fastAccess__item_bgImg}/>
                                <a href="##" className={s.fastAccess__item_inner}>
                                    <span className={s.fastAccess__item_inner_title}>{item.Name}</span>
                                    <img src={require(`../../${item.Img}`)} alt={item.Name} className={s.fastAccess__item_inner_img} />
                                </a>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </Container>
            <ul className={s.fastAccess__nav}>
                <li 
                    id='FA-nav-li-1'
                    className={firstList && s.fastAccess__active}
                    onClick={openFirstList}
                    ></li>
                <li 
                    id='FA-nav-li-2'
                    className={secondList && s.fastAccess__active}
                    onClick={openSecondList}
                    ></li>
            </ul>
        </section>
    );
};

export default FastAccess;