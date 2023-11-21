<?php
include 'config.php';  // Ensure this path is correct

$directory = __DIR__ . '/uploads/';  // Use an absolute path
$images = glob($directory . "*.jpg");  // Ensure the path is correct

$imageUrls = array_map(function($image) {
    return '/php/uploads/' . basename($image);
}, $images);

echo json_encode($imageUrls);
?>