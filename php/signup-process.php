<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Veritabanı bağlantısı ve kullanıcı kaydı için gerekli işlemleri burada yapabilirsiniz.
    // Bu örnek, veritabanına bağlanmayı ve kullanıcıyı eklemeyi gösteren basit bir örnektir.
    
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

    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Yeni kayıt başarıyla oluşturuldu";
    } else {
        echo "Hata: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
