import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);