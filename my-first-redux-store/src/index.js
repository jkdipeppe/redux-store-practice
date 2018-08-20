import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //added code above
import './index.css';
import App from './App';
import itemCounterReducer from './reducers/itemCounterReducer.js'; //added code
import registerServiceWorker from './registerServiceWorker';

const store = createStore(itemCounterReducer, //added code
  window.__REDUX_DEVTOOLS_EXTENSION__ && //added code
  window.__REDUX_DEVTOOLS_EXTENSION__()); //added code

ReactDOM.render(
  <App store = {store}/>, //added code
  document.getElementById('root'));
registerServiceWorker();
