<?php
header('Access-Control-Allow-Origin: *');
error_reporting(-1);
ini_set('display_errors', 'On');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'webinar@keyshell.net';

$emailFrom = 'webinar@keyshell.net';
$emailFromName = 'Webinar Registration Form';
$smtpUsername = 'dots@galaxyproscheduler.com';
$smtpPassword = '8p;XIbh-G6Bx';
$emailTo = 'webinar@keyshell.net';
$emailToName = 'Keyshell';

$mail = new PHPMailer(true);
try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'n3plcpnl0091.prod.ams3.secureserver.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'webinar@keyshell.net';                     //SMTP username
    $mail->Password   = '?2T0{@YEi2[d';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_STARTTLS` encouraged 587
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webinar@keyshell.net', 'Keyshell Webinar');
    $mail->addAddress('webinar@keyshell.net', 'Keyshell Webinar');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Registration Details';
    $mail->msgHTML(
    "Name : ".$_POST['name']."<br>Email : ".$_POST['email']."<br>Phone no. : ".$_POST['phone']."<br>Company: ".$_POST['company']."<br>Experience: ".$_POST['experience']
    );
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Thank you for contacting Keyshell. Our team will get back to you.';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


$mail = new PHPMailer(true);
try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'n3plcpnl0091.prod.ams3.secureserver.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'webinar@keyshell.net';                     //SMTP username
    $mail->Password   = '?2T0{@YEi2[d';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_STARTTLS` encouraged 587
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webinar@keyshell.net', 'Keyshell Webinar');
    $mail->addAddress($_POST['email'], $_POST['name']);     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Registration Details';
    $mail->msgHTML(
    "Thank you for contacting Keyshell. Our team will get back to you."
    );
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    //echo 'Registration successfull. The YouTube live URL will be mailed before 48 hours.';
} catch (Exception $e) {
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
