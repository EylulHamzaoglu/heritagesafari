<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Veritabanı bağlantısı ve kullanıcı giriş kontrolü için gerekli işlemleri burada yapabilirsiniz.
    // Bu örnek, veritabanına bağlanmayı ve kullanıcıyı kontrol etmeyi gösteren basit bir örnektir.
    
    // Veritabanı bilgilerinizi buraya ekleyin
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "heritagesafari";

    // Bağlantı oluştur
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Bağlantıyı kontrol et
    if ($conn->connect_error) {
        die("Bağlantı hatası: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Giriş başarılı";
    } else {
        echo "Geçersiz e-posta veya şifre";
    }

    $conn->close();
}
?>
