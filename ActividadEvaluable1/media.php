<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media</title>
    <style>
        body {
            text-align: center;
        }

        table {
            margin: auto;
            text-align: center;
        }

        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div id="container">
        <h5>Escriba las notas de las tres avaluaciones</h5>
        <table>
            <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
                <tr>
                    <td><label for="1ev">1ª Eval: </label></td>
                    <td><input type="text" name="1ev" id="1ev"></td>
                </tr>
                <tr>
                    <td><label for="2ev">2ª Eval: </label></td>
                    <td><input type="text" name="2ev" id="2ev"></td>
                </tr>
                <tr>
                    <td><label for="3ev">3ª Eval: </label></td>
                    <td><input type="text" name="3ev" id="3ev"></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Enviar"></td>
                    <td><input type="reset" value="Restablecer"></td>
                </tr>
            </form>
        </table>
        <table>
            <?php
            function media($nota1, $nota2, $nota3)
            {
                $sum = ($nota1 + $nota2 + $nota3) / 3;
                if ($sum >= 5) {
                    echo "<tr><td>Con un $sum estás aprobado</td></tr>";
                } else {
                    echo "<tr><td>Con un $sum estás suspendido</td></tr>";
                }
            }

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $nota1 = $_POST['1ev'];
                $nota2 = $_POST['2ev'];
                $nota3 = $_POST['3ev'];
                if (is_numeric($nota1) && is_numeric($nota2) && is_numeric($nota3)) {
                    media($nota1, $nota2, $nota3);
                } else {
                    echo "<tr><td>Introduzca los valores correctamente</td></tr>";
                }
            }
            ?>
        </table>
        <a href="menu.html">Volver</a>
    </div>
</body>

</html>