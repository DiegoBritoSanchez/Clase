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
            <input type="submit" value="Enviar">
        </form>
        <?php
        function limpiar($data)
        {
            $data = trim($data);
            $data = htmlentities($data);
            $data = htmlspecialchars($data);
            $data = stripslashes($data);
            return $data;
        }

        $usuarios = array(
            array("admin", "admin", 0),
            array("diego", "qwerty", 0),
            array("prueba", "prueba", 1),
            array("prueba2", "1234", 1)
        );

        $usu = limpiar($_POST['usu']);
        $pass = limpiar($_POST['pswd']);
        $control = 0;

        if (isset($_POST['usu']) && isset($_POST['pswd'])) {
            while ($control < count($usuarios)) {
                $controlAux = 0;
                if ($usu == $usuarios[$control][0] && $pass == $usuarios[$control][1]) {
                    $tipo = $usuarios[$control][2];
                    if ($tipo == 0) {
                        echo "Hola, bienvenid@ " . $usu . ", veo que eres ADMINISTRADOR y te voy a permitir ver todos los ejercicios";
                    } else if ($tipo == 1) {
                        echo "Hola, bievenid@" . $usu . ", veo que eres USUARIO REGISTRADO";
                    }
                    break;
                }
                $control++;
            }
            if ($control == count($usuarios)) {
                echo "prueba";
            }
            
        }
        ?>
    </div>
</body>

</html>