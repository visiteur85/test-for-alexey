import React from 'react';
import style from './navMenu.module.scss'

export const NavMenu = ({menuList}) => {
    return (
        <nav>
            <ul className={style.list}>
                {menuList.map((item, index) => (
                    <li className={style.list__item} key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

