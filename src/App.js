import './App.css';
import {Header} from "./Pages/header/Header";
import {Avatar} from "./Pages/avatar/Avatar";
import {AboutMe} from "./Pages/aboutMe/AboutMe";

import {Teaching} from "./Pages/teaching/Teaching";
import Reviews from "./Pages/reviews/Reviews";
import React, {useState} from "react";
import {AboutSchool} from "./Pages/aboutScool/AboutSchool";
import {Offer} from "./Pages/offer/Offer";
import {Footer} from "./Pages/footer/Footer";
import {Video} from "./Pages/video/Video";
import {Navigate, Route, Routes} from "react-router-dom";
import {VideoLessons} from "./Pages/videoLessons/VideoLessons";


function App() {
    // контроль состояния открытия или закрытия бурег меню. он был вынесен сюда, посколькку мы должны контролировать это
    // состояние не только в хеадер, но и в футер
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);

    const controlBurgerMenu = (isOpen)=> {
        setNavMenuOpen(isOpen)
    }

    return (
        <div className="App">
            <header className='header'>
                <Header setNavMenuOpen={controlBurgerMenu} isNavMenuOpen={isNavMenuOpen}/>
            </header>
            <Routes>
                <Route path={'/'} element={<main className='main'>
                    <Avatar/>
                    <Video/>
                    <div className='background'>
                        <AboutMe/>
                    </div>

                    <Teaching/>
                    <div className='background'>
                        <AboutSchool/>
                    </div>
                    <Reviews/>
                    <div className='background'>
                        <Offer/>
                    </div>
                </main>}/>
                <Route path={'/videoLessons'} element={
                    <div>
                    <VideoLessons/>
                    </div>
                }/>
                <Route path='*' element={<Navigate to={'/'}/>}/>

            </Routes>
            <footer className='footer'>
                <Footer setNavMenuOpen={controlBurgerMenu}/>
            </footer>
        </div>
    );
}

export default App;
