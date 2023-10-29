// species.php
<?php
include 'config.php';  // Include the config.php file

$species_id = $_GET['id'];  // Get the species id from the URL

try {
    $stmt = $db->prepare("SELECT * FROM clownfish_species WHERE id = :id");
    $stmt->bindParam(':id', $species_id, PDO::PARAM_INT);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $species_name = $row['species_name'];
        $description = $row['description'];
        $image_url = $row['image_url'];
    } else {
        echo "0 results";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
