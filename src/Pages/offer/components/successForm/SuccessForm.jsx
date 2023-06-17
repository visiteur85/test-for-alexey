import React from 'react';
import style from './successForm.module.scss'
import {ReactComponent as Ok} from "../../../../assets/pictures/svg/ok/Ellipse 30.svg";
import {ReactComponent as Close} from "../../../../assets/pictures/svg/closeButton/Выйти CTA.svg";
import {ReactComponent as Lion} from "../../../../assets/pictures/svg/lion/Лев лого.svg";

export const SuccessForm = ({setSuccess}) => {

    const closeModal = () => {
        setSuccess()
    }

    return (
        <div className={style.success}>
            <div className={style.lion}>
                <Lion/>
            </div>
            <div className={style.closeButton}>
                <Close onClick={closeModal}/>
            </div>
            <p>Твоя заявка принята!</p>
            <div className={style.ok}>
                <Ok/>
            </div>
        </div>
    );
};

