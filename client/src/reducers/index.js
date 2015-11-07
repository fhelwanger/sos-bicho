import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const reducers = combineReducers({
  router: routerStateReducer,
  form: formReducer,
  app
});

export default reducers;
