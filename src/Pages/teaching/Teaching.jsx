import React from 'react';
import style from './teaching.module.scss'
import {Title} from "../../Components/Title/Title";

export const Teaching = () => {
    return (
       <section className={style.teaching} >
           <Title title="Преподавание"/>
       </section>
    );
};

