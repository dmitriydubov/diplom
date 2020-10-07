<!DOCTYPE html>
<html>
<head>
	<title>Заказы звонков</title>
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
			margin: 30px 0;
		}

		tbody {
			background-color: #87ceeb;
		}

		th, td {
			outline: 1px solid #000;
			padding: 30px 20px;
		}
	</style>
</head>
<body>

	<table>
		<tr>
			<th>Дата и время</th>
			<th>Имя</th>
			<th>Телефон</th>
		</tr>

	<?

		$dbh = new PDO('mysql:host=localhost;dbname=u1129649_default', 'u1129649_default', 'kMGMQ__1');

		$sth = $dbh->prepare("SELECT `time`, name, phone FROM callback");
		$sth->execute();
		$result = $sth->fetchAll();

		foreach ($result as $item) {
			?><tr>
				<td><?=$item['time'] ?></td>
				<td><?=$item['name'] ?></td>
				<td><?=$item['phone'] ?></td>
			</tr><?
		}

	?>

	</table>


</body>
</html>


<?