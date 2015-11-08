import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './store';
import { fazerLogin } from './actions/login';

const credentials = localStorage.getItem('credentials');

if (credentials) {
  const [login, senha] = atob(credentials).split(':');
  store.dispatch(fazerLogin(login, senha));
}

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
);
