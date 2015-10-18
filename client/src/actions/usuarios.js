import fetch from 'isomorphic-fetch';
import { fazerLogin } from './login';

export const INFORMAR_ERROS_USUARIOS = 'INFORMAR_ERROS_USUARIOS';
export const LIMPAR_ERRO_USUARIOS = 'LIMPAR_ERRO_USUARIOS';

export function limparErro(prop) {
  return {
    type: LIMPAR_ERRO_USUARIOS,
    prop
  };
}

export function informarErros(erros) {
  return {
    type: INFORMAR_ERROS_USUARIOS,
    erros
  };
}

export function criarUsuario(usuario, history) {
  return dispatch => {
    fetch('/usuarios', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    }).then(response => {
      if (response.ok) {
        dispatch(fazerLogin(usuario.login, usuario.senha));
        history.pushState(null, '/');
      } else if (response.status === 400) {
        response.json().then(erros => dispatch(informarErros(erros)));
      } else if (response.status === 500) {
        response.text().then(text => alert(text));
      }
    });
  };
}
