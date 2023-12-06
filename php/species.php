<?php
// Load config settings
include 'config.php';

// Check if 'id' is in URL and is a number
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $species_id = $_GET['id'];
} else {
    echo "Invalid ID";
    exit;
}

// Check if 'probability' is in URL
if (isset($_GET['probability'])) {
    $probability = $_GET['probability'];
} else {
    echo "Invalid Probability";
    exit;
}

try {
    // Prepare and execute SQL statement
    $stmt = $db->prepare("SELECT * FROM clownfish_species WHERE id = :id");
    $stmt->bindParam(':id', $species_id, PDO::PARAM_INT);
    $stmt->execute();
    
    // Check if results exist
    if ($stmt->rowCount() > 0) {
        // Fetch data and sanitize
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $species_name = htmlspecialchars($row['species_name']);
        $description = htmlspecialchars($row['description']);
        $image_url = htmlspecialchars($row['image_url']);  
    } else {
        echo "0 results";
        exit;
    }
} catch(PDOException $e) {
    // Handle SQL errors
    echo "Error: " . $e->getMessage();
    exit;
}

// Load HTML template
$template = file_get_contents('../template.html');
if ($template === false) {
    echo "Failed to load template.html";
    exit;
}

// Replace placeholders in template
$template = str_replace('{{title}}', $species_name, $template);
$template = str_replace('{{species_name}}', $species_name, $template);
$template = str_replace('{{probability}}', $probability, $template);
$template = str_replace('{{description}}', $description, $template);
$template = str_replace('{{image_url}}', $image_url, $template);

// Display final HTML
echo $template;
?>
