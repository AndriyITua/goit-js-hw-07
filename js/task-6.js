function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes() {
  const numberOfBoxes = input.value;
  console.log(numberOfBoxes);

  if (numberOfBoxes <= 0 || numberOfBoxes > 100) {
   alert('Please enter a valid number greater than 0 and no more than 100.');
    return;
  }

  clearBoxes();

  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  input.value = ''; // Очистка значення інпуту
}

  
function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

function destroyBoxes() {
  clearBoxes();
  input.value = '';
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);