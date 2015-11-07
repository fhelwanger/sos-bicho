import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { fazerLogin } from './login';

export function criarConta(dados) {
  return dispatch => post('usuarios', dados).then(() => {
    dispatch(fazerLogin(dados.login, dados.senha));
    dispatch(pushState(null, '/'));
  });
}
