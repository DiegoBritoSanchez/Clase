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
        <form action="index.php" method="post">
            <label for="number">Tabla de multiplicar:</label>
            <input type="number" name="number" id="">
            <?php
            error_reporting(0);
            $numero = $_POST['number'];
            if ($numero > 0) {
                echo "<table><th>Tabla del $numero</th>";
                for ($i = 0; $i < 10; $i++) {
                    echo "<tr><td>$numero x $i = " . ($numero * $i) . "</td></tr>";
                }
            }
            echo "</table>";
            ?>
            <button type="submit">Enviar</button>
        </form>
        <a href="todasTablas.php" style="margin-left: 1%;"><button>Todas las tablas</button></a>
    </div>
</body>

</html>