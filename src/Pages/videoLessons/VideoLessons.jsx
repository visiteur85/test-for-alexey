import React, {useState} from 'react';
import style from './videoLessons.module.scss'
import {Title} from "../../Components/title/Title";
import {videoLessons} from "../../data/data";

export const VideoLessons = () => {
    const [chosenTech, setChosenTech] = useState(null);

    const onShowVideoLessons = (id) => {
        videoLessons.map((tech) => {
            return tech.id === id ? setChosenTech(tech.videoLessonsList) : ''
        })
    }

    const changeActiveLesson = (id) => {
        chosenTech && setChosenTech(chosenTech.map((lesson)=> { return lesson.id === id ? {...lesson, isShown:true} : {...lesson, isShown: false}} ))

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
                {chosenTech && chosenTech.map(({id, name, url, isShown}) =>
                    <div key={id}>{<Technology id={id} name={name} isShown={isShown} url={url} callback={()=>{changeActiveLesson(id)}} />}</div>)}
            </div>
        </section>
    );
};

export const Technology = ({id, name, url, isShown, callback}) => {

    const changeActiveVideo = ()=> {
        callback(id)
    }
    return (
        <div className={style.technology}>
            <div onClick={changeActiveVideo}>{name}</div>
            {isShown && <div>
                <iframe src={url} title="YouTube video player"
                        allow="accelerometer; autoplay;  gyroscope; picture-in-picture; web-share"
                        allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
            </div>}

        </div>
    )
}

