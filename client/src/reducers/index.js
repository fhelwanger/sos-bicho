import { combineReducers } from 'redux';
import animais from './animais';
import login from './login';

export default combineReducers({
  animais,
  login
});
