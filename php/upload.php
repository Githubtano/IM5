<?php
include 'config.php';  // Include the config.php file

header('Content-Type: application/json');
echo json_encode(["message" => "Test response"]);

$targetDir = __DIR__ . '/uploads/'; // Target directory on the server

// Create the directory if it does not exist
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$response = []; // Initialize response array

// Check if a file is being uploaded
if (isset($_FILES['image']['tmp_name'])) {
    $tempName = $_FILES['image']['tmp_name'];
    $originalName = $_FILES['image']['name'];
    $targetFilePath = $targetDir . basename($originalName);

    // Attempt to move the uploaded file to the target directory
    if (move_uploaded_file($tempName, $targetFilePath)) {
        $response = [
            "message" => "File uploaded successfully",
            "path" => $targetFilePath,
            "debug" => $_FILES['image']  // Include debug information (optional)
        ];
    } else {
        $response = ["error" => "Sorry, there was an error uploading your file."];
    }
} else {
    $response = ["error" => "No file received"];
}

// Output the single JSON-encoded string
echo json_encode($response);
?>
