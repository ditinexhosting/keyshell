<?php
header('Access-Control-Allow-Origin: *');
error_reporting(-1);
ini_set('display_errors', 'On');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'webinar@keyshell.net';

$emailFrom = $_POST['email'];
$emailFromName = 'Webinar Registration Form';
$smtpUsername = 'webinar@keyshell.net';
$smtpPassword = '?2T0{@YEi2[d';
$emailTo = 'webinar@keyshell.net';
$emailToName = 'Keyshell';

$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = 'mail.keyshell.net'; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 587; // TLS only
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = $smtpUsername;
$mail->Password = $smtpPassword;
$mail->setFrom($emailFrom, $emailFromName);
$mail->addAddress($emailTo, $emailToName);
$mail->Subject = 'Registration Details';
$mail->msgHTML(
"Name : ".$_POST['name']."<br>Email : ".$_POST['email']."<br>Phone no. : ".$_POST['phone']."<br>Company: ".$_POST['company']."<br>Experience: ".$_POST['experience']
); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
$mail->AltBody = 'HTML messaging not supported';
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file

if(!$mail->send()){
    die("Mailer Error: " . $mail->ErrorInfo);
}

$emailFrom = 'webinar@keyshell.net';
$emailFromName = 'Webinar Keyshell';
$emailTo = $_POST['email'];
$emailToName = $_POST['name'];

$mail->setFrom($emailFrom, $emailFromName);
$mail->addAddress($emailTo, $emailToName);
$mail->Subject = 'Registration Successfull';
$mail->msgHTML(
"The YouTube live URL will available only before 48 hours."
);
if(!$mail->send()){
    die("Mailer Error: " . $mail->ErrorInfo);
}
else{
    echo "Message sent!";
}

?>
