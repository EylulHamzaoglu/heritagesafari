<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "heritage_safari";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT event_date FROM events";
$result = $conn->query($sql);

$events = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $events[] = $row['event_date'];
    }
}
$conn->close();

echo json_encode($events);
?>
