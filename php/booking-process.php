<?php
$servername = "localhost"; // Veritabanı sunucusu
$username = "root"; // Veritabanı kullanıcı adı
$password = ""; // Veritabanı şifresi
$dbname = "heritage_safari"; // Veritabanı adı

// Veritabanına bağlan
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form verilerini al
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$booking_date = $_POST['booking_date'];
$number_of_people = $_POST['number_of_people'];
$special_requests = $_POST['special_requests'];

// Veritabanına ekleme sorgusu
$sql = "INSERT INTO bookings (first_name, last_name, email, phone, booking_date, number_of_people, special_requests)
VALUES ('$first_name', '$last_name', '$email', '$phone', '$booking_date', '$number_of_people', '$special_requests')";

if ($conn->query($sql) === TRUE) {
    echo "New booking created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
