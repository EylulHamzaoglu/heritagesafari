<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Mail gönderme işlemi burada yapılabilir.
    $to = "heritageSafari@company.com";
    $subject = "New Contact Message from $first_name $last_name";
    $body = "Name: $first_name $last_name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
