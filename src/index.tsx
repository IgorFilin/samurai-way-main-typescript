import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/state'


export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
store.subscribe(rerender)
rerender()