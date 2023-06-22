import React from 'react';
import style from './teaching.module.scss'
import {Title} from "../../Components/title/Title";
import {Element} from 'react-scroll';
import teachingPhoto from '../../assets/pictures/Photos/Фото Преподавание.png';
import teachingPhotoBig from '../../assets/pictures/Photos/Big Фото Преподавание.png';
import justAlexey from '../../assets/pictures/Photos/20220614_160615 2.png';
import {ReactComponent as Lion} from "../../assets/pictures/svg/lion/lionSmall.svg";
import {ReactComponent as BigLion} from "../../assets/pictures/svg/lion/bigLion.svg";
import {ReactComponent as Signature} from "../../assets/pictures/svg/circles/Круговая надпись.svg";

export const Teaching = () => {
    return (
        <>
            <Element name='teaching'></Element>
            <section className={style.teaching}>
                <div className='container'>
                    <div className={style.bigLion}>
                        <BigLion/>
                    </div>

                <div className={style.title}>

                    <Title title="Преподавание"/>
                </div>

                <div className={style.teachingWrapper}>
                    <div className={style.signature}><Signature/></div>

                    <div className={style.lion}>
                        <Lion/>
                    </div>

                    <div className={style.teachingPhoto}>
                        <img src={teachingPhoto} alt="Alexey is working"/>
                    </div>
                    <div className={style.teachingBigPhoto}>
                        <img src={teachingPhotoBig} alt="Alexey is working"/>
                    </div>
                    <div className={style.aboutStudy}>
                        <p className={style.text}>Как вы уже поняли, разработчик — не единственная моя профессия. И, на
                            самом деле, даже не самая важная для меня. Еще я преподаватель. Обучаю учеников уже 7 лет и
                            выпустил за это время более 1000 человек.</p>
                        <p className={style.text}>У меня достаточно большой опыт в разработке. Я выполнил множество
                            проектов, решал разные по сложности задачи. Но самой важной из них стало преподавание.</p>
                        <p className={style.text}>Суть этой задачи в том, чтобы передать мои знания и опыт начинающим
                            путь
                            в IT. А самое главное — чтобы ученики превзошли меня.</p>
                        <p className={style.text}>Думаю, данную задачу в некоторой степени я уже решил. Моя методология
                            обучения помогла студентам добиться высоких результатов. Сейчас они работают в различных
                            сферах:
                            в медицине, банковской сфере, безопасности. В том числе в таких компаниях, как EPAM, ISsoft,
                            Itransition, Yandex, ITechArt, Innowise.</p>
                    </div>
                    <div className={style.aboutStudents}>
                        <img src={justAlexey} alt="Alexey"/>
                    </div>
                    <div className={style.aboutStudentsBig}>
                        <img src={teachingPhotoBig} alt="Alexey"/>
                    </div>
                    <div className={style.aboutStudyPartTwo}>
                        <p className={style.text}>Но самые лучшие ученики остались со мной: они стали моими коллегами.
                            Теперь мы вместе развиваем методику обучения. Я рекомендую учиться уже
                            у них, поскольку их энергия, горящие глаза и навыки во многом превзошли мои.</p>
                        <p className={style.text}>Мне нравится преподавать, общаться со студентами в процессе, видеть
                            их интерес и результаты. Я всегда рад помочь ученикам и после обучения, многие из них до сих
                            пор
                            со мной связываются.</p>
                        <p className={style.text}>Ученики даже прозвали меня «Йодой»! Причем такая ассоциация возникла
                            не у одного поколения студентов. Я люблю «Звёздные войны», а образ мастера Йоды — это мудрый
                            и
                            сильный учитель. Я рад, что в глазах учеников соответсвую этим качествам.</p>

                    </div>

                </div>
                </div>
            </section>
        </>
    );
};

