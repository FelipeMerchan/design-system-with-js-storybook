export const createCard = ({
  description,
  size = 'small',
  title,
}) => {
  const card = document.createElement('div');
  const avatar = document.createElement('div');
  const content = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  card.appendChild(avatar);
  card.appendChild(content);
  content.appendChild(h3);
  content.appendChild(p);

  h3.innerHTML = title;
  p.innerHTML = description;

  avatar.className = 'card__avatar';
  content.className = 'card__content';

  card.className = ['card', `card--${size}`].join(' ');

  return card;
}