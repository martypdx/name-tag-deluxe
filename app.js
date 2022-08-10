// import functions and grab DOM elements
const nameInput = document.getElementById('name');
const animalSelect = document.getElementById('animal-select');
const nameDisplay = document.getElementById('name-display');
const animalDisplay = document.getElementById('animal-display');
// let state

// set event listeners
nameInput.addEventListener('input', () => {
    // get user input state
    // update DOM to reflect the new state
    nameDisplay.textContent = nameInput.value;
});

animalSelect.addEventListener('change', () => {
    // get user input state
    // update DOM to reflect the new state
    animalDisplay.textContent = animalSelect.value;
});
