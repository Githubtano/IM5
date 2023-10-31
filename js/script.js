// Define the URL of the model
const modelURL = 'https://teachablemachine.withgoogle.com/models/ORHSpBtYq/';

// Declare a variable to hold the loaded model
let model;

// function to load the model
async function loadModel() {
    // Load the model using the Teachable Machine library
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

    // Get the image element
    const image = document.getElementById('preview-image');  
    if (!model) {
        console.error('Model not loaded'); 
        return;
    }

    // Classify the image using the loaded model
    const prediction = await model.predict(image);
    console.log('Prediction:', prediction);  
    
    // Sort the prediction array by probability in descending order
    prediction.sort((a, b) => b.probability - a.probability);

    // Get the species name from the highest probability prediction
    const speciesName = prediction[0].className.replace(/_/g, ' '); 
    console.log('Species Name:', speciesName);  

    // Get the species ID using the species name
    const speciesID = getSpeciesID(speciesName);
    console.log('Species ID:', speciesID); 

    // Construct the URL for the species information page
    const infoPageURL = `https://im.chappuiscaetano.ch/php/species.php?id=${speciesID}`;
    
    // Redirect the user to the species information page
    window.location.href = infoPageURL;
});

// Function to display a file preview when a file is selected
function previewFile() {
    console.log('previewFile called');  // Debug log
    var previewImage = document.getElementById("preview-image");
    var fileInput = document.getElementById("image-upload");
    var introText = document.getElementById("intro-text");
    var previewHeading = document.getElementById("preview-heading");
    var filePreview = document.getElementById("file-preview");  // Get a reference to the file-preview div

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            localStorage.setItem('uploadedImage', e.target.result);  // Store image data to localStorage
            introText.style.display = "none"; 
            previewHeading.style.display = "block";  
            filePreview.style.display = "block";  // Set the display property of file-preview to block
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}
