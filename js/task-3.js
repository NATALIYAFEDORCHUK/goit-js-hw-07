const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

inputElem.addEventListener('input', trimmedValue);

function trimmedValue() {
    const trimmed = inputElem.value.trim();
    return (outputElem.textContent = trimmed === '' ? 'Anonymous' : trimmed);
}
