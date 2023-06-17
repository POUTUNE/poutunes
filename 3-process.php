<?php
// (A) PROCESS STATUS
$status = "";

// (B) VERIFY CAPTCHA
$secret = "6Le0HNElAAAAAIAHrzVMK8W9rFbmqF45CRW83H_4"; // CHANGE TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST["g-recaptcha-response"];
$verify = json_decode(file_get_contents($url));
if (!$verify->success) { $status = "Invalid captcha"; }

// (C) SEND MAIL
if ($status=="") {
  $mailTo = "lostofff@outlook.com"; // CHANGE TO YOUR OWN!
  $mailSubject = "Contact Form";
  $mailBody = "";
  foreach ($_POST as $k=>$v) {
    if ($k!="g-recaptcha-response") { $mailBody .= "$k: $v\r\n"; }
  }
  if (@mail($mailTo, $mailSubject, $mailBody)) { $status = "Thank you! Your submission has been received!"; }
  else { $status = "Failed to send mail"; }
}