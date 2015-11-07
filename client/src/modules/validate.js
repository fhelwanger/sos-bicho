import { validate } from 'validate.js';

validate.options = { fullMessages: false };
validate.validators.presence.options = { message: 'Campo obrigatório.' };

export default function (attributes, constraints) {
  return validate(attributes, constraints) || {};
};
