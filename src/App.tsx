import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Store} from "redux";


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
                    <Route path={'/profile/'} element={
                        <Profile
                            store={props.store}
                        />}/>
                    <Route path={'/dialogs/*'} element={
                        <DialogsContainer
                            store={props.store}
                        />
                    }/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
