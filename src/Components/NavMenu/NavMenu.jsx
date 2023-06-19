import React from 'react';
import style from './navMenu.module.scss'
import {Link} from 'react-scroll';

export const NavMenu = ({menuList, callback, block}) => {


    return (
        <nav>
            <ul className={`${block === 'footer' ? style.blockFooter : style.list}`}>
                {menuList.map(({id, path, name}) => (
                    <li className={`${block === 'footer' ? style.blockFooter__item : style.list__item}`} key={id}>
                        <Link onClick={callback} offset={-45} smooth={true} duration={500} to={path}>{name} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

