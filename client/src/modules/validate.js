import { validate } from 'validate.js';

validate.options = { fullMessages: false };
validate.validators.presence.options = { message: 'Campo obrigatório.' };
validate.validators.numericality.options = { message: 'Valor deve ser numérico.' };

export default function (attributes, constraints) {
  return validate(attributes, constraints) || {};
};
