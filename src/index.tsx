import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AddPost, state, stateType} from './redux/state'


export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPost={AddPost}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerender()
