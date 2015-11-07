export const APP_SET_LOGIN_VISIBLE = 'APP_SET_LOGIN_VISIBLE';
export const APP_SET_USUARIO_LOGADO = 'APP_SET_USUARIO_LOGADO';

export function setLoginVisible(visible) {
  return {
    type: APP_SET_LOGIN_VISIBLE,
    visible
  };
}

export function setUsuarioLogado(usuario) {
  return {
    type: APP_SET_USUARIO_LOGADO,
    usuario
  }
}
