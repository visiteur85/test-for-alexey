import React from 'react';
import style from './header.module.scss'
import logo from '../../assets/pictures/logo/Лого главная.svg'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header__inner}>
                <div className={style.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <nav className={style.navMenu}>
                    <div className={style.btn}>
                        <div className={style.btn__top}></div>
                        <div className={style.btn__middle}></div>
                        <div className={style.btn__bottom}></div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

