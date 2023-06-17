import React from 'react';
import style from "./diagram.module.scss";

export const Diagram = () => {
    return (
        <div className={style.diagram}>
            <div className={style.cardWrapper}>
                <div className={style.cardText}>
                    <p className={style.mainText}>5</p>
                    <p className={style.textCircle}>месяцев</p>
                </div>
            </div>
            <div className={style.cardWrapper}>
                <div className={style.cardText}>
                    <p className={style.mainText}>20</p>
                    <p className={style.textCircle}>мест</p>
                </div>
            </div>
            <div className={style.cardWrapper}>
                <div className={style.cardText}>
                    <p className={`${style.textCircle} ${style.colorText} ${style.strikethrough}`}>3250</p>
                    <p className={style.mainText}>2000</p>
                    <p className={style.textCircle}>BYN</p>
                </div>
            </div>
            <div className={style.cardWrapper}>
                <div className={style.cardText}>
                    <p className={`${style.textCircle} ${style.colorText}`}>Старт</p>
                    <p className={style.mainText}>10</p>
                    <p className={style.textCircle}>августа</p>
                </div>
            </div>

        </div>
    );
};

