// Import the tmImage library
import * as tmImage from '@teachablemachine/image';

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
    const speciesName = prediction[0].className;
    
    speciesElement.textContent = `Species: ${speciesName}`;
    resultSection.classList.remove("hidden");
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
