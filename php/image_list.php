<?php
include 'config.php';  // Ensure this path is correct

$directory = __DIR__ . '/uploads/';  // Use an absolute path

$images = array_merge(
    glob($directory . "*.jpg"),
    glob($directory . "*.jpeg"),
    glob($directory . "*.png")
    
);

$imageUrls = array_map(function($image) {
    return '/php/uploads/' . basename($image);
}, $images);

echo json_encode($imageUrls);
?>