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
    fetch("upload.php", {
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
