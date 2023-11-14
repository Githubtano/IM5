  // Script to retrieve the image data from localStorage and display it
  
  var uploadedImage = document.getElementById('uploaded-image');
  var imageData = localStorage.getItem('uploadedImage');
  if (imageData) {
      uploadedImage.src = imageData;
  }