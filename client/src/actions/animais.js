export const ANIMAIS_SET_LISTA = 'ANIMAIS_SET_LISTA';

import { get } from '../modules/api';

export function carregarLista() {
  return dispatch => get('animais').then(animais => {
    dispatch(setarLista(animais));
  });
}

function setarLista(lista) {
  return {
    type: ANIMAIS_SET_LISTA,
    lista
  };
}
