<?php

<?php
// Include the configuration file for database settings
include 'config.php';

try {
    // Execute a query to select all records from the clownfish_species table
    $stmt = $db->query("SELECT * FROM clownfish_species");

    // Fetch all the records as an associative array
    $species_list = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Count the number of species retrieved
    $species_count = count($species_list);
} catch (PDOException $e) {
    // If an error occurs, display the error message and stop the script
    echo "Error: " . $e->getMessage();
    exit;
}
?>

<!-- html -->
<!-- html -->
<!-- html -->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Clownfish Species List</title>
        <link rel="stylesheet" type="text/css" href="/css/specieslist.css">
        <link rel="stylesheet" type="text/css" href="/css/header.css">
        <link rel="stylesheet" type="text/css" href="/css/media.css">
        <link rel="stylesheet" type="text/css" href="/css/base.css">
        <link rel="icon" type="image/x-icon" href="/images/favicon.jpg">
    </head>

    <body>
        <header-element>
            <script src="/js/header-element.js"></script>
        </header-element>

        <div class="container">
            <h1 class="title">Clownfish <br> <span class="orange">Species List</span></h1>
            <p id="species-count" class="species-count">Number of species in the database: <?php echo $species_count; ?></p>    
            
                <ul class="species-list">
                    <?php foreach ($species_list as $species): ?>
                        <li>
                            <span class="species-name"><?php echo htmlspecialchars($species['species_name']); ?></span>
                            <img src="<?php echo htmlspecialchars($species['image_url']); ?>" 
                            alt="<?php echo htmlspecialchars($species['species_name']); ?>" class="species-image">
                        </li>
                    <?php endforeach; ?>
                </ul>
        </div>
    </body>
</html>