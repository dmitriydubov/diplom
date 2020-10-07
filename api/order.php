<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	mail("schliffen@mail.ru", "Новый заказ", "Имя: $name; E-mail: $email; Телефон: $phone\n\n$message");

	$dbh = new PDO('mysql:host=localhost;dbname=u1129649_default', 'u1129649_default', 'kMGMQ__1');

	$q = "INSERT INTO orders(`time`, name, email, phone, message) 
		VALUES(NOW(), :name, :email, :phone, :message)";

	$sth = $dbh->prepare($q);
	$sth->bindParam(':name', $name, PDO::PARAM_STR);
	$sth->bindParam(':email', $email, PDO::PARAM_STR);
	$sth->bindParam(':phone', $phone, PDO::PARAM_STR);
	$sth->bindParam(':message', $message, PDO::PARAM_STR);
	$sth->execute();

	echo "order received!";

?>