import React from 'react';
import style from './form.module.scss'
import {Input} from "../../../../Components/input/Input";
import {Button} from "../../../../Components/button.jsx/Button";
import {ReactComponent as CloseButton} from "../../../../assets/pictures/svg/closeButton/Выйти CTA.svg";

export const Form = ({setModal, formSubmit}) => {

    const setModalOff = ()=> {
        setModal()
    }

    const setSubmit = ()=> {
        formSubmit()
    }




    return (
        <div className={style.form}>
            <CloseButton onClick={setModalOff} className={style.closeButton}/>
            <p className={style.text}>Я рад, что предложение тебя заинтересовало!</p>
            <p className={style.text}>Заполни форму ниже, и менеджер свяжется</p>
            <p className={style.text}>с тобой, чтобы обсудить детали</p>
            <div className={style.formDesctop}>
                <p className={style.formText}>Введите ваше имя</p>
                <div className={style.input}>
                <Input type='text'/>
                </div>
                <p className={style.formText}>Укажите номер телефона</p>
                <div className={style.input}>
                <Input type='tel' className={style.input}/>
                </div>
              <div className={style.btn}>
                <Button callback={setSubmit} text='Отправить' size='small'/>
              </div>
            </div>
        </div>
    );
};

