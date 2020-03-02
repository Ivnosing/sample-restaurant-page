import Router from './router';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';

window.onload = () => {
  const router = new Router({
    mode: 'hash',
    routes: [
      { path: 'home', callback: renderHome },
      { path: 'menu', callback: renderMenu },
      { path: 'contact', callback: renderContact }
    ]
  });
};