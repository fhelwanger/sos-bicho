import { ERROS_USUARIOS } from '../actions/usuarios';

const initialState = {
  erros: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ERROS_USUARIOS:
    return Object.assign({}, state, {
      erros: action.erros
    });
  default:
    return state;
  }
};
