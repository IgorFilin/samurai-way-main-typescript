import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {stateType} from "./redux/state";


export type AppPropsType = {
    state: stateType
}

function App(props: AppPropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/'} element={<Profile state={props.state}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs state={props.state}/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
