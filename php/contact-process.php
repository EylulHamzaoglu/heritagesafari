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
$message = $_POST['message'];

// Veritabanına ekleme sorgusu
$sql = "INSERT INTO contacts (first_name, last_name, email, phone, message)
VALUES ('$first_name', '$last_name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Your message has been sent successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
