import React, {useEffect, useState} from 'react';
import style from './reviewsDesktop.module.scss';
import photoRoman from '../../../../assets/pictures/Photos/rewievs/Роман.png';
import photoAnastasia from '../../../../assets/pictures/Photos/rewievs/Анастасия Литвин.png';
import photoDaria from '../../../../assets/pictures/Photos/rewievs/Дарья Стасевич.png';
import photoSergey from '../../../../assets/pictures/Photos/rewievs/Сергей Барауля.png';
import photoSergey1 from '../../../../assets/pictures/Photos/rewievs/Сергей Барауля1.png';
import {ReactComponent as Lion} from "../../../../assets/pictures/svg/lion/Vector.svg";
import {CardReview} from './CardReview/CardReview'


import {Title} from "../../../../Components/Title/Title";
import avatarAlexey from '../../../../assets/pictures/Photos/rewievs/image 5.png'
import {ReactComponent as Circle} from "../../../../assets/pictures/svg/circles/Обводка с пунктами.svg";


const sliderData = [
    {
        id: 1,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
    {
        id: 2,
        photo: photoRoman,
        name: 'Роман Фищенко',
        description: 'Спасибо Алексею за знания по фронтенд разработке!🔥 Алексей всегда готов помочь и ответить на возникающие вопросы'
    },
    {
        id: 3,
        photo: photoSergey,
        name: 'Сергей Барауля ',
        description: 'Я проходил у Алексея курс "Python/Django", а затем курс углубленного изучения Python. Понравилась подача материала'
    },
    {
        id: 4,
        photo: photoSergey1,
        name: 'Сергей Барауля 3',
        description: 'Я проходил у Алексея курс "Python/Django", а затем курс углубленного изучения Python. Понравилась подача материала'
    },
    {
        id: 5,
        photo: photoDaria,
        name: 'Дарья Стасевич',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку.'
    },
    {
        id: 6,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
    {
        id: 7,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
    {
        id: 8,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
    {
        id: 9,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
    {
        id: 10,
        photo: photoAnastasia,
        name: 'Анастасия Литвин',
        description: 'Алексей замечательный преподаватель и человек) Я очень благодарна ему за знания, веру и поддержку. '
    },
]
export const ReviewsDesktop = () => {
    const [currentSlider, setCurrentSlider] = useState([])
    const limit = 5
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setCurrentSlider(sliderData.slice(offset, offset + limit))
    }, [offset])
    const prevPage = () => setOffset(prevState => prevState - limit)
    const nextPage = () => setOffset(prevState => prevState + limit)

    return (
        <section className={style.reviewsWrap}>
            <Lion className={style.lion}/>
            <div className={style.title}>
                <Title title="Отзывы учеников"/>
            </div>
            <div className={style.text}>
                <p>Оценит себя, как учителя, я могу по результатам и успехам учеников. По тому, получили ли они то, за
                    чем пришли на обучение ко мне.</p>
                <p>Поэтому лучше всего описать меня, как преподавателя, смогут только сами ученики.
                    Вы также можете связаться с ними по ссылкам в конце каждого отзыва, если хотите узнать больше лично
                    от них.</p>
            </div>


            <div className={style.sliderWrap}>
                <div className={style.centralPhoto}>
                    <div className={style.avatarWrapper}>
                        <img className={style.avatar} src={avatarAlexey} alt="Alexey"/>
                        <div className={style.circle}>
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className={style.rowOnde}>

                    {currentSlider.slice(0, 2).map((person, index) => <CardReview person={person} index={index}
                                                                                  key={person.id} row={1}/>)}
                </div>
                <div className={style.rowTwo}>
                    <div className={`${style.arrow} ${style.arrowLeft}
                     ${!offset ? style.disable : ''}
                     `} onClick={prevPage}></div>
                    <div className={`${style.arrow} ${style.arrowRight} 
                    ${offset * limit > sliderData.length ? style.disable : ''}
                    `}
                         onClick={nextPage}></div>
                    {currentSlider.slice(2, 5).map((person, index) => <CardReview person={person} index={index}
                                                                                  key={person.id} row={2}/>)}
                </div>
            </div>
        </section>
    );
}






