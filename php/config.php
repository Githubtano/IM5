<?php
// Database configuration
$dbHost = "localhost:3306";  // Hostname and port
$dbName = "IM5";            // Database name
$dbUser = "IM5";            // Database username
$dbPass = "cae266cha";      // Database password


// Attempt to connect to the database
try {
    $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);

    
    // Set the PDO error mode to exception
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
