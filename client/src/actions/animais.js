export const ANIMAIS_SET_LISTA = 'ANIMAIS_SET_LISTA';
export const ANIMAIS_CLEAR_FOTOS = 'ANIMAIS_CLEAR_FOTOS';
export const ANIMAIS_ADD_FOTO = 'ANIMAIS_ADD_FOTO';

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

export function limparFotos() {
  return {
    type: ANIMAIS_CLEAR_FOTOS
  };
}

export function adicionarFoto(foto) {
  return {
    type: ANIMAIS_ADD_FOTO,
    foto
  };
}

export function setAdotado(animalId) {
  const data = { adotado: true };

  return dispatch => post(`/animais/adotado/${animalId}`, data).then(() => {
    dispatch(carregarLista());
  });
}

export function setDisponivel(animalId) {
  const data = { adotado: false };

  return dispatch => post(`/animais/adotado/${animalId}`, data).then(() => {
    dispatch(carregarLista());
  });
}
