import React, {useState} from 'react';
import style from './header.module.scss';
import logo from '../../assets/pictures/svg/logo/Лого главная.svg';
import {ReactComponent as BurgerButton} from '../../assets/pictures/svg/burger/Group 14.svg';
import {ReactComponent as CloseButton} from '../../assets/pictures/svg/closeButton/Выйти CTA.svg';
import {NavMenu} from "../NavMenu/NavMenu";
import { v4 as uuidv4 } from 'uuid';


export const Header = () => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);


    const menuList = [
        {id: uuidv4(), name: 'Обо мне', path: 'aboutMe'},
        {id: uuidv4(), name: 'Преподавание', path: 'teaching'},
        {id: uuidv4(), name: 'О школе', path: 'school'},
        {id: uuidv4(), name: 'Отзывы учеников', path: 'reviews'},
        {id: uuidv4(), name: 'Контакты', path: 'contacts'},
        {id: uuidv4(), name: 'Авторский курс', path: 'course'},

]

    const onClickMenuChange = () => {
        setNavMenuOpen(prevState => !prevState)

    }

    const isOpenMenu = isNavMenuOpen ? style.open : '';
    const isVisibleBurger = isNavMenuOpen ? style.close : "";
    const isVisibleClosedButton = !isNavMenuOpen ? style.close : "";


    return (
        <section className={style.header}>
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
                            <NavMenu callback={onClickMenuChange}
                            menuList={menuList}/></div>
                    </div>
                    <div className={`${isVisibleBurger} `}>
                        <BurgerButton onClick={onClickMenuChange} className={style.burgerButton}/>
                    </div>

                </div>
                <div className={style.desktopMenu}>
                <NavMenu  menuList={menuList} callback={onClickMenuChange}/>
                </div>

            </div>
        </section>
    );
};


