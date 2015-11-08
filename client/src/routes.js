import App from './containers/App';
import CriarConta from './containers/CriarConta';
import MeusAnimais from './containers/MeusAnimais';

const routes = [
  {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'meus-animais', component: MeusAnimais }
    ]
  },
  {
    path: '/criar-conta',
    component: CriarConta
  }
];

export default routes;
