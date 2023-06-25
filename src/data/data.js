import style from "../Pages/header/header.module.scss";
import React from "react";

export const menuList = [
    {id: 1, name: 'Обо мне', path: 'aboutMe', isRoute: false},
    {id: 2, name: 'Преподавание', path: 'teaching', isRoute: false},
    {id: 3, name: 'О школе', path: 'school', isRoute: false},
    {id: 4, name: 'Отзывы учеников', path: 'reviews', isRoute: false},
    {id: 5, name: 'Контакты', path: 'contacts', isRoute: false},
    {id: 6, name: 'Авторский курс', path: 'course', isRoute: false},
    {id: 7, name: 'Видео о курсах', path: 'video', isRoute: false},
    {id: 8, name: 'Пробные уроки', path: '', isRoute: true},

];

export const videoList = [
    {id: 1, name: "Курс middle за два года введение", url: 'https://www.youtube.com/embed/3IPTxtBCkH8'},
    {id: 2, name: "Курс middle за два года введение", url: 'https://www.youtube.com/embed/3IPTxtBCkH8'},
    {id: 3, name: "Курс middle за два года введение", url: 'https://www.youtube.com/embed/3IPTxtBCkH8'},
    {id: 4, name: "Курс middle за два года введение", url: 'https://www.youtube.com/embed/3IPTxtBCkH8'},
]

//
// const videoLessons = [
//     {
//         id: 1, svg: '', isActive:false,  videoLessonsList:
//             [
//                 {id: 1, url: '', isShown: true},
//                 {id: 2, url: '', isShown: false},
//                 {id: 2, url: '', isShown: false},
//             ]
//     },
//     {
//         id: 1, svg: '', isActive:false, videoLessonsList:
//             [
//                 {id: 1, url: '', isShown: true},
//                 {id: 1, url: '', isShown: true},
//                 {id: 1, url: '', isShown: true},
//             ]
//     },
// ]
//


    // <div className={style.aaa}>
    // <img src={`data:image/svg+xml,${encodeURIComponent(aaa)}`} alt="" />
    // </div>