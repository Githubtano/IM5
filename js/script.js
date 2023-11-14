// Define the URL of the model
const modelURL = 'https://teachablemachine.withgoogle.com/models/ORHSpBtYq/';

// Declare a variable to hold the loaded model
let model;

// function to load the model
async function loadModel() {
    model = await tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');
    console.log('Model loaded');  
}

// Call the loadModel function to load the model
loadModel();  

// Get references to DOM elements
const uploadForm = document.getElementById("upload-form");
const imageInput = document.getElementById("image-upload");
const resultSection = document.getElementById("result");
const speciesElement = document.getElementById("species");
const uploadButton = document.querySelector('button[type="submit"]');

// Button appear and disappear 
imageInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        uploadButton.classList.remove('hidden');
    } else {
        uploadButton.classList.add('hidden');
    }
});

// Object to map species names to their respective IDs
const speciesLookup = {
    "Amphiprion ocellaris": 1,
    "Amphiprion melanopus": 2
};

// Function to get species ID from species name
function getSpeciesID(speciesName) {
    return speciesLookup[speciesName];
}

// Event listener for form submission
uploadForm.addEventListener("submit", async function (e) {
    e.preventDefault();  

    const image = document.getElementById('center-image'); // Target the center image
    if (!model) {
        console.error('Model not loaded'); 
        return;
    }

    const prediction = await model.predict(image);
    console.log('Prediction:', prediction);  
    prediction.sort((a, b) => b.probability - a.probability);

    const speciesName = prediction[0].className.replace(/_/g, ' '); 
    console.log('Species Name:', speciesName);  

    const speciesID = getSpeciesID(speciesName);
    console.log('Species ID:', speciesID); 

    const infoPageURL = `https://im.chappuiscaetano.ch/php/species.php?id=${speciesID}`;
    window.location.href = infoPageURL;
});

// Function to display a file preview when a file is selected
function previewFile() {
    var centerImage = document.getElementById("center-image"); // Target the center image
    var fileInput = document.getElementById("image-upload");

    if (fileInput.files && fileFile.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            centerImage.src = e.target.result; // Update the src of the center image
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}
