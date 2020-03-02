import createElement from './element-creation';


const renderHome = () => {
  console.log('render home');
  const content = document.getElementById('content');
  content.innerHTML = null;

  const hero = createElement('section', ['hero']);

  const heroText = createElement('div', ['hero__text']);

  const title = createElement('h2', undefined, 'We make great spanish tortilla.');
  const subtitle = createElement('p', undefined, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugiat blanditiis! Cumque tempora ut illum minima nisi nobis voluptates enim?');

  const openingHours = createElement('section', ['hero__text__opening-hours']);
  const openingHoursTitle = createElement('h3', undefined, 'Opening hours:');
  const openingHoursList = createElement('ul');

  openingHoursList.appendChild(createElement('li', undefined, 'Monday: closed'));
  openingHoursList.appendChild(createElement('li', undefined, 'Tuesday: 12.00 - 22.00h'));
  openingHoursList.appendChild(createElement('li', undefined, 'Wednesday: 12.00 - 22.00h'));
  openingHoursList.appendChild(createElement('li', undefined, 'Thursday: 12.00 - 22.00h'));
  openingHoursList.appendChild(createElement('li', undefined, 'Friday: 12.00 - 23.30h'));
  openingHoursList.appendChild(createElement('li', undefined, 'Saturday: 12.00 - 23.30h'));
  openingHoursList.appendChild(createElement('li', undefined, 'Sunday: 12.00 - 22.00h'));

  openingHours.appendChild(openingHoursTitle);
  openingHours.appendChild(openingHoursList);

  heroText.appendChild(title);
  heroText.appendChild(subtitle);
  heroText.appendChild(openingHours);

  hero.appendChild(heroText);

  content.appendChild(hero);
};

export default renderHome;