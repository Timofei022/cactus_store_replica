import React from 'react';
import s from './FastAccess.module.css'
import img from '../../assets/fast_access_img/iPhone-14-Pro-Max.jpg'
import { Container } from '@mui/system';

const FastAccess = () => {
    return (
        <section className={s.fastAccess} >
            <Container maxWidth="lg">
                <div className={s.fastAccess__item_row}>
                    <div className={[s.fastAccess__item, s.dominoid].join(' ')}>
                        <a href="##" className={s.fastAccess__item_inner}>
                            <span className={s.fastAccess__item_title}>Мобильные телефоны</span>
                            <img src={img} alt="" />
                        </a>
                    </div>
                    <div className={[s.fastAccess__item, s.dominoid].join(' ')}>
                        <a href="##" className={s.fastAccess__item_inner}>
                            <span className={s.fastAccess__item_title}>Мобильные телефоны</span>
                            <img src={img} alt="" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FastAccess;