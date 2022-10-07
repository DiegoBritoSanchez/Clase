<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Array 1</title>
</head>

<body>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="usu">Usuario</label>
            <input type="text" name="usu" placeholder="admin // diego">
            <label for="pswd">Contraseña</label>
            <input type="password" name="pswd" id="" placeholder="admin // qwerty">
            <input type="submit" value="Enviar">
        </form>
        <table>
            <?php
            function limpiar($data)
            {
                $data = trim($data);
                $data = htmlentities($data);
                $data = htmlspecialchars($data);
                $data = stripslashes($data);
                return $data;
            }
            function mensajeBienvenida($tipo, $usu)
            {
                if ($tipo == 0) {
                    echo "<tr><td>Hola, bienvenid@ " . $usu . ", veo que eres ADMINISTRADOR y te voy a permitir ver todos los ejercicios</td></tr>";
                    header("refresh:1.5;url=../menu.html");
                } else if ($tipo == 1) {
                    echo "<tr><td>Hola, bievenid@" . $usu . ", veo que eres USUARIO REGISTRADO, solo podrás ver la calculadora.</td></tr>";
                    header("refresh:1.5;url=../Ejercicio4.2/");
                }
            }
            session_start();
            $_SESSION['usuarios'] = array(
                array("admin", "admin", 0),
                array("diego", "qwerty", 0),
                array("prueba", "prueba", 1),
                array("prueba2", "1234", 1)
            );

            $control = 0;

            if (isset($_POST['usu']) && isset($_POST['pswd'])) {
                $usu = limpiar($_POST['usu']);
                $pass = limpiar($_POST['pswd']);
                while ($control < count($_SESSION['usuarios'])) {
                    if ($usu == $_SESSION['usuarios'][$control][0] && $pass == $_SESSION['usuarios'][$control][1]) {
                        $tipo = $_SESSION['usuarios'][$control][2];
                        mensajeBienvenida($tipo, $usu);
                        break;
                    }
                    $control++;
                }
                if ($control == count($_SESSION['usuarios'])) {
                    echo "<tr><td>Veo que eres un usuario no registrado, procedemos a acceder al formulario de registro...</td></tr>";
                    header("refresh:1.5;logeo.php");
                }
            }
            ?>
        </table>
    </div>
</body>

</html>