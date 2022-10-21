<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: orange;
            text-align: center;
        }
        table {
            margin: auto;
        }
        tr,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <?php
    function limpiar($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $listUsers = array(
        array('diegoB', 'diegoB@diegoB.com'),
        array('jorge', 'jorge@joge.com')
    );
    ?>
    <div id="container">
        <h1>Ingrese usuario y contraseña</h1>
        <table>
            <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
                <tr>
                    <td><label for="usu">Usuario:</label></td>
                    <td><input type="text" name="usu" id="usu"></td>
                </tr>
                <tr>
                    <td><label for="pssw">Contraseña:</label></td>
                    <td><input type="text" name="pssw" id="pssw"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Enviar"></td>
                    <td><input type="reset" value="Borrar"></td>
                </tr>
            </form>
        </table>
    </div>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usu = limpiar($_POST['usu']);
        $pssw = limpiar($_POST['pssw']);
        if (filter_var($pssw, FILTER_VALIDATE_EMAIL)) {
            for ($i = 0; $i < count($listUsers); $i++) {
                if ($usu == $listUsers[$i][0] && $pssw == $listUsers[$i][1]) {
                    echo "Bienvenido $usu tienes que hacer los siguientes problemas";
                    header("refresh: 3; menu.html");
                }
            }
        } else {
            echo "El formato de contraseña debe ser tipo EMAIL";
        }
    }
    ?>
</body>

</html>