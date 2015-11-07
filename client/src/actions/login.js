import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { setLoginVisible, setUsuarioLogado } from './app';

export function fazerLogin(login, senha) {
  return dispatch => post('login', { login, senha }).then(usuario => {
    localStorage.setItem('credentials', btoa(`${login}:${senha}`));
    dispatch(setUsuarioLogado(usuario));
    dispatch(setLoginVisible(false));
  });
}

export function fazerLogout() {
  return dispatch => {
    localStorage.removeItem('credentials');
    dispatch(setUsuarioLogado(null));
    dispatch(pushState(null, '/'));
  };
}
