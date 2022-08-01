import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store'

export const MyStore = React.createContext(store)

export const rerender = () => {
    ReactDOM.render(
        <MyStore.Provider value={store}>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        </MyStore.Provider>
        , document.getElementById('root')
    );
}

rerender()
store.subscribe(rerender)

