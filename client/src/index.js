import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { store } from "./createStore";

const wrapper = (
    <Provider store= {store}>
        <App />
    </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
