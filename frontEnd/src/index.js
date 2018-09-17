import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { store } from "./createStore";
import { Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

const history = createHashHistory();

const wrapper = (
    <Provider store= {store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

ReactDOM.render(wrapper, document.getElementById('root'));
registerServiceWorker();
 