import React from 'react';
import style from './modal.module.scss'

export const Modal = ({children}) => {
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                {children}
            </div>

        </div>
    );
};

