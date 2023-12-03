import './button.css';

export const createButton = ({
  label,
  onClick,
  size = 'small',
  style = 'outlined',
}) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.role = 'button';
  button.innerHTML = label;
  button.addEventListener('click', onClick);
  button.className = ['button', `button--${size}`, `button--${style}`].join(' ');

  return button;
}