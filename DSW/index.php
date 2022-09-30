<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" placeholder="prueba">
            <label for="contrasena">Contraseña</label>
            <input type="password" name="contrasena" id="" placeholder="1234">
            <button type="submit" class="log">Enviar</button>
        </form>
        <?php
        if (isset($_POST['nombre']) || isset($_POST['contrasena'])) {
            if ($_POST['nombre'] != 'prueba' && $_POST['contrasena'] != '1234') {
                echo "Usuario y contraseña incorrectos...";
                header("refresh:1.5;url=index.php");
            } else if ($_POST['nombre'] == 'prueba' && $_POST['contrasena'] != '1234') {
                echo "Contraseña incorrecta...";
                header("refresh:1.5;url=index.php");
            } elseif ($_POST['nombre'] != 'prueba' && $_POST['contrasena'] == '1234') {
                echo "Usuario incorrecto...";
                header("refresh:1.5;url=index.php");
            } else {
                header("refresh:1.5;url=menu.html");
            }
        }
        ?>
    </div>
</body>

</html>