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

// Blog yazılarını veritabanından çek
$sql = "SELECT * FROM blog_posts ORDER BY date DESC";
$result = $conn->query($sql);

$blog_posts = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $blog_posts[] = $row;
    }
} else {
    echo "No blog posts found";
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heritage Safari - Blog</title>
    <link rel="stylesheet" href="blog-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>
    <header>
        <div class="navbar">
            <div class="container">
                <a href="index.php" class="navbar-brand">
                    <img src="image/logo.png" alt="Heritage Safari Logo" style="height: 50px;">
                </a>
                <nav class="navbar-nav">
                    <a href="index.php">Home</a>
                    <a href="blog.php">Blog</a>
                    <a href="contact.php">Contact</a>
                    <a href="#">Turkey</a>
                    <a href="#">France</a>
                    <a href="#">Italy</a>
                    <a href="#">Spain</a>
                    <a href="#">Mexico</a>
                    <a href="#">Brazil</a>
                    <a href="#">India</a>
                    <a href="#">Japan</a>
                    <a href="#">Create Booking</a>
                </nav>
            </div>
        </div>
        <div class="banner">
            <div class="container">
                <h1 class="banner-title">Discover the World's Best Museums</h1>
                <p>Explore the cultural treasures and artistic heritage of various countries</p>
                <form>
                    <input type="text" class="search-input" placeholder="Search for museums...">
                    <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    </header>
    <section class="blog">
        <div class="container">
            <div class="title">
                <h2>Our Latest Articles</h2>
                <p>Stay updated with the latest news and stories from museums around the world</p>
            </div>
            <div class="blog-content">
                <?php foreach ($blog_posts as $post): ?>
                <div class="blog-item">
                    <div class="blog-img">
                        <img src="images/<?php echo htmlspecialchars($post['image']); ?>" alt="Museum in <?php echo htmlspecialchars($post['category']); ?>">
                        <span><?php echo htmlspecialchars($post['category']); ?></span>
                    </div>
                    <div class="blog-text">
                        <span><?php echo htmlspecialchars(date('F d, Y', strtotime($post['date']))); ?></span>
                        <h2><?php echo htmlspecialchars($post['title']); ?></h2>
                        <p><?php echo htmlspecialchars(substr($post['content'], 0, 150)); ?>...</p>
                        <a href="blog_post.php?id=<?php echo htmlspecialchars($post['id']); ?>">Read More</a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>© 2024 Heritage Safari. All rights reserved.</span>
        </div>
    </footer>
    <script src="blog.js"></script>
</body>
</html>
