import React from 'react';
import style from './header.module.scss';
import logo from '../../assets/pictures/svg/logo/Лого главная.svg';
import {ReactComponent as BurgerButton} from '../../assets/pictures/svg/burger/Group 14.svg';
import {ReactComponent as CloseButton} from '../../assets/pictures/svg/closeButton/Выйти CTA.svg';
import {NavMenu} from "../../Components/navMenu/NavMenu";
import {menuList} from "../../data/data";
import {useLocation, useNavigate} from "react-router-dom";


export const Header = ({setNavMenuOpen, isNavMenuOpen}) => {

    let Scroll = require('react-scroll');
    let scroller = Scroll.scroller;

    const location = useLocation().pathname
    const navigate = useNavigate()


    const onClickMenuChange = (isOpen) => {
        setNavMenuOpen(isOpen)

    };

    const routingToMAinPAgeScrollToElementAndCloseNavMenu = (path) => {
        setNavMenuOpen(false)
        if (location === '/videoLessons') {
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(path, {
                    smooth: true,
                })
            }, 100)

        }
    }


    const isOpenMenu = isNavMenuOpen ? style.open : '';
    const isVisibleBurger = isNavMenuOpen ? style.close : "";
    const isVisibleClosedButton = !isNavMenuOpen ? style.close : "";


    return (

        <section className={style.header}>

            <div className='container'>
                <div className={style.header__inner}>
                    <div className={style.logo}>
                        <img className={style.logo} src={logo} alt="logo"/>
                    </div>
                    <div className={style.navMenu}>
                        <div className={style.navMenuMobile}>
                            <div className={`${isVisibleClosedButton} `}>
                                <CloseButton className={style.closeButton}
                                             onClick={() => onClickMenuChange(false)}/>
                            </div>
                            <div className={`${style.navMenuMobile__menu} ${isOpenMenu}`}>
                                <NavMenu callback={routingToMAinPAgeScrollToElementAndCloseNavMenu}
                                         menuList={menuList}/></div>
                        </div>
                        <div className={`${isVisibleBurger} `}>
                            <BurgerButton onClick={() => onClickMenuChange(true)} className={style.burgerButton}/>
                        </div>

                    </div>
                    <div className={style.desktopMenu}>
                        <NavMenu menuList={menuList} callback={routingToMAinPAgeScrollToElementAndCloseNavMenu}/>
                    </div>


                </div>
            </div>
        </section>

    );
};



