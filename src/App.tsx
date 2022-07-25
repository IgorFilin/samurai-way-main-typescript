import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {
    DispatchTypeAppAddMessage,
    DispatchTypeAppAddTextMessage,
    DispatchTypeAppNewPostText,
    DispatchTypeAppPost,
    stateType
} from "./redux/state";


export type AppPropsType = {
    state: stateType
    dispatch: (a: DispatchTypeAppPost | DispatchTypeAppNewPostText | DispatchTypeAppAddTextMessage | DispatchTypeAppAddMessage) => void
}


function App(props: AppPropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/'} element={
                        <Profile
                            ProfilePage={props.state.ProfilePage}
                            dispatch={props.dispatch}
                        />}/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs
                            DialogPage={props.state.DialogPage}
                            dispatch={props.dispatch}
                        />
                    }/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
