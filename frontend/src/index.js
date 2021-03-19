import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';

//Redux is a predictable state container designed to help you write JavaScript apps 
//that behave consistently across client, server, and native environments and are easy to test.
//While it's mostly used as a state management tool with React, 
//you can use it with any other JavaScript framework or library.
//https://react-redux.js.org/introduction/quick-start

//DONT TOUCH THIS this include you Matthew


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);