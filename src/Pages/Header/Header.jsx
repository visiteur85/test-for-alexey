import React, {useState} from 'react';
import style from './header.module.scss';
import logo from '../../assets/pictures/svg/logo/Лого главная.svg';
import {ReactComponent as BurgerButton} from '../../assets/pictures/svg/burger/Group 14.svg';
import {ReactComponent as CloseButton} from '../../assets/pictures/svg/closeButton/Выйти CTA.svg';
import {NavMenu} from "../../Components/navMenu/NavMenu";
import {menuList} from "../../data/data";
import {returnIcon} from "../../assets/icons/return";
import {useLocation, useNavigate} from "react-router-dom";


export const Header = () => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);
    const location = useLocation().pathname
    const navigate = useNavigate()


    const onClickMenuChange = () => {
        setNavMenuOpen(prevState => !prevState)

    }

    const returnToMainPage = () => {
        navigate('/')
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
                    {location === '/videoLessons' ?
                        <div className={style.returnMainPage} onClick={returnToMainPage}>
                            <img width='20' height='20' src={`data:image/svg+xml,${encodeURIComponent(returnIcon)}`}
                                 alt=""/>
                            <p>На главную</p>
                        </div>
                        : <>
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
                                <NavMenu menuList={menuList} callback={onClickMenuChange}/>
                            </div>
                        </>}


                </div>
            </div>
        </section>

    );
};



