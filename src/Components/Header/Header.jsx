import React, {useState} from 'react';
import style from './header.module.scss';
import logo from '../../assets/pictures/svg/logo/Лого главная.svg';
import {ReactComponent as BurgerButton} from '../../assets/pictures/svg/burger/Group 14.svg';
import {ReactComponent as CloseButton} from "../../assets/pictures/svg/closeButton/Выйти CTA.svg";
import {NavMenu} from "../NavMenu/NavMenu";


export const Header = () => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);


    const menuList = ['Обо мне', 'Преподавание', 'О школе', 'Отзывы учеников', 'Контакты', 'Авторский курс']

    const onClickMenuChange = () => {
        setNavMenuOpen(prevState => !prevState)
    }

    const isOpenMenu = isNavMenuOpen ? style.open : '';
    const isVisibleBurger = isNavMenuOpen ? style.close : "";
    const isVisibleClosedButton = !isNavMenuOpen ? style.close : "";


    return (
        <header className={style.header}>
            <div className={style.header__inner}>
                <div className={style.logo}>
                    <img className={style.logo} src={logo} alt="logo"/>
                </div>
                <div className={style.navMenu}>
                    <div className={style.navMenuMobile}>
                        <div className={`${isVisibleClosedButton} `}>
                            <CloseButton className={style.closeButton}
                                         onClick={onClickMenuChange}/>
                        </div>
                        <div className={`${style.navMenuMobile__menu} ${isOpenMenu}`}>
                            <NavMenu
                            menuList={menuList}/></div>
                    </div>
                    <div className={`${isVisibleBurger} `}>
                        <BurgerButton onClick={onClickMenuChange} className={style.burgerButton}/>
                    </div>

                </div>
                <div className={style.desktopMenu}>
                <NavMenu  menuList={menuList}/>
                </div>

            </div>
        </header>
    );
};


