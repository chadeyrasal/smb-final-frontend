import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // for async redux
import { Provider } from 'react-redux';
import cityReducer from './reducers/cityReducer';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// the store is where you store your data globally;
// the store can be created in another file and then imported into index.js
let store = createStore(cityReducer, composeEnhancers(applyMiddleware(thunk)));

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
