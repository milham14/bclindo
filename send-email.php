<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject  = htmlspecialchars($_POST["subject"]);
    $pesan   = htmlspecialchars($_POST["message"]);

    $to = "youremail@domain.com"; // ganti dengan email kamu
    $subject = "Pesan Baru: $subject";
    $message = "Nama: $name\n";
    $message = "Email: $email\n";
    $message = "Telepon: $phone\n";
    $message = "Subjek: $subject\n";
    $message = "Pesan:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan.";
    }
}
?>
