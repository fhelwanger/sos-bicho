import App from './containers/App';
import CriarConta from './containers/CriarConta';
import AnimaisList from './containers/AnimaisList';
import MeusAnimais from './containers/MeusAnimais';

function verificarUsuarioLogado(nextState, replaceState) {
  // TODO
}

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: { component: AnimaisList },
    childRoutes: [
      { path: '/meus-animais', component: MeusAnimais, onEnter: verificarUsuarioLogado }
    ]
  },
  {
    path: '/criar-conta',
    component: CriarConta
  }
];

export default routes;
