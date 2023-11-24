let imagesArray = [];

document.addEventListener('DOMContentLoaded', function() {
    // Fetch images from the server and store them in an array

fetch('/php/image_list.php')  // Update with the correct path to the PHP script
  .then(response => response.json())
    .then(images => {
        imagesArray = images;
        populateGallery(); // Initial population of the gallery
    })
    .catch(error => console.error('Error fetching images:', error));

    // Set up an interval to continuously add new images
    setInterval(populateGallery, 55000); // Adjust the time as needed
});

// Function to populate the gallery with a set of random images
function populateGallery() {
    const gallery = document.getElementById('gallery');
    
    // Add a certain number of images at a time
    for (let i = 0; i < 50; i++) { // Adjust the number of images as needed
        const img = document.createElement('img');
        // Select a random image from the array
        img.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
        gallery.appendChild(img);
    }
}