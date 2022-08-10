// import functions and grab DOM elements
const heading = document.getElementById('heading');
const nameInput = document.getElementById('name');

// let state

// set event listeners
nameInput.addEventListener('input', () => {
    // get user input state
    // update DOM to reflect the new state
    heading.textContent = nameInput.value;
});
