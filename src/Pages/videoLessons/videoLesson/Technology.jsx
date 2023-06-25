import style from "./technology.module.scss";
import React from "react";

export const Technology = ({id, name, url, isShown, callback}) => {

    const changeActiveVideo = () => {
        callback(id)
    }
    return (
        <div className={style.technology}>
            <div onClick={changeActiveVideo} className={`${style.lesson} ${isShown ? style.active : ''}`}>{name}</div>
            {isShown && <div className={style.frame}>
                <iframe src={url} title="YouTube video player"
                        allow="accelerometer; autoplay;  gyroscope; picture-in-picture; web-share"
                        allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
            </div>}

        </div>
    )
}