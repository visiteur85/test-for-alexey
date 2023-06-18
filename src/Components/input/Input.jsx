import React from 'react';
import style from './input.module.scss'


export const Input = ({type}) => {
    return (
        <div>
            <input type={type}/>
        </div>
    );
};

