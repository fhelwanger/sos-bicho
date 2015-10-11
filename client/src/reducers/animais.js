import { RECEBER_ANIMAIS } from '../actions/animais';

export default function (state = [], action) {
  switch (action.type) {
  case RECEBER_ANIMAIS:
    return action.animais;
  default:
    return state;
  }
};
