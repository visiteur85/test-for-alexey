import React, {useState} from "react";
import style from "../CardReview/cardReview.module.scss";
import {ReactComponent as Close} from "../../../assets/pictures/svg/exit review mobile/Выйти CTA.svg";
import {ReactComponent as Linked} from "../../../assets/pictures/svg/linked/Linked in logo@2x.svg";

export const CardReview = ({person, index, row}) => {
    const [isShown, setShown] = useState(false)

    const onShowDescription = () => {
        setShown(prevState => !prevState)
    }

    return <div
        className={`${style.cardWrap} ${style[`index${index}${row}`]} ${isShown ? style.cardWrapIncrease : ''}`}>
        <div className={style.photoWrap}>
            {isShown && <div onClick={onShowDescription} className={style.close}><Close/></div>}

            <div>
                <img src={person.photo} alt='person'/>
            </div>
            <span className={style.name}>{person.name}</span>
        </div>
        <div className={style.description}>
            <div className={style.textDescription}>{person.description}</div>
            {isShown &&
                <div className={style.link}><a href="https://www.linkedin.com/" target="_blank"><Linked/></a>
                </div>}
            {!isShown && <div className={style.click}>
                <span onClick={onShowDescription}>Читать далее</span>

            </div>}
        </div>
    </div>
}