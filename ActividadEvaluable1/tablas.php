<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
        <h1>Tablas de multiplicar (Formulario)</h1>
        <fieldset>
            <legend>Formulario</legend>
            <h5>Escribe un número (0 < números < 20) y mostraré las tablas de multiplicar hasta ese número</h3>
                    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
                        <label for="num"><b>Número:</b></label>
                        <input type="text" name="num" id="num">
                        <input type="submit" value="Mostrar">
                        <input type="reset" value="Borrar">
                    </form>
        </fieldset>
        <table>
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $num = $_POST['num'];
                if (is_numeric($num) && $num >= 0 && $num <= 20) {
                    if ($num % 2 == 0) {
                        for ($i = 1; $i <= $num; $i++) {
                            echo "<tr><th>$i</th>";
                            for ($f = 1; $f <= 10; $f++) {
                                echo "<td>" . ($f * $i) . "</td>";
                            }
                            echo "</tr>";
                        }
                    } else {
                        for ($i = 1; $i <= $num; $i++) {
                            echo "<tr><th>$i</th>";
                            for ($f = 1; $f <= 10; $f++) {
                                if ($i == 1) {
                                    echo "<td style='background-color: red;'>" . ($f * $i) . "</td>";
                                } else {
                                    echo "<td>" . ($f * $i) . "</td>";
                                }
                            }
                            echo "</tr>";
                        }
                    }
                } else {
                    echo "<tr><td>Introduzca un valor correcto</td></tr>";
                }
            }
            ?>
        </table>
        <a href="menu.html">Volver</a>
    </div>
</body>

</html>