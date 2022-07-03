import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {stateType} from "./redux/state";



export type AppPropsType ={
    state:stateType
}

function App(props:AppPropsType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/profile/'} render={() => <Profile state={props.state}  />}/>
                <Route path={'/dialogs/'} render={() => <Dialogs state={props.state}  />}/>
            </div>
        </div>
    );
}

export default App;
