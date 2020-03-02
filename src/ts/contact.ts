import createElement from './element-creation';

const renderContact = () => {
  console.log('render contact');
  const content = document.getElementById('content');
  content.innerHTML = null;

  content.appendChild(createElement('p', undefined, 'contact works!'));
};

export default renderContact;