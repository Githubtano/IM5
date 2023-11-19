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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clownfish Species List</title>
    <link rel="stylesheet" type="text/css" href="/css/specieslist.css">
</head>
<body>
    <div class="container">
        <h1>Clownfish Species List</h1>
        <ul>
            <?php foreach ($species_list as $species): ?>
                <li>
                    <a href="species.php?id=<?php echo $species['id']; ?>">
                        <?php echo htmlspecialchars($species['species_name']); ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>