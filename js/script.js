// Your model URL
const modelURL = 'https://teachablemachine.withgoogle.com/models/ORHSpBtYq/';

// Load the model
let model;
async function loadModel() {
    model = await tmImage.load(modelURL + 'model.json', modelURL + 'metadata.json');
    console.log('Model loaded');
}
loadModel();

// DOM elements
const uploadForm = document.getElementById("upload-form");
const imageInput = document.getElementById("image-upload");
const resultSection = document.getElementById("result");
const speciesElement = document.getElementById("species");

// Species lookup object to map species name to species ID
const speciesLookup = {
    "Amphiprion ocellaris": 1,
    "Amphiprion melanopus": 2
    // ... other species
};

// Function to get species ID from species name
function getSpeciesID(speciesName) {
    return speciesLookup[speciesName];
}

// Event listener for form submission
uploadForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const image = document.getElementById('preview-image');
    if (!model) {
        console.error('Model not loaded');
        return;
    }

    // Classify the image
    const prediction = await model.predict(image);
    
    console.log('Prediction:', prediction);  // Debug log
    
    // Sort predictions by probability
    prediction.sort((a, b) => b.probability - a.probability);

    // Get the species name of the highest probability prediction
    const speciesName = prediction[0].className.replace(/_/g, ' ');
    
    console.log('Species Name:', speciesName);  // Debug log

    // Get the species ID from the species name
    const speciesID = getSpeciesID(speciesName);
    
    console.log('Species ID:', speciesID);  // Debug log

    // Construct the URL for the species information page
    const infoPageURL = `https://im.chappuiscaetano.ch/php/species.php?id=${speciesID}`;
    
    // Redirect the user to the species information page
    window.location.href = infoPageURL;
});

// Function to display a file preview
function previewFile() {
    var previewImage = document.getElementById("preview-image");
    var fileInput = document.getElementById("image-upload");
    var filePreview = document.getElementById("file-preview");

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
        filePreview.style.display = "block";
    }
}
