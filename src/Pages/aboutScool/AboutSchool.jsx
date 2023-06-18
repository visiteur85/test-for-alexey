import React from 'react';
import style from './aboutSchool.module.scss'
import {Title} from "../../Components/Title/Title";

import {SchoolSlider} from "./components/SchoolSlider/SchoolSlider";
import {Element} from "react-scroll";

export const AboutSchool = () => {
    return (
        <>
            <Element name='school'></Element>
            <section className={style.aboutSchool}>
                <div className={style.title}>
                    <Title title='О школе ITEC'/>
                </div>
                <div className={style.aboutSchoolWrapper}>
                    <div className={style.slider}>
                        <SchoolSlider/>
                    </div>
                    <p className={style.text}>Школа ITEC — мое главное детище, в которое я вкладываюсь уже <span> несколько лет.</span> Помимо
                        меня
                        в ней преподают мои бывшие ученики, которых
                        я специально для этого подготовил.</p>
                    <p className={style.text}>В первую очередь мои ученики — это продолжение меня и моего <span>стиля в разработке.</span>
                    </p>
                </div>
            </section>
        </>
    );
};




