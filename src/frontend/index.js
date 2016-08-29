/*jshint esversion: 6 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tanrendAdvisorApp from './reducer.js';
import App from './App.js';


let store = createStore(tanrendAdvisorApp, {
    loading: false,
    course1: '',
    course2: '',
    subDepartment: 'a',
    semester: '1',
    advice: 'Üdv.'
}, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension && process.env.NODE_ENV !== 'production' ?
        window.devToolsExtension() : f => f
));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
