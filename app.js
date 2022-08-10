// grab DOM elements
const nameInput = document.getElementById('name');
const animalSelect = document.getElementById('animal-select');
const imageInput = document.getElementById('image-input');

const nameDisplay = document.getElementById('name-display');
const animalDisplay = document.getElementById('animal-display');
const imageDisplay = document.getElementById('image-display');

// add event listeners...

nameInput.addEventListener('input', () => {
    // get name input value
    // update DOM to reflect the new state
    nameDisplay.textContent = nameInput.value;
});

animalSelect.addEventListener('change', () => {
    // get select input value and
    // update DOM to reflect this
    animalDisplay.textContent = animalSelect.value;
});

imageInput.addEventListener('change', () => {
    // get the file from the upload input
    const file = imageInput.files[0];
    // convert the image into something we can
    // directly assign to the .src property of the image,
    // using a builtin utility for this purpose
    imageDisplay.src = URL.createObjectURL(file);
});
