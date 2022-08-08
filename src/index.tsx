import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store'
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);



