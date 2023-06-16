import daria from "../../assets/pictures/Photos/rewievs/Дарья Стасевич.png";
import roman from "../../assets/pictures/Photos/rewievs/Роман.png";
import anastasia from "../../assets/pictures/Photos/rewievs/Анастасия Литвин.png";
import serguey from "../../assets/pictures/Photos/rewievs/Сергей Барауля.png";
import React, {useState} from "react";
import style from "./schoolSlider.module.scss";

export const SchoolSlider = () => {
    const images = [
        {id: 1, photo: daria},
        {id: 2, photo: roman},
        {id: 3, photo: anastasia},
        {id: 4, photo: serguey}
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
            <div className={style.sliderMobile}>
                <img src={images[(currentSlide - 1 + images.length) % images.length].photo}
                     alt="Slide"/>
            </div>
            <div className={style.sliderDesktop}>
                <img src={images[(currentSlide - 1 + images.length) % images.length].photo}
                     alt="Slide"/>
                <img className="slide" src={images[currentSlide].photo} alt="Slide"/>
            </div>
            <div className={style.buttons}>
                <div className={style.arrowLeft} onClick={prevSlide}></div>
                <div className={style.arrowRight} onClick={nextSlide}></div>
            </div>


        </div>
    );
};