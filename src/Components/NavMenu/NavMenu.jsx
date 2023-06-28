import React from 'react';
import style from './navMenu.module.scss'
import {Link} from 'react-scroll';
import {NavLink} from "react-router-dom";

export const NavMenu = ({menuList, callback, block}) => {

    const routingAndChangeNavMenu = (path) => {
        callback(path)
    };


    return (
        <nav>
            <ul className={`${block === 'footer' ? style.blockFooter : style.list}`}>
                {menuList.map(({id, path, name, isRoute}) => (
                    <li className={`${block === 'footer' ? style.blockFooter__item : style.list__item}`} key={id}>
                        {isRoute ? <NavLink onClick={routingAndChangeNavMenu} to={'/videoLessons'}>{name}</NavLink> :
                            <Link onClick={() => routingAndChangeNavMenu(path)} offset={-45} smooth={true}
                                  duration={500} to={path}>{name} </Link>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

