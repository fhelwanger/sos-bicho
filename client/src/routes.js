import App from './containers/App';
import CriarConta from './containers/CriarConta';
import MeusAnimais from './containers/MeusAnimais';
import Animal from './containers/Animal';

const routes = [
  {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'meus-animais', component: MeusAnimais },
      { path: 'animal(/:id)', component: Animal }
    ]
  },
  {
    path: '/criar-conta',
    component: CriarConta
  }
];

export default routes;
