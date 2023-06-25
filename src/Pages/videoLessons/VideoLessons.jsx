import React, {useState} from 'react';
import style from './videoLessons.module.scss'
import {Title} from "../../Components/title/Title";
import {videoLessons} from "../../data/data";

export const VideoLessons = () => {
    const [chosenTech, setChosenTech ] = useState(null);

    const onShowVideoLessons = (id)=> {
        videoLessons.map((tech)=>{   return tech.id === id ? setChosenTech(tech.videoLessonsList) : ''})
    }

    return (
        <section className={style.videoLessons}>
            <div className='container'>
                <div className={style.title}>
                    <Title title='Пробные видео уроки'/>
                </div>
                <div className={style.technologies}>
                    {videoLessons.map(({id, svg, title}) =>
                        <div onClick={()=>{onShowVideoLessons(id)}} className={style.tech} key={id}>
                            <div className={style.logo}>
                                <img src={`data:image/svg+xml,${encodeURIComponent(svg)}`} alt=""/>
                            </div>
                            <p className={style.nameOfTech}>{title}</p>

                        </div>
                    )}
                </div>
                {chosenTech && chosenTech.map((el)=><div>{el.name}</div>)}
            </div>
        </section>
    );
};

