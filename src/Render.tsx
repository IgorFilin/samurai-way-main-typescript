import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AddMessages, AddPost, AddTextMessage, newPostText, state, stateType} from './redux/state'


export const rerender = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPost={AddPost} AddMessages={AddMessages} AddTextMessage={AddTextMessage} NewPostText={newPostText}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
