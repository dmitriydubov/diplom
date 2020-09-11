<!DOCTYPE html>
<html>
<head>
	<title>Заявки</title>
	<meta charset="utf-8">
	<style type="text/css">
		table {
			margin: 30px auto 0;
		}

		tr {
			background-color: #87ceeb;
			font-size: 20px;
		}

		th, td {
			padding: 20px;
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
		</tr>

	<?

		$dbh = new PDO('mysql:host=localhost;dbname=u1129649_default', 'u1129649_default', 'kMGMQ__1');

		$sth = $dbh->prepare("SELECT `time`, name, email, phone FROM orders");
		$sth->execute();
		$result = $sth->fetchAll();

		foreach ($result as $item) {
			?><tr>
				<td><?=$item['time'] ?></td>
				<td><?=$item['name'] ?></td>
				<td><?=$item['email'] ?></td>
				<td><?=$item['phone'] ?></td>
			</tr><?
		}

	?>

	</table>


</body>
</html>


<?
