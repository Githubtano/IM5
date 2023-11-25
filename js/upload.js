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
            try {
                const jsonData = JSON.parse(data); // Parse the text as JSON
                console.log('Success:', jsonData);
            } catch (e) {
                console.error('Error parsing JSON:', e);
                console.error('Received data:', data);
            }
        })
        .catch((error) => {
            console.error('Fetch Error:', error);
        });
    } 
});


