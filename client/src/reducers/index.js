import { combineReducers } from 'redux';
import login from './login';
import animais from './animais';
import erros from './erros';

export default combineReducers({
  login,
  animais,
  erros
});
