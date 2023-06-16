import React from 'react';
import style from './reviews.module.scss'
import {ReviewsMobile} from "../../Components/Reviews Mobile/ReviewsMobile";
import {ReviewsDesktop} from "../../Components/Rewies Desktop/ReviewsDesktop";


const Reviews = () => {
    return (
        <section className={style.reviews}>
            <div className={style.reviewsMobile}>
                <ReviewsMobile/>
            </div>
            <div className={style.reviewsDesktop}>
                <ReviewsDesktop/>
            </div>
        </section>
    );
};

export default Reviews;