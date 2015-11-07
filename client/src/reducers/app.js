import {
  APP_SET_LOGIN_VISIBLE,
  APP_SET_USUARIO_LOGADO
} from '../actions/app';

const initialState = {
  loginVisible: false,
  usuarioLogado: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_SET_LOGIN_VISIBLE:
      return Object.assign({}, state, {
        loginVisible: action.visible
      });
    case APP_SET_USUARIO_LOGADO:
      return Object.assign({}, state, {
        usuarioLogado: action.usuario
      });
    default:
      return state;
  }
}
