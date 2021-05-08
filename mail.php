<?php

$to = "krovlysite@yandex.ru"; # сюда записывать нужный емейл получателя

$email = "noreply@mail.com";
$name = $_POST["name"];
$telephone = $_POST["telephone"];
$text = $_POST["text"];

$subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail($to, $subject, $text, $headers);
echo $success;

header("Location: index.html");

?>