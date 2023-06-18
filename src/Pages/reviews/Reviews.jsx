import React from 'react';
import style from './reviews.module.scss'
import {ReviewsMobile} from "./components/Reviews Mobile/ReviewsMobile";
import {ReviewsDesktop} from "./components/Rewies Desktop/ReviewsDesktop";
import {Element} from "react-scroll";


const Reviews = () => {
    return (
        <>
            <Element name='reviews'></Element>
            <section className={style.reviews}>
                <div className={style.reviewsMobile}>
                    <ReviewsMobile/>
                </div>
                <div className={style.reviewsDesktop}>
                    <ReviewsDesktop/>
                </div>
            </section>
        </>
    );
};

export default Reviews;