import { ANIMAIS_SET_LISTA } from '../actions/animais';

const initialState = {
  lista: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ANIMAIS_SET_LISTA:
      return Object.assign({}, state, {
        lista: action.lista
      });
    default:
      return state;
  }
}
