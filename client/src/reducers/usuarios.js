import {
  INFORMAR_ERROS_USUARIOS,
  LIMPAR_ERRO_USUARIOS
} from '../actions/usuarios';

const initialState = {
  erros: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case INFORMAR_ERROS_USUARIOS:
    return Object.assign({}, state, {
      erros: action.erros
    });
  case LIMPAR_ERRO_USUARIOS:
    return Object.assign({}, state, {
      erros: state.erros.filter(e => e.prop !== action.prop)
    });
  default:
    return state;
  }
};
