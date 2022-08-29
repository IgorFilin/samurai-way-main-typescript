import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileMainComponent} from "./components/Profile/ProfileMainComponent";
import HeaderContainerApi from "./components/Header/HeaderContainerApi";


export type AppPropsType = {
    store: Store
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <HeaderContainerApi/>
            <Navbar state={props.store.getState()}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/:userId'} element={
                        <ProfileMainComponent/>}/>
                    <Route path={'/profile/'} element={
                        <ProfileMainComponent/>}/>
                    <Route path={'/dialogs/*'} element={
                        <DialogsContainer/>}/>
                    <Route path={'/users/*'} element={
                        <UsersContainer/>
                    }/>
                </Routes>
            </div>
        </div>
        // <Route path="/page/:friendlyName">
        //     <Route path=":sort" element={<Page />} />
        //     <Route path="" element={<Page />} />
        // </Route>

    );
}

export default App;
