import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import routes from './routes';
import store from './store';
import { fazerLogin } from './actions/login';

const credentials = localStorage.getItem('credentials');

if (credentials) {
  const [login, senha] = atob(credentials).split(':');
  store.dispatch(fazerLogin(login, senha));
}

const history = createHashHistory({
  queryKey: false
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);
