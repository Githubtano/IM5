<?php
// Set the path to store uploaded images

$uploadDir = "uploads/";

// Create the uploads directory if it doesn't exist
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_FILES["image"]["error"] == UPLOAD_ERR_OK) {
    $tempName = $_FILES["image"]["tmp_name"];
    $originalName = $_FILES["image"]["name"];

    // Move the uploaded image to the uploads directory
    move_uploaded_file($tempName, $uploadDir . $originalName);

    // Replace this with your database code to store image information in the database
    $species = "Amphiprion ocellaris
    "; // Replace with actual recognition logic

    // Return recognition result as JSON
    $result = ["species" => $species];
    echo json_encode($result);
} else {
    echo "Upload failed.";
}

