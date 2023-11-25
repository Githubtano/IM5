<?php
// Database configuration
$dbHost = "localhost:3306";  // Hostname and port
$dbName = "IM5";            // Database name
$dbUser = "IM5";            // Database username
$dbPass = "cae266cha";      // Database password
$charset = 'utf8mb4';       // Character set


// Attempt to connect to the database
try {
    $db = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=$charset", $dbUser, $dbPass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

