export const ESPECIES_SET_LISTA = 'ESPECIES_SET_LISTA';

import { get } from '../modules/api';

export function carregarLista() {
  return dispatch => get('especies').then(especies => {
    dispatch(setarLista(especies));
  });
}

function setarLista(lista) {
  return {
    type: ESPECIES_SET_LISTA,
    lista
  };
}
