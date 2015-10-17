import { USUARIO_LOGADO, LOGIN_MENSAGEM_ERRO } from '../actions/login';

const initialState = {
  usuario: null,
  mensagemErro: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
  case USUARIO_LOGADO:
    return Object.assign({}, state, {
      usuario: action.usuario,
      mensagemErro: ''
    });
  case LOGIN_MENSAGEM_ERRO:
    return Object.assign({}, state, {
      mensagemErro: action.mensagem
    });
  default:
    return state;
  }
};
