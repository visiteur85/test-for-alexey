import React from 'react';
import style from './footer.module.scss'
import {NavMenu} from "../../Components/navMenu/NavMenu";
import {menuList} from "../../data/data";
import {ReactComponent as Telegram} from "../../assets/pictures/svg/telegram/Telegram Messenger.svg";
import {ReactComponent as Mail} from "../../assets/pictures/svg/mail/Vector.svg";
import Scroll, {Element} from "react-scroll";
import {ReactComponent as BigTelegram} from "../../assets/pictures/svg/telegram/Big Telegram Messenger.svg";
import {ReactComponent as BigMail} from "../../assets/pictures/svg/mail/Mail Messenger.svg";
import {useLocation, useNavigate} from "react-router-dom";

export const Footer = ({setNavMenuOpen}) => {
    const location = useLocation().pathname;
    const navigate = useNavigate()

    let Scroll = require('react-scroll');
    let scroller = Scroll.scroller;

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


    return (
        <>
            <Element name='contacts'></Element>
            <section>
                <div className='container'>
                    <div className={style.footer__wrapper}>
                        <div className={style.contacts}>
                            <h3>
                                Контакты
                            </h3>
                            <p>+ 375 44 304 49 40</p>
                            <p>alexyunchic@gmail.com</p>
                            <p>itec.by</p>
                            <p>Минск, Беларусь</p>

                        </div>
                        <div className={style.navMenu}>
                            <h3 className={style.menuHeading}>
                                Меню
                            </h3>

                            <NavMenu callback={routingToMAinPAgeScrollToElementAndCloseNavMenu} block='footer'
                                     menuList={menuList}/>

                        </div>


                        <div className={style.links}>
                            <div className={style.messenger}>
                                <div className={style.telegram}>
                                    <a href="tel: +375290000000">
                                        <Telegram/>
                                    </a>
                                </div>
                                <div className={style.bigTelegram}>
                                    <a href="tel: +375290000000">
                                        <BigTelegram/>
                                    </a>
                                </div>
                                <div className={style.mail}>
                                    <a href="mailto:test@test.com">
                                        <Mail/>
                                    </a>
                                </div>
                                <div className={style.bigMail}>
                                    <a href="mailto:test@test.com">
                                        <BigMail/>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

