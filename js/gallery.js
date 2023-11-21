document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    // Fetch images from the server and add them to the gallery
    fetch('/php/image_list.php')  // Update with the correct path to the PHP script
    .then(response => response.json())
    .then(images => {
        const gallery = document.getElementById('gallery');
        images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            gallery.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
    

});