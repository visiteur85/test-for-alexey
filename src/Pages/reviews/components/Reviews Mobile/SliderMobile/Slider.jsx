import React, {useState} from 'react';
import style from './slider.module.scss';
import SwipeableViews from 'react-swipeable-views';

import image2 from '../../../../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
import image3 from '../../../../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
import image1 from '../../../../../assets/pictures/Photos/rewievs/Сергей Барауля.png'
import {Modal} from "./ModalSlideMobile/Modal";
import {SlideMobile} from "./SlideMobile/SlideMobile";


const slides = [
    {
        id: '1',
        image: image1,
        text: '1Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике. ',

    },
    {
        id: '2',
        image: image2,
        text: '2Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике.',

    },
    {
        id: '3',
        image: image3,
        text: '3Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике.',

    },
];
export const MySlider = () => {
    const [isModalActive, setIsModalActive] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleChangeSlide = (index) => {
        setCurrentSlide(index);
    };

    const changeCurrentSlide = (modalStatus) => {
        setIsModalActive(modalStatus ? modalStatus : null)
    }


    return (
        <div className={style.sliderContainer}>

            {isModalActive && <Modal><SlideMobile
                image={isModalActive.image}
                text={isModalActive.text}
                callBack={changeCurrentSlide}
                activeModal={isModalActive}
            />
            </Modal>}

            <SwipeableViews
                index={currentSlide}
                onChangeIndex={handleChangeSlide}
                enableMouseEvents

                containerStyle={{width: '83%'}}

            >
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <SlideMobile
                            image={slide.image}
                            text={slide.text}
                            activeModal={isModalActive?.id === slide.id}
                            callBack={changeCurrentSlide}
                            id={slide.id}
                        />
                    </div>
                ))}
            </SwipeableViews>
        </div>
    );
};











