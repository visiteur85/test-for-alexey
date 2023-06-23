import './App.css';
import {Header} from "./Pages/header/Header";
import {Avatar} from "./Pages/avatar/Avatar";
import {AboutMe} from "./Pages/aboutMe/AboutMe";

import {Teaching} from "./Pages/teaching/Teaching";
import Reviews from "./Pages/reviews/Reviews";
import React from "react";
import {AboutSchool} from "./Pages/aboutScool/AboutSchool";
import {Offer} from "./Pages/offer/Offer";
import {Footer} from "./Pages/footer/Footer";
import {Video} from "./Pages/video/Video";


function App() {
    return (
        <div className="App">
            <header className='header'>
                <Header/>
            </header>
            <main className='main'>
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
            </main>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
