import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'; // we need access to the createStore method to be able to set up a store
import thunk from 'redux-thunk'; // for async redux
import { Provider } from 'react-redux';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducer = '';

// the store is where you store your data globally;
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// the reducer will tell us what to do with our store based on certain actions;
// we send an action object to our reducer and the reducer is responsible for taking in that action object
// and deciding - based on how the reducer is setup - what we want to update in our current store to then
// return a new version of our store;

ReactDOM.render(
  // wrapping a component in Provider will give this component and all children components access to the global store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
