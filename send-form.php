<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
<<<<<<< HEAD
  $toEmail = "aquafit@gmail.com";
=======
<<<<<<< HEAD
  $toEmail = "thrivegreenhouse@gmail.com";
=======
  $toEmail = "sunpower@gmail.com";
>>>>>>> main
>>>>>>> main
  $subject = "Новое сообщение";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $message = "Имя: " . $username . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Сообщение: " . $message . "\n";

  $headers = "From: " . $email . "\r\n";

  if (mail($toEmail, $subject, $message, $headers)) {
    header("Location: thanks.html");
    exit;
  } else {
    echo "Ошибка при отправке сообщения.";
  }
}
?>