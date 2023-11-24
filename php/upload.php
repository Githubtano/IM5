<?php
include 'config.php';

$uploadDir = 'uploads/';

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if (isset($_FILES['image'])) {
    if (isset($_FILES['image']) && $_FILES['image']['error'] == UPLOAD_ERR_OK) {        
        $tempName = $_FILES['image']['tmp_name'];
        $originalName = $_FILES['image']['name'];
        $uniqueName = uniqid() . '-' . basename($originalName);

        if (move_uploaded_file($tempName, $uploadDir . $uniqueName)) {
            $species = isset($_POST['species']) ? $_POST['species'] : 'Unknown';
            $result = ["species" => $species, "uploadedImage" => $uploadDir . $uniqueName];
            echo json_encode($result);
        } else {
            echo json_encode(["error" => "Failed to move uploaded file."]);
        }
    } else {
        echo json_encode(["error" => "Upload error: " . $_FILES['image']['error']]);
    }
} else {
    echo json_encode(["error" => "No image uploaded."]);
}
?>