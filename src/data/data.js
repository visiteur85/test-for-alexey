import style from "../Pages/header/header.module.scss";
import React from "react";
import {goIcon, jsIcon, pythonIcon} from "../assets/icons/technologies";

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


export const videoLessons = [
    {
        id: 1, title: "Python", svg: pythonIcon, videoLessonsList:
            [
                {id: 11, name: 'Урок 1 Python', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: true},
                {id: 12, name: 'Урок 2 Python', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
                {id: 13, name: 'Урок 3 Python', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
            ]
    },
    {
        id: 2, title: "Js (Html/Css)", svg: jsIcon, videoLessonsList:
            [
                {id: 21, name: 'Урок 1 Js', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: true},
                {id: 22, name: 'Урок 2 Js', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
                {id: 12, name: 'Урок 3 Js', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
            ]
    },
    {
        id: 3, title: "Golang", svg: goIcon, videoLessonsList:
            [
                {id: 31, name: 'Урок 1 Go', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: true},
                {id: 32, name: 'Урок 2 Go', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
                {id: 33, name: 'Урок 3 Go', url: 'https://www.youtube.com/embed/3IPTxtBCkH8', isShown: false},
            ]
    },
]
