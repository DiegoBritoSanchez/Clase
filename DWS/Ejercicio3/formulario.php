<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $mail = $_POST['mail'];
    echo "<h1>Mi nombre es $nombre $apellido, tengo $edad años y mi email es $mail</h1>";
    echo "<a target=\"_self\" href=\"index.html\">Volver</a>";
    ?>
</body>
</html>