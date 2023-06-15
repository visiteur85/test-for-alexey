import React from 'react';
import style from './reviews.module.scss'
import {ReviewsMobile} from "../../Components/Reviews Mobile/ReviewsMobile";


const Reviews = () => {
    return (
        <section className={style.reviews}>
            <ReviewsMobile/>
        </section>
    );
};

export default Reviews;