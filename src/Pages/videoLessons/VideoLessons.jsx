import React, {useState} from 'react';
import style from './videoLessons.module.scss'
import {Title} from "../../Components/title/Title";
import {videoLessons} from "../../data/data";
import {Technology} from "./videoLesson/Technology";

export const VideoLessons = () => {
    const [chosenTech, setChosenTech] = useState(null);

    const onShowVideoLessons = (id) => {
        videoLessons.map((tech) => {
            return tech.id === id ? setChosenTech(tech) : ''
        })
    }

    const changeActiveLesson = (id) => {
        if (chosenTech && chosenTech.videoLessonsList) {
            const updatedTech = {
                ...chosenTech,
                videoLessonsList: chosenTech.videoLessonsList.map((lesson) => {
                    return lesson.id === id ? {...lesson, isShown: true} : {...lesson, isShown: false};
                })
            };
            setChosenTech(updatedTech);
        }
    }

    return (
        <section className={style.videoLessons}>
            <div className='container'>
                <div className={style.title}>
                    <Title title='Пробные видео уроки'/>
                </div>
                <div className={style.technologies}>
                    {videoLessons.map(({id, svg, title}) =>
                        <div onClick={() => {
                            onShowVideoLessons(id)
                        }} className={style.tech} key={id}>
                            <div className={style.logo}>
                                <img src={`data:image/svg+xml,${encodeURIComponent(svg)}`} alt=""/>
                            </div>
                            <p className={style.nameOfTech}>{title}</p>

                        </div>
                    )}
                </div>
                {chosenTech && <h3>Уроки по {chosenTech.title}</h3>}
                {chosenTech && chosenTech.videoLessonsList.map(({id, name, url, isShown}) =>
                    <div className={style.oneTech} key={id}>{<Technology id={id} name={name} isShown={isShown} url={url}
                                                                         callback={() => {
                                                                             changeActiveLesson(id)
                                                                         }}/>}</div>)}
            </div>
        </section>
    );
};



