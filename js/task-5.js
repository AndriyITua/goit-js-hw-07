function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

function buttonHandler() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}

button.addEventListener('click', buttonHandler);