<?php

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	mail("schliffen@mail.ru", "Заявка на звонок", "Имя: $name; Телефон: $phone");

	$dbh = new PDO('mysql:host=localhost;dbname=u1129649_default', 'u1129649_default', 'kMGMQ__1');

	$q = "INSERT INTO callback(`time`, name, phone) 
		VALUES(NOW(), :name, :phone)";

	$sth = $dbh->prepare($q);
	$sth->bindParam(':name', $name, PDO::PARAM_STR);
	$sth->bindParam(':phone', $phone, PDO::PARAM_STR);
	$sth->execute();

	echo "phone received!";

?>