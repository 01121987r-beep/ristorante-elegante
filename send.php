
<?php
if($_SERVER['REQUEST_METHOD']==='POST'){
$nome=$_POST['nome']??'';
$email=$_POST['email']??'';
$data=$_POST['data']??'';
$msg=$_POST['messaggio']??'';

$to='your-email@example.com';
$subject='Prenotazione ristorante';
$message="Nome: $nome\nEmail: $email\nData: $data\nMessaggio: $msg";

mail($to,$subject,$message);

header('Location: thank-you.html');
exit;
}
?>
