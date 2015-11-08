import {
  ANIMAIS_SET_LISTA,
  ANIMAIS_CLEAR_FOTOS,
  ANIMAIS_ADD_FOTO
} from '../actions/animais';

const initialState = {
  lista: [],
  fotos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ANIMAIS_SET_LISTA:
      return Object.assign({}, state, {
        lista: action.lista
      });
    case ANIMAIS_CLEAR_FOTOS:
      return Object.assign({}, state, {
        fotos: []
      });
    case ANIMAIS_ADD_FOTO:
      return Object.assign({}, state, {
        fotos: [...state.fotos, action.foto]
      });
    default:
      return state;
  }
}
