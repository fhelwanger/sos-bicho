export const ANIMAIS_SET_LISTA = 'ANIMAIS_SET_LISTA';

import { get, post } from '../modules/api';
import { pushState } from 'redux-router';

export function carregarLista() {
  return dispatch => get('animais').then(animais => {
    dispatch(setarLista(animais));
  });
}

export function criarAnimal(dados) {
  return dispatch => post('animais', dados).then(() => {
    dispatch(pushState(null, '/meus-animais'));
  });
}

function setarLista(lista) {
  return {
    type: ANIMAIS_SET_LISTA,
    lista
  };
}
