import App from './containers/App';
import CriarConta from './containers/CriarConta';
import AnimaisList from './containers/AnimaisList';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: { component: AnimaisList }
  },
  {
    path: '/criar-conta',
    component: CriarConta
  }
];

export default routes;
