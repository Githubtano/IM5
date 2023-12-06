<?php
// Load config settings
include 'config.php';  

// Set response type to JSON
header('Content-Type: application/json');

// Default message
echo json_encode(["message" => "Test response"]);

// Folder for uploads
$uploadFolder = __DIR__ . '/uploads/'; 

// Make folder if not there
if (!file_exists($uploadFolder)) {
    mkdir($uploadFolder, 0777, true);
}

// Prepare response
$response = []; 

// Check for uploaded file
if (isset($_FILES['image']['tmp_name'])) {
    $tempName = $_FILES['image']['tmp_name'];
    $fileName = $_FILES['image']['name'];
    $filePath = $uploadFolder . basename($fileName);

    // Move file to upload folder
    if (move_uploaded_file($tempName, $filePath)) {
        $response = [
            "message" => "File uploaded",
            "path" => $filePath,
            "debug" => $_FILES['image'] 
        ];
    } else {
        $response = ["error" => "Upload error"];
    }
} else {
    $response = ["error" => "No file"];
}

// Send response
echo json_encode($response);
?>
