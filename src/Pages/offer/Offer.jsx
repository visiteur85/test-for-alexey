import React, {useState} from 'react';
import style from './offer.module.scss'
import {Diagram} from "./components/Diagram/Diagram";
import {Button} from "../../Components/button.jsx/Button";
import {ReactComponent as Lion} from "../../assets/pictures/svg/lion/Лев лого offer.svg";
import {ReactComponent as LionBig} from "../../assets/pictures/svg/lion/Лев лого offer big.svg";
import {Modal} from "../../Modal/Modal";
import {Form} from "./components/form/Form";
import {SuccessForm} from "./components/successForm/SuccessForm";
import {Element} from "react-scroll";


export const Offer = () => {
    const [isModal, setIsModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false)

    const onModal = () => {
        setIsModal(prevState => !prevState)
    }

    const setSuccess = () => {
        setIsSuccess(prevState => !prevState)
    }

    const submitForm = () => {
        setIsModal(prevState => !prevState);
        setIsSuccess(prevState => !prevState)
    }
    return (
        <>
            <Element name='course'></Element>
            {isModal && <Modal>{isSuccess ? <SuccessForm setSuccess={submitForm}/> :
                <Form formSubmit={setSuccess} setModal={onModal}/>}</Modal>}
            <section className={style.offerWrapper}>
                <div className='container'>
                    <div className={style.wrapper}>
                <div className={style.offer}>
                    <Lion className={style.lion}/>
                    <LionBig className={style.bigLion}/>
                    <div>
                        <h3>Особое предложение</h3>
                        <h4>Курс по Front-end разработке с нуля</h4>
                        <p className={style.text}>Это специальный курс. Он отличается от остальных в школе ITEC тем, что
                            попасть на него можно только после личной консультации со мной.</p>
                        <p className={style.text}>После проходжения курсы ты сможешь писать код на Python, создавать
                            веб-приложения с помощью Django, работать с базами данных, создавать телеграм-боты,
                            проектировать веб-API, использовать Celery, HTTP, Docker, GitHub и Postman.</p>
                    </div>
                    <Diagram/>
                </div>
                <div className={style.button}>
                    <Button callback={onModal} text="Оставить заявку"/>
                </div>
                    </div>
                </div>
            </section>
        </>
    );
};

