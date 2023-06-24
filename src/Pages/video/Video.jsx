import React, {useState} from 'react';
import {Title} from "../../Components/title/Title";
import style from './video.module.scss'
import {Button} from "../../Components/button.jsx/Button";
import {videoList} from "../../data/data";
import {Element} from "react-scroll";


export const Video = () => {

    let [count, setCount] = useState(1)

    const videoListForBlock = videoList.slice(0, count);

    const showNextVideo = () => {
        setCount(++count)
    }


    return (
        <>
            <Element name='video'></Element>
            <section className={style.video}>
                <div className='container'>
                    <div className={style.videoWrap}>
                        <div className={style.title}>
                            <Title title='Видео о специальном курсе "Midlle за два года:"'/>
                        </div>
                        <div className={style.videoFrame}>
                            {videoListForBlock.map(({id, name, url}) =>
                                <div className={style.videoFrame__item} key={id}>
                                    <h3>{name}</h3>
                                    <div className={style.frame}>
                                        <iframe src={url} title="YouTube video player"
                                                allow="accelerometer; autoplay;  gyroscope; picture-in-picture; web-share"
                                                allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            )}

                        </div>
                        {count < videoList.length &&
                            <div className={style.btn}><Button callback={showNextVideo} text="Показать следующее"/>
                            </div>}


                    </div>
                </div>
            </section>
        </>
    );
};

