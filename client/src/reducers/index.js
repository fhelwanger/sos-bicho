import { combineReducers } from 'redux';
import login from './login';
import usuarios from './usuarios';
import animais from './animais';

export default combineReducers({
  login,
  usuarios,
  animais
});
