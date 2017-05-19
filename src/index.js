import React from 'react';
import ReactDOM from 'react-dom';
import Router from  "./router";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import rootReducers from './reducer';

const store = createStore(
  rootReducers,
  applyMiddleware(reduxPromise)
);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
