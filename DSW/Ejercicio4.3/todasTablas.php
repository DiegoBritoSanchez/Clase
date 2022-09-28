<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../style.css">
</head>

<body>
    <a target="_self" href="../" id="volver">Volver</a><br>
    <div id="contenedor">
        <?php
            for ($i = 1; $i <= 10; $i++) {
                echo "<table>Tabla del $i";
                for ($f = 0; $f <= 10; $f++) {
                    echo "<tr><td>$f x $i = " . ($f * $i) . "</td></tr>";
                }
                echo "</table>";
            }
        ?>
    </div>
</body>

</html>