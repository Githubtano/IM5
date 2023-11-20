<?php

include 'config.php';

try {
    $stmt = $db->query("SELECT * FROM clownfish_species");
    $species_list = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
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

    <link rel="icon" type="image/x-icon" href="/images/favicon.jpg">

</head>
<body>
<header-element></header-element>
    <script src="/js/header-element.js"></script>
    <div class="container">
    <h1>Clownfish   <br>   <span class="orange">Species List</span></h1>
    
<ul class="species-list">
    <?php foreach ($species_list as $species): ?>
        <li>
            <span class="species-name"><?php echo htmlspecialchars($species['species_name']); ?></span>
            <img src="<?php echo htmlspecialchars($species['image_url']); ?>" alt="<?php echo htmlspecialchars($species['species_name']); ?>" class="species-image">
        </li>
    <?php endforeach; ?>
</ul>

</div>
</body>
</html>