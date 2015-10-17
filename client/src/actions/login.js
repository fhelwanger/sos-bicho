import fetch from 'isomorphic-fetch';

export const USUARIO_LOGADO = 'USUARIO_LOGADO';
export const LOGIN_MENSAGEM_ERRO = 'LOGIN_MENSAGEM_ERRO';

function usuarioLogado(usuario) {
  return {
    type: USUARIO_LOGADO,
    usuario
  };
}

export function loginMensagemErro(mensagem) {
  return {
    type: LOGIN_MENSAGEM_ERRO,
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
          dispatch(usuarioLogado(json));
        });
      } else {
        response.text().then(text => {
          dispatch(loginMensagemErro(text));
        });
      }
    });
  };
}

export function fazerLogout() {
  return dispatch => {
    localStorage.removeItem('credentials');
    dispatch(usuarioLogado(null));
  };
}
