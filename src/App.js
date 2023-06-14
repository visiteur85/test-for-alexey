import './App.css';
import {Header} from "./Components/Header/Header";
import {Avatar} from "./Pages/avatar/Avatar";
import {AboutMe} from "./Pages/aboutMe/AboutMe";

import {Teaching} from "./Pages/teaching/Teaching";
import Reviews from "./Pages/reviews/Reviews";

function App() {
    return (
        <div className="App">
            <Header/>
            <Avatar/>
            <AboutMe/>
            <Teaching/>
            <Reviews/>
            {/*не забыть удалить блок ниже, он просто для теста пока*/}
            <Teaching/>

        </div>
    );
}

export default App;
