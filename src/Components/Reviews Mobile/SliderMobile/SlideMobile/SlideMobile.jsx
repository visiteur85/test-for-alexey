import styleSlide from "./slide.module.scss";
import React from "react";
import {ReactComponent as Close} from "../../../../assets/pictures/svg/exit review mobile/Выйти CTA.svg";
import {ReactComponent as Linked} from "../../../../assets/pictures/svg/linked/Linked in logo.svg";

export const SlideMobile = ({image, text, id, callBack, activeModal}) => {


    const onClickHideReview = () => {
        callBack({id, image, text})
    }

    const closeModal = () => {
        callBack(null)
    }


    return (
        <div className={styleSlide.slide}>
            <div className={styleSlide.picture}>
                {activeModal && <div onClick={closeModal} className={styleSlide.close}><Close/></div>}
                <div>
                    <img src={image} alt='avatar'/>
                </div>
            </div>
            <div className={styleSlide.review}>
                <p className={`${styleSlide.text} ${!activeModal ? styleSlide.shownText : ''}`}>{text}</p>
                {activeModal &&
                    <div className={styleSlide.link}><a href="https://www.linkedin.com/" target="_blank"><Linked/></a>
                    </div>}


                {!activeModal && <div className={styleSlide.click}>
                    <span onClick={onClickHideReview}>Читать далее</span>

                </div>}

            </div>

        </div>
    )
}