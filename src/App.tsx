import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/profile/'} render={() => <Profile/>}/>
                <Route path={'/dialogs/'} render={() => <Dialogs messages={'HI'}/>}    />
            </div>
        </div>
    );
}

export default App;
