import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AddPost, newPostText, state, stateType} from './redux/state'


export const rerender = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPost={AddPost} newPostText={newPostText}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
