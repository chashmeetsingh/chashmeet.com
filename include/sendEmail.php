<?php

require '../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

$siteOwnersEmail = 'chashmeetsingh@gmail.com';

$name = trim(stripslashes($_POST['name']));
$email = trim(stripslashes($_POST['email']));
$contact_message = trim(stripslashes($_POST['message']));

if( !isset($name) ) { $aResult['error'] = 'Email not present'; }
if( !isset($email) ) { $aResult['error'] = 'Name not present'; }
if( !isset($contact_message) ) { $aResult['error'] = 'Message not present'; }

if( !isset($aResult['error']) ) {



  $message .= "Email from: " . $name . "<br /><br />";
  $message .= "Email address: " . $email . "<br /><br />";
  $message .= "Message: <br /><br />";
  $message .= $contact_message;
  $message .= "<br /><br /> ----- <br /><br /> This email was sent from your site's contact form. <br />";

  $from = new SendGrid\Email($name, $email);
  $subject = "You have received a new message";
  $to = new SendGrid\Email("Chashmeet Singh", "chashmeetsingh@gmail.com");
  $content = new SendGrid\Content("text/plain", $message);
  $mail = new SendGrid\Mail($from, $subject, $to, $content);

  $apiKey = getenv('SENDGRID_API_KEY');
  $sg = new \SendGrid($apiKey);

  try {
    $response = $sg->client->mail()->send()->post($mail);
    echo json_encode("Your message has been sent.");
  } catch (Exception $e) {
    echo json_encode("Something went wrong. Please try again later.");
  }

} else {
  echo json_encode("There was some problem sending your message.");
}
?>
