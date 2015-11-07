import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';
import routes from './routes';
import reducers from './reducers';

const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware
  ),
  reduxReactRouter({
    createHistory,
    routes
  })
)(createStore);

const store = finalCreateStore(reducers);

export default store;
