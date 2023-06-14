import React from 'react';
import style from './navMenu.module.scss'
import {Link} from 'react-scroll';

export const NavMenu = ({menuList, callback}) => {

    return (
        <nav>
            <ul  className={style.list}>
                {menuList.map(({id, path, name}) => (
                    <li  className={style.list__item} key={id}>
                        <Link    onClick={callback} smooth={true} duration={500} to={path}>{name} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

