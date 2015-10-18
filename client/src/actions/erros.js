export const ERROS_INFORMAR = 'ERROS_INFORMAR';
export const ERROS_LIMPAR = 'ERROS_LIMPAR';

export function limparErro(prop) {
  return {
    type: ERROS_LIMPAR,
    prop
  };
}

export function informarErros(erros) {
  return {
    type: ERROS_INFORMAR,
    erros
  };
}
