import App from './containers/App';
import CriarConta from './containers/CriarConta';
import MeusAnimais from './containers/MeusAnimais';
import Animal from './containers/Animal';

function checkLoggedIn(nextState, replaceState) {
  if (!localStorage.getItem('credentials')) {
    replaceState(null, '/');
  }
}

const routes = [
  {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'meus-animais', component: MeusAnimais, onEnter: checkLoggedIn },
      { path: 'animal(/:id)', component: Animal, onEnter: checkLoggedIn }
    ]
  },
  {
    path: '/criar-conta',
    component: CriarConta
  }
];

export default routes;
