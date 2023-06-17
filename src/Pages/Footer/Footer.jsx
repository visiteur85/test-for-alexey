import React from 'react';
import style from './footer.module.scss'
import {NavMenu} from "../../Components/NavMenu/NavMenu";
import {menuList} from "../../data/data";
import {ReactComponent as Telegram} from "../../assets/pictures/svg/telegram/Telegram Messenger.svg";
import {ReactComponent as Mail} from "../../assets/pictures/svg/mail/Vector.svg";

export const Footer = () => {
    return (
        <section className={style.footer}>
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
                <h3>
                    Меню
                </h3>
                <NavMenu block='footer' menuList={menuList}/>
            </div>
            <div className={style.links}>
                <div className={style.line}>

                </div>
                <div className={style.messenger}>
                <Telegram/>
                <Mail/>
                </div>



            </div>
        </section>
    );
};

