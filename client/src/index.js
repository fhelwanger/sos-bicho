import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import { fazerLogin } from './actions/login';

const credentials = localStorage.getItem('credentials');

if (credentials) {
  const [login, senha] = atob(credentials).split(':');
  store.dispatch(fazerLogin(login, senha));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
