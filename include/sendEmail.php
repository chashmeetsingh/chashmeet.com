<?php
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

  $subject = "You have received a new message";

  $message .= "Email from: " . $name . "<br /><br />";
  $message .= "Email address: " . $email . "<br /><br />";
  $message .= "Message: <br /><br />";
  $message .= $contact_message;
  $message .= "<br /><br /> ----- <br /><br /> This email was sent from your site's contact form. <br />";

  $from =  $name . " <" . $email . ">";

  $headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  ini_set("sendmail_from", $siteOwnersEmail); // for windows server
  $mail = mail($siteOwnersEmail, $subject, $message, $headers);

  if ($mail) { echo json_encode("Your message has been sent."); }
  else { echo json_encode("Something went wrong. Please try again."); }

} else {
  echo json_encode("There was some problem sending your message.");
}
?>
