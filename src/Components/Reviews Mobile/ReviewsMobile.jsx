import React from 'react';
import {Title} from "../Title/Title";
import style from './reviewsMobile.module.scss'
import {MySlider} from "./SliderMobile/Slider";
import {Element} from "react-scroll";


export const ReviewsMobile = () => {
    return (
        <div>
            <div className={style.title}>

                <Title title='Отзывы учеников'/>
            </div>
            <div>
                <MySlider/>
            </div>
        </div>
    );
};

