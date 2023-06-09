import React from 'react';
import style from './avatar.module.scss'
import {ReactComponent as TelegramIcon} from "../../assets/pictures/svg/telegram/Telegram Messenger.svg";
import {ReactComponent as MailIcon} from "../../assets/pictures/svg/mail/Vector.svg";
import avatar from '../../assets/pictures/Photos/avatar.png'
import bigAvatar from '../../assets/pictures/Photos/BigAvatar.png'
import circleText from '../../assets/pictures/png/круговая подпись.png'

export const Avatar = () => {
    return (
        <section className={style.avatar}>
            <div className={style.avatarDesktop}>
                <div className={style.heading}>
                    <h1 className={style.heading__title}>ALEX YUNCHITS </h1>
                    <div>
                        <TelegramIcon className={style.telegram}/>
                        <MailIcon/>
                    </div>

                </div>
                <p className={style.text}>Привет! Меня зовут Алексей Юнчиц.
                    Я Full Stack разработчик и преподаватель. </p>
            </div>
            <div className={style.mainPhoto}>
                <img src={avatar} alt="main photo"/>
                <div className={style.circle}>
                    <img src={circleText} alt="circle"/>
                </div>
            </div>
            <div className={style.mainBigPhoto}>
                <img src={bigAvatar} alt="main photo"/>
                <div className={style.circle}>
                    <img src={circleText} alt="circle"/>
                </div>
            </div>
        </section>
    );
};

