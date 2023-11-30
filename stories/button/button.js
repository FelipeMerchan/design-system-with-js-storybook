import './button.css';

export const createButton = ({
  label,
  size = 'small',
  style = 'outlined',
}) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.role = 'button';
  button.innerHTML = label;

  return button;
}