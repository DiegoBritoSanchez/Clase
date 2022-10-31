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
            <input type="text" name="usu">
            <label for="pswd">Contraseña</label>
            <input type="password" name="pswd" id="">
            <label for="pswd">Repita la contraseña</label>
            <input type="password" name="pswd2" id="">
            <input type="hidden" value="1" name="tipo">
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
            session_start();
            //$_SESSION['usuarios']

            $control = 0;

            if (isset($_POST['usu']) && isset($_POST['pswd']) && isset($_POST['pswd2'])) {
                //print_r($_SESSION['usuarios']);
                if ($_POST['pswd'] == $_POST['pswd2']) {
                    $usu = limpiar($_POST['usu']);
                    $pass = limpiar($_POST['pswd']);
                    $tipo = limpiar($_POST['tipo']);
                    $listado = $_SESSION['usuarios'];
                    $usuarioNuevo = array($usu, $pass, $tipo);
                    if (array_push($listado, $usuarioNuevo)){
                        //print_r($_SESSION['usuarios']);
                        header("refresh:1.5;url=../Ejercicio4.2/");
                    }
                }
            }
            ?>
        </table>
    </div>
</body>

</html>