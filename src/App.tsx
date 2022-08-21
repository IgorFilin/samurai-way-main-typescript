import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export type AppPropsType = {
    store: Store
}


function App(props: AppPropsType) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.store.getState()}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/profile/'} element={
                        <Profile/>}/>
                    <Route path={'/dialogs/*'} element={
                        <DialogsContainer/>}/>
                    <Route path={'/users/'} element={
                        <UsersContainer/>
                    }/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
