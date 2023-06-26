import React from 'react';
import style from './navMenu.module.scss'
import {Link} from 'react-scroll';
import {NavLink} from "react-router-dom";

export const NavMenu = ({menuList, callback, block}) => {


    return (
        <nav>
            <ul className={`${block === 'footer' ? style.blockFooter : style.list}`}>
                {menuList.map(({id, path, name, isRoute}) => (
                    <li className={`${block === 'footer' ? style.blockFooter__item : style.list__item}`} key={id}>
                        {isRoute ? <NavLink onClick={()=>callback(false)} to={'/videoLessons'}>{name}</NavLink> :
                            <Link onClick={()=>callback(false)} offset={-45} smooth={true} duration={500} to={path}>{name} </Link>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

