import createElement from './element-creation';

const renderMenu = () => {
  console.log('render menu');
  const content = document.getElementById('content');
  content.innerHTML = null;

  content.appendChild(createElement('p', undefined, 'menu works!'));
};

export default renderMenu;