document.getElementById('upload-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const imageInput = document.getElementById('image-upload');

    // Check if a file is selected
    if (imageInput.files[0]) {
        // Upload the file to the server
        try {
            const uploadResponse = await fetch('//php/upload.php', {
                method: 'POST',
                body: formData
            });
            if (!uploadResponse.ok) {
                throw new Error('Upload failed');
            }
            const uploadResult = await uploadResponse.json();

            // Handle the upload result here
            console.log('Upload Result:', uploadResult);

            // Additional recognition logic goes here

        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Please select an image to upload.');
    }
});
