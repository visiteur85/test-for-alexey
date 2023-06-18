import React from 'react';
import style from './avatar.module.scss'
import {ReactComponent as TelegramIcon} from "../../assets/pictures/svg/telegram/Telegram Messenger.svg";
import {ReactComponent as BigTelegramIcon} from '../../assets/pictures/svg/telegram/Big Telegram Messenger.svg';
import {ReactComponent as BigMailIcon} from "../../assets/pictures/svg/mail/Mail Messenger.svg";
import {ReactComponent as MailIcon} from "../../assets/pictures/svg/mail/Vector.svg";
import avatar from '../../assets/pictures/Photos/avatar.png'
import bigAvatar from '../../assets/pictures/Photos/BigAvatar.png'
import circleText from '../../assets/pictures/png/круговая подпись.png'
import bigCircleText from '../../assets/pictures/png/круговая подпись бошая.png'

export const Avatar = () => {
    return (
        <section className={style.avatar}>
            <div className={style.avatar__mobile}>
                <div className={style.heading}>
                    <h1 className={style.heading__title}>ALEX YUNCHITS </h1>
                    <div>
                        <a href="tel: +375290000000">
                            <TelegramIcon className={style.telegram}/>
                        </a>
                        <a href="mailto:test@test.com">
                            <MailIcon className={style.mail}/>
                        </a>
                    </div>
                </div>
                <p className={style.text}>Привет! Меня зовут Алексей Юнчиц.<br/>
                    Я Full Stack разработчик и преподаватель.</p>

            </div>
            <div className={style.avatar__desktop}>
                <div className={style.heading}>
                    <h1 className={style.heading__title}>ALEX YUNCHITS </h1>
                    <p className={style.text}>Привет! Меня зовут Алексей Юнчиц.
                        Я Full Stack<br/> разработчик и преподаватель.</p>
                    <div>
                        <a href="tel: +375290000000">
                            <BigTelegramIcon className={style.telegram}/>
                        </a>
                        <a href="mailto:test@test.com">
                            <BigMailIcon className={style.mail}/>
                        </a>
                    </div>
                </div>


            </div>
            <div className={style.mainPhoto}>
                <div className={style.mainPhotoContainer}>
                    <img src={avatar} alt="portrait"/>
                    <div className={style.circle}>
                        <img src={circleText} alt="circle"/>
                    </div>
                </div>

            </div>

            <div className={style.mainBigPhoto}>
                <div className={style.mainPhotoContainer}>
                    <img src={bigAvatar} alt="portrait"/>
                    <div className={style.circle}>
                        <img src={bigCircleText} alt="circle"/>
                    </div>
                </div>
            </div>


        </section>
    );
};



