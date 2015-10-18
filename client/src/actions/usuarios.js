import fetch from 'isomorphic-fetch';
import { fazerLogin } from './login';
import { informarErros } from './erros';

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
