<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Array 2</title>
</head>

<body>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="par">¿Cuantos números pares quieres mostrar?</label>
            <input type="text" name="par" id="" placeholder="Introduce un número entre 1 y 10">
            <button type="submit">Enviar</button>
        </form>
        <table>
            <?php
            if (isset($_POST['par'])) {
                echo "<th>Lista de pares</th>";
                $par = $_POST['par'];
                for ($i = 0; $i < $par; $i++) {
                    $j = $i * 2;
                    echo "<tr><td>" . $j . "</td></tr>";
                }
            }
            ?>
        </table>

    </div>
</body>

</html>