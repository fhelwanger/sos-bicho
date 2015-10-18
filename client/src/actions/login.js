import fetch from 'isomorphic-fetch';

export const LOGIN_INFORMAR_USUARIO = 'LOGIN_INFORMAR_USUARIO';
export const LOGIN_INFORMAR_MENSAGEM_ERRO = 'LOGIN_INFORMAR_MENSAGEM_ERRO';

function informarUsuario(usuario) {
  return {
    type: LOGIN_INFORMAR_USUARIO,
    usuario
  };
}

export function informarMensagemErro(mensagem) {
  return {
    type: LOGIN_INFORMAR_MENSAGEM_ERRO,
    mensagem
  };
}

export function fazerLogin(login, senha) {
  return dispatch => {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        senha
      })
    }).then(response => {
      if (response.ok) {
        localStorage.setItem('credentials', btoa(`${login}:${senha}`));
        response.json().then(json => {
          dispatch(informarUsuario(json));
        });
      } else {
        response.text().then(text => {
          dispatch(informarMensagemErro(text));
        });
      }
    });
  };
}

export function fazerLogout() {
  return dispatch => {
    localStorage.removeItem('credentials');
    dispatch(informarUsuario(null));
  };
}
