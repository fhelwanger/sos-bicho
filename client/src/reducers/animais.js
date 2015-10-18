import { ANIMAIS_INFORMAR } from '../actions/animais';

export default function (state = [], action) {
  switch (action.type) {
  case ANIMAIS_INFORMAR:
    return action.animais;
  default:
    return state;
  }
};
