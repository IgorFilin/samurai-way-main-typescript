import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {AddMessages, AddPost, AddTextMessage, state, stateType} from "./redux/state";


export type AppPropsType = {
    state: stateType
    AddPost: () => void
    NewPostText: (text: string) => void
    AddMessages:()=>void
    AddTextMessage:(t:string)=>void
}


function App(props: AppPropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/'} element={<Profile ProfilePage={props.state.ProfilePage}
                                                                AddPost={props.AddPost}
                                                                NewPostText={props.NewPostText}/>}/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs
                        DialogPage={props.state.DialogPage}
                        AddMessages={AddMessages}
                        AddTextMessage={AddTextMessage}
                        />
                    }/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
