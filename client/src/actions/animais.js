import fetch from 'isomorphic-fetch';

export const ANIMAIS_INFORMAR = 'ANIMAIS_INFORMAR';

function informarAnimais(animais) {
  return {
    type: ANIMAIS_INFORMAR,
    animais
  };
}

export function solicitarAnimais() {
  return dispatch => {
    fetch('animais')
      .then(response => response.json())
      .then(json => dispatch(informarAnimais(json)));
  };
}
