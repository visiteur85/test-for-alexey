// import React, {useEffect, useState} from 'react';
// import style from './slider.module.scss';
// import styleSlide from './slide.module.scss'
//
// import image1 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
// import image2 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
// import image3 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
// import {ReactComponent as Close} from "../../assets/pictures/svg/exit review mobile/Выйти CTA.svg";
// import {ReactComponent as Linked} from "../../assets/pictures/svg/linked/Linked in logo.svg";
// import {v4 as uuidv4} from "uuid";
// import {Modal} from "../../Modal/Modal";
//
// const slides = [
//     {
//         id: uuidv4(),
//         image: image1,
//         text: 'Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике. ',
//
//     },
//     {
//         id: uuidv4(),
//         image: image2,
//         text: 'Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике.',
//
//     },
//     {
//         id: uuidv4(),
//         image: image3,
//         text: 'Курс по Python/Django под руководством Алексея выдался продуктивным. Прежде всего, благодаря наличию обратной связи и предоставлению исчерпывающей информации по всем вопросам.Отдельная благодарность Алексею за умение грамотно и доступно излагать изучаемый материал. Как в теории, так и на практике.',
//
//     },
// ];
// export const MySlider = () => {
//     const [isModalActive, setIsModalActive] = useState(null)
//
//
//     const changeCurrentSlide = (modalStatus) => {
//         !modalStatus ? setIsModalActive(null) : setIsModalActive(modalStatus)
//     }
//
//
//
//
//
//
//     return (
//         <div className={style.sliderContainer}>
//
//             {isModalActive && <Modal><SlideMobile id={isModalActive.id}
//                                                  image={isModalActive.image}
//                                                  text={isModalActive.text}
//                                                  callBack={changeCurrentSlide}
//                                                  activeModal={isModalActive}
//             />
//             </Modal>}
//
//             {slides.map((item, index) =>
//                 <div key={item.id} className={style.slide}>
//                 <SlideMobile   callBack={changeCurrentSlide}  id={item.id}
//                                                       image={item.image} text={item.text} activeModal={isModalActive}
//             /></div>
//             )}
//         </div>
//     );
// };
//
// export const SlideMobile = ({image, text, id, callBack, activeModal}) => {
//
//     const [isHidden, setHidden] = useState(false)
//
//     const onClickHideReview = () => {
//         setHidden(true)
//         callBack({id, image, text})
//     }
//
//     const closeModal = () => {
//         callBack(null)
//     }
//
//     useEffect(() => {
//         setHidden(false);
//     }, [activeModal]);
//
//     return (
//         <div className={styleSlide.slide}>
//             <div className={styleSlide.picture}>
//                 {(isHidden || !!activeModal) && <div  onClick={closeModal} className={styleSlide.close}><Close/></div>}
//                 <div>
//                 <img  src={image}/>
//                 </div>
//             </div>
//             <div className={styleSlide.review}>
//                 <p className={`${styleSlide.text} ${!isHidden && !activeModal ? styleSlide.shownText : ''}`}>{text}</p>
//                 {activeModal && !isHidden &&  <div className={styleSlide.link}><a href="https://www.linkedin.com/" target="_blank"><Linked/></a></div>}
//
//
//                 {!activeModal && !isHidden && <div onClick={onClickHideReview} className={styleSlide.click}>
//                     <span>Читать далее</span>
//
//                 </div>}
//
//             </div>
//
//         </div>
//     )
// }
//
//
//
//
//
//
//
//
import React, {useEffect, useState} from 'react';
import style from './slider.module.scss';
import styleSlide from './slide.module.scss'
import SwipeableViews from 'react-swipeable-views';

import image1 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
import image2 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
import image3 from '../../assets/pictures/Photos/reviews mobile/Анастасия Литвин.png';
import {ReactComponent as Close} from "../../assets/pictures/svg/exit review mobile/Выйти CTA.svg";
import {ReactComponent as Linked} from "../../assets/pictures/svg/linked/Linked in logo.svg";
import {v4 as uuidv4} from "uuid";
import {Modal} from "../../Modal/Modal";



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
                resistance
                containerStyle={{ width: '65%'}}

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

export const SlideMobile = ({image, text, id, callBack, activeModal}) => {



    const onClickHideReview = () => {
        callBack({id, image, text})
    }

    const closeModal = () => {
        callBack(null)
    }


    return (
        <div className={styleSlide.slide}>
            <div className={styleSlide.picture}>
                {activeModal && <div  onClick={closeModal} className={styleSlide.close}><Close/></div>}
                <div>
                    <img  src={image} alt='avatar'/>
                </div>
            </div>
            <div className={styleSlide.review}>
                <p className={`${styleSlide.text} ${!activeModal ? styleSlide.shownText : ''}`}>{text}</p>
                {activeModal && <div className={styleSlide.link}><a href="https://www.linkedin.com/" target="_blank"><Linked/></a></div>}


                {!activeModal && <div  className={styleSlide.click}>
                    <span onClick={onClickHideReview}>Читать далее</span>

                </div>}

            </div>

        </div>
    )
}









