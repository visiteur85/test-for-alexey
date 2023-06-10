import './App.css';
import {Header} from "./Components/Header/Header";
import {Avatar} from "./Pages/avatar/Avatar";
import {AboutMe} from "./Pages/aboutMe/AboutMe";
import {Reviews} from "./Pages/reviews/Reviews";
import {Teaching} from "./Pages/teaching/Teaching";

function App() {
    return (
        <div className="App">
            <Header/>
            <Avatar/>
            <AboutMe/>
            <Teaching/>
            {/*<Reviews/>*/}
        </div>
    );
}

export default App;
