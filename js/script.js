
// Uplaod
// Uplaod
// Uplaod

document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const imageInput = document.getElementById('image-upload');

    // Debugging: Log the contents of formData
    for (let [key, value] of formData.entries()) { 
        console.log(`${key}: `, value);
    }

    if (imageInput.files[0]) {
        // Send the file to the server using fetch API
        fetch('/php/upload.php', {
            method: 'POST',
            body: formData,
        })
        
        .then(response => {
            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Split the response string by "}{"
            var parts = data.split('}{');
        
            // Add the missing braces to each part
            parts = parts.map((part, index) => {
                if (index === 0) {
                    // Add a closing brace to the first part
                    return part + '}';
                } else if (index === parts.length - 1) {
                    // Add an opening brace to the last part
                    return '{' + part;
                } else {
                    // Add both braces to the middle parts
                    return '{' + part + '}';
                }
            });
        
            // You can parse each part individually
            var jsonParts = parts.map(part => JSON.parse(part));
        
            // Now jsonParts is an array of objects
            console.log(jsonParts);
        })
    } 
});

// machinelearning
// machinelearning
// machinelearning

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

// Button apear and disapear 
imageInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        // If a file is chosen, display the upload button by removing the 'hidden' class
        uploadButton.classList.remove('hidden');
    } else {
        // If no file is chosen (e.g., if the user cancels the file picker), hide the button
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

    // Target the center image
    const image = document.getElementById('center-image'); 
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

    // Get the prediction probability (rounded to 2 decimal places)
    const predictionProbability = (prediction[0].probability * 100).toFixed(2);

    // Construct the URL for the species information page
    const infoPageURL = `https://im.chappuiscaetano.ch/php/species.php?id=${speciesID}&probability=${predictionProbability}`;
    
    // Redirect the user to the species information page
    window.location.href = infoPageURL;
});

// Function preview img & button
// Function preview img & button
// Function preview img & button

function previewFile() {
    console.log('previewFile called');  
    var fileInput = document.getElementById('image-upload'); 
    var centerImage = document.getElementById("center-image"); 
    var introText = document.getElementById("intro-text");
    var previewHeading = document.getElementById("preview-heading");
    var filePreview = document.getElementById("file-preview"); 

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            centerImage.src = e.target.result;  
            localStorage.setItem('uploadedImage', e.target.result);  
            introText.style.display = "none"; 
            previewHeading.style.display = "block";  
            filePreview.style.display = "none";  
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}