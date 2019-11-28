import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // we need access to the createStore method to be able to set up a store
import thunk from 'redux-thunk'; // for async redux
import { Provider } from 'react-redux'; // any component we wrap in the provider will have access to the Redux store

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
