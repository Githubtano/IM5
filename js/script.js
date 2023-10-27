// DOM elements
const uploadForm = document.getElementById("upload-form");
const imageInput = document.getElementById("image-upload");
const resultSection = document.getElementById("result");
const speciesElement = document.getElementById("species");

// Event listener for form submission
uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create a FormData object to send the image
    const formData = new FormData();
    formData.append("image", imageInput.files[0]);

    // Send the image to the server using fetch
    fetch("php/upload.php", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        // Update the result section with the recognition result
        speciesElement.textContent = `Species: ${data.species}`;
        resultSection.classList.remove("hidden");
    });
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
