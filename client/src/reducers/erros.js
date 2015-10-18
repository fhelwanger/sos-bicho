import {
  ERROS_INFORMAR,
  ERROS_LIMPAR
} from '../actions/erros';

export default function (state = [], action) {
  switch (action.type) {
  case ERROS_INFORMAR:
    return action.erros;
  case ERROS_LIMPAR:
    return state.filter(e => e.prop !== action.prop);
  default:
    return state;
  }
};
