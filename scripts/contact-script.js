document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yenilenmesini önler

    var formData = new FormData(this);

    fetch('process_contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        document.getElementById('contact-form').reset(); // Formu temizler
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
