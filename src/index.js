import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import store from './state';
import { Provider } from 'react-redux';

store.subscribe(() => console.log("new state", store.getState()));
console.log('here store', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
