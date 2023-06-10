import React from 'react';
import style from './aboutMe.module.scss'
import {Title} from "../../Components/Title/Title";
import photoAboutMe from '../../assets/pictures/Photos/Фото обо Мне.png'
import photoAboutMeBig from '../../assets/pictures/Photos/20220614_155534_075 1.png'
import circles from '../../assets/pictures/svg/circles/Круги-пункты.png'
import bigCircles from '../../assets/pictures/svg/circles/Круги-пункты большие.png'
import {ReactComponent as Python} from "../../assets/pictures/svg/Lanquages/PythonSmall.svg";
import {ReactComponent as Js} from "../../assets/pictures/svg/Lanquages/JS logo Small.svg";
import {ReactComponent as Go} from "../../assets/pictures/svg/Lanquages/Go Small.svg";
import {ReactComponent as PythonBig} from "../../assets/pictures/svg/Lanquages/Python.svg";
import {ReactComponent as JsBig} from "../../assets/pictures/svg/Lanquages/JS logo.svg";
import {ReactComponent as GoBig} from "../../assets/pictures/svg/Lanquages/Golang logo.svg";



export const AboutMe = () => {
    return (
        <section className={style.aboutMe}>
            <div className={style.infoPhotoWrapp}>
                <div className={style.info}>
                    <div className={style.titleAboutWrap}>
                        <Title title='Обо мне'/>
                    </div>
                    <p className={style.presentation}>Давайте знакомиться! <span className={style.name}>Я - Алексей Юнчиц.</span>
                    </p>
                    <ul className={style.description}>
                        <li>Я Full Stack Developer.
                            Работаю разработчиком уже 15 лет,
                            начинал в 2007 году.
                        </li>
                        <li>Однако разработчик — не единственная моя профессия.
                            Еще я преподаватель. Подробнее
                            об этом расскажу дальше.
                        </li>
                        <li>Но помимо вышеперечисленного — я просто человек. Люблю природу, путешевствовать и рыбачить.
                            И, конечно же, делиться знаниями!
                        </li>
                    </ul>
                    <div className={style.circles}>
                        <img src={circles} alt="circle"/>
                    </div>
                    <div className={style.bigCircles}>
                        <img src={bigCircles} alt="circle"/>
                    </div>

                </div>
                <div className={style.photo}>
                    <img src={photoAboutMe} alt=""/>
                </div>
                <div className={style.photoBig}>
                    <img src={photoAboutMeBig} alt=""/>
                </div>

            </div>
            <div className={style.titleSpecialWrap}>
                <Title title='Основная специализация'/>
            </div>

            <div className={style.icons}>
            <div className={`${style.icon} ${style.python}`}>
                <Python className={style.allSvgComponent}/>
                <PythonBig className={style.allSvgComponentBig}/>
                <p className={style.textCode}>Python</p>
            </div>
            <div className={`${style.icon} ${style.python} `}>
                <Js className={style.allSvgComponent}/>
                <JsBig className={style.allSvgComponentBig}/>
                <p className={`${style.textCode} ${style.textCodeJs}`}>JavaScript</p>
            </div>
            <div className={`${style.icon} ${style.go}`}>
                <Go className={style.allSvgComponent}/>
                <GoBig className={style.allSvgComponentBig}/>

                <p className={style.textCode}>Golang</p>

            </div>



            </div>

        </section>
    );
};

