<!DOCTYPE html>
<html>
<head>
	<title>Заявки</title>
	<meta charset="utf-8">
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		table {
			display: flex;
			justify-content: center;
			margin-top: 30px;
		}

		tbody {
			background-color: #87ceeb;
		}

		th, td {
			outline: 1px solid #000;
			padding: 10px 5px;
		}
	</style>
</head>
<body>

	<table>
		<tr>
			<th>Дата и время</th>
			<th>Имя</th>
			<th>E-mail</th>
			<th>Телефон</th>
			<th>Сообщение</th>
		</tr>

	<?

		$dbh = new PDO('mysql:host=localhost;dbname=u1129649_default', 'u1129649_default', 'kMGMQ__1');

		$sth = $dbh->prepare("SELECT `time`, name, email, phone, message FROM orders");
		$sth->execute();
		$result = $sth->fetchAll();

		foreach ($result as $item) {
			?><tr>
				<td><?=$item['time'] ?></td>
				<td><?=$item['name'] ?></td>
				<td><?=$item['email'] ?></td>
				<td><?=$item['phone'] ?></td>
				<td><?=$item['message'] ?></td>
			</tr><?
		}

	?>

	</table>


</body>
</html>


<?

