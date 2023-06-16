import React, {useState} from 'react';
import style from './aboutSchool.module.scss'
import {Title} from "../../Components/Title/Title";
import daria from '../../assets/pictures/Photos/rewievs/Дарья Стасевич.png'
import roman from '../../assets/pictures/Photos/rewievs/Роман.png'
import anastasia from '../../assets/pictures/Photos/rewievs/Анастасия Литвин.png'
import serguey from '../../assets/pictures/Photos/rewievs/Сергей Барауля.png'

export const AboutSchool = () => {
    return (
        <section className={style.aboutSchool}>
            <div className={style.title}>
                <Title title='О школе ITEC'/>
            </div>
            <div className={style.sliderMobile}>
                <Slider/>
            </div>
            <p className={style.text}>Школа ITEC — мое главное детище, в которое я вкладываюсь уже <span> несколько лет.</span> Помимо меня
                в ней преподают мои бывшие ученики, которых
                я специально для этого подготовил.</p>
            <p className={style.text}>В первую очередь мои ученики — это продолжение меня и моего <span>стиля в разработке.</span></p>
        </section>
    );
};


const Slider = () => {
    const images = [
        {id:1,photo: daria},
        {id:2,photo: roman},
        {id:3,photo: anastasia},
        {id:4,photo: serguey}
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className={style.sliderWrapper}>
            <div className={style.slider}>
                <img  src={images[(currentSlide - 1 + images.length) % images.length].photo}
                     alt="Slide"/>
                <img  src={images[(currentSlide + 1) % images.length].photo} alt="Slide"/>
            </div>
            <div className={style.buttons}>
            <div className={style.arrowLeft} onClick={prevSlide}></div>
            <div className={style.arrowRight} onClick={nextSlide}></div>
            </div>


        </div>
    );
};

