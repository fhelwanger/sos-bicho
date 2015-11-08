import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import app from './app';
import animais from './animais';

const reducers = combineReducers({
  router: routerStateReducer,
  form: formReducer,
  app,
  animais
});

export default reducers;
