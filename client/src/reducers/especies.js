import { ESPECIES_SET_LISTA } from '../actions/especies';

const initialState = {
  lista: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ESPECIES_SET_LISTA:
      return Object.assign({}, state, {
        lista: action.lista
      });
    default:
      return state;
  }
}
