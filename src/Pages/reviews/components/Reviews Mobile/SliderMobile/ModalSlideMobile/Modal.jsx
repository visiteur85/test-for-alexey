import React from 'react';
import style from './modal.module.scss'

export const Modal = ({onClose, children}) => {
    return (
        <div className={style.module}>

            <div className={style.module__content}>
                {children}
            </div>
        </div>
    );
};

