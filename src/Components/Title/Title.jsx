import React from 'react';
import style from './title.module.scss'

export const Title = ({title}) => {
    return (
        <h2 className={style.text}>
            {title}
        </h2>
    );
};

