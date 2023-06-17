import React from 'react';
import style from './button.module.scss'

export const Button = ({text, size}) => {
    return (
        <div>
            <button className={`${style.btn} ${size === 'small' ? style.btnSmall : style.btnBig }`}>
                <span>
                {text}
                </span>
            </button>
        </div>
    );
};

