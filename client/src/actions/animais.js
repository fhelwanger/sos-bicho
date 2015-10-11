import fetch from 'isomorphic-fetch';

export const SOLICITAR_ANIMAIS = 'SOLICITAR_ANIMAIS';
export const RECEBER_ANIMAIS = 'RECEBER_ANIMAIS';

function receberAnimais(animais) {
  return {
    type: RECEBER_ANIMAIS,
    animais
  };
}

export function solicitarAnimais() {
  return dispatch => {
    fetch('animais')
      .then(response => response.json())
      .then(json => dispatch(receberAnimais(json)));
  };
}
