const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

function inputHandler() {
    const trimmedValue = nameInput.value.trim(); // Видалення пробілів по краях

    if (trimmedValue === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trimmedValue;
    }
}

nameInput.addEventListener('input', inputHandler);