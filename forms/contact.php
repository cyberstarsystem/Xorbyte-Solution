<?php

// Only run when form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get form data safely
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  // 👉 YAHAN APNA EMAIL DALNA HAI
  $to = "contact@xorbytesolution.com";

  $mail_subject = "New Contact Form Message";

  $body = "
  You received a new message from your website contact form:

  Name: $name
  Email: $email
  Subject: $subject

  Message:
  $message
  ";

  // Email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Send mail
  if (mail($to, $mail_subject, $body, $headers)) {
    echo "OK";   // IMPORTANT (template JS needs this)
  } else {
    echo "Something went wrong";
  }
}
?>
