document.querySelector('.search-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini önler

    var query = document.querySelector('.search-input').value.toLowerCase();
    var blogItems = document.querySelectorAll('.blog-item');

    blogItems.forEach(function(item) {
        var title = item.querySelector('.blog-text h2').textContent.toLowerCase();
        var content = item.querySelector('.blog-text p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
