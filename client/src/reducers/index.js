import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import app from './app';
import feed from './feed';
import animais from './animais';
import especies from './especies';

const reducers = combineReducers({
  router: routerStateReducer,
  form: formReducer,
  app,
  feed,
  animais,
  especies
});

export default reducers;
