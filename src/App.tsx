import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Store} from "redux";
import DialogsComposeComponent from './components/Dialogs/DialogsContainer'
import UsersComposeComponent from  './components/Users/UsersContainer'
import HeaderContainerApi from "./components/Header/HeaderContainerApi";
import {Login} from "./components/Login";
import ProfileComposeComponent from './components/Profile/ProfileContainer'

export type AppPropsType = {
    store: Store
}


function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <HeaderContainerApi/>
            <Navbar state={props.store.getState()}/>
            <div className="app-wrapper-content">
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/profile/:userId?'} render={
                    () => <ProfileComposeComponent/>}/>
                <Route path={'/dialogs/*'} render={
                    () => <DialogsComposeComponent/>}/>
                <Route path={'/users/*'} render={
                    () => <UsersComposeComponent/>
                }/>
            </div>
        </div>
        // <Route path="/page/:friendlyName">
        //     <Route path=":sort" element={<Page />} />
        //     <Route path="" element={<Page />} />
        // </Route>

    );
}

export default App;
