import React, {useEffect} from 'react';
import style from './modal.module.scss'

export const Modal = ({children}) => {
    useEffect(() => {
        const scrollTop = window.scrollY
        const bodyNode = document.querySelector('body')
        if (bodyNode) {
            bodyNode.style.position = 'fixed'
            bodyNode.style.top = -scrollTop + 'px'
            bodyNode.style.left = '0px'
            bodyNode.style.right = '0px'
        }
        return () => {
            if (bodyNode) {
                bodyNode.style.removeProperty('top')
                bodyNode.style.removeProperty('left')
                bodyNode.style.removeProperty('right')
                bodyNode.style.removeProperty('position')
                window.scrollTo(0, scrollTop)
            }
        }
    }, [])
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                {children}
            </div>

        </div>
    );
};

