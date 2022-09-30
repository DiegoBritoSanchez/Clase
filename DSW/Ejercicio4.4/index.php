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
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="col">Número de columnas</label>
            <input type="number" name="col" id="">
            <label for="row">Número de Filas</label>
            <input type="number" name="row" id="">
            <label for="inicio">Número de inicio</label>
            <input type="number" name="inicio" id="">
            <label for="incremento">Número de incremento</label>
            <input type="number" name="incremento" id="">
            <button type="submit">Enviar</button>
            <table>
                <?php
                /*error_reporting(0);*/
                if (isset($_POST['inicio']) && isset($_POST['row'])) {
                    $num = $_POST['inicio'];
                    for ($i = 0; $i < $_POST['row']; $i++) {
                        echo "<tr>";
                        for ($f = 0; $f < $_POST['col']; $f++) {
                            echo "<td>$num</td>";
                            $num += $_POST['incremento'];
                        }
                        echo "</tr>";
                    }
                }
                ?>
            </table>

        </form>
    </div>
</body>

</html>