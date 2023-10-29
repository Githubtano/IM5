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
        $species_name = $row['species_name'];
        $description = $row['description'];
        // Remove the below line if your database doesn't have an image_url column
        $image_url = $row['image_url'];  
    } else {
        echo "0 results";
        exit;
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($species_name); ?> Information</title>
    <!-- Add your CSS file link here -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1><?php echo htmlspecialchars($species_name); ?></h1>
        <p><?php echo htmlspecialchars($description); ?></p>
    
        <!-- Remove the below line if your database doesn't have an image_url column -->
        <img src="<?php echo htmlspecialchars($image_url); ?>" alt="<?php echo htmlspecialchars($species_name); ?>">
    </div>
</body>
</html>
