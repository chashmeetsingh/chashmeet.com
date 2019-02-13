<?php
header('Content-Type: application/json');

$aResult = array();

if( !isset($_POST['email']) ) { $aResult['error'] = 'Email not present'; }
if( !isset($_POST['name']) ) { $aResult['error'] = 'Name not present'; }
if( !isset($_POST['message']) ) { $aResult['error'] = 'Message not present'; }

if( !isset($aResult['error']) ) {

  echo json_encode($aResult);

}
?>
