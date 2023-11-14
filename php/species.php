<?php
include 'config.php';  // Include the config.php file

// Check if 'id' parameter is set in URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $species_id = $_GET['id'];  // Get the species id from the URL
} else {
    echo "Invalid ID";
    exit;
}

try {
    $stmt = $db->prepare("SELECT * FROM clownfish_species WHERE id = :id");
    $stmt->bindParam(':id', $species_id, PDO::PARAM_INT);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $species_name = htmlspecialchars($row['species_name']);
        $description = htmlspecialchars($row['description']);
        $image_url = htmlspecialchars($row['image_url']);  // Remove this line if your database doesn't have an image_url column  
    } else {
        echo "0 results";
        exit;
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit;
}

// Load the HTML template
$template = file_get_contents('../template.html');

if ($template === false) {
    echo "Failed to load template.html";
    exit;
}

// Replace placeholders with actual data
$template = str_replace('{{title}}', $species_name, $template);
$template = str_replace('{{species_name}}', $species_name, $template);
$template = str_replace('{{description}}', $description, $template);
$template = str_replace('{{image_url}}', $image_url, $template);

// Output the final HTML
echo $template;
?>