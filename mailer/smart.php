<?php 

$theme = $_POST['theme'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$massage = $_POST['massage'];
$doc = $_POST['doc'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'managerbounty@gmail.com';                 // Наш логин
$mail->Password = 'wxtd kpau npcg ssgi';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('managerbounty@gmail.com', 'iqtag new email');   // От кого письмо 
$mail->addAddress('dm.kolomiets@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Data from iqtag 1';
// $mail->Body    = '
// 	Пользователь оставил данные: <br> 

// 	<b>Имя:</b> ' . $name . ' <br>
// 	<b>Номер телефона:</b> ' . $phone . '<br>
// 	<b>E-mail:</b> ' . $email . ' <br>
// 	<b>Doc:</b> ' . $doc . ' <br>
// 	<b>Сообщение:</b> ' . $massage .'';

// if(!$mail->send()) {
//     return false;
// } else {
//     return true;
// }

if ($theme == 'subscription-form-1') {
	$mail->Subject = 'Email from iqtag';
	$mail->Body    = '
	The user left the data: <br> 

	<b>E-mail:</b> ' . $email . '';

	if(!$mail->send()) {
		return false;
	} else {
		return true;
	}
}

if ($theme == 'subscription-form-2') {
	$mail->Subject = 'Question from a client iqtag';
	$mail->Body    = '
	The user left the data: <br> 

	<b>Name:</b> ' . $name . ' <br>
	<b>E-mail:</b> ' . $email . ' <br>
	<b>Сообщение:</b> ' . $massage .'';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
}

?>

