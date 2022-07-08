import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {AddPost, stateType} from "./redux/state";


export type AppPropsType = {
    state: stateType
    AddPost:(text:string)=>void
    newPostText:(text:string)=> void
}



function App(props: AppPropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/'} element={<Profile state={props.state} AddPost={props.AddPost} newPostText={props.newPostText}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs state={props.state}/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
