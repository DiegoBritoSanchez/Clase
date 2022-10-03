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
            $pares = array(0, 2, 4, 6, 8, 10, 12, 14, 16, 18);
            if (isset($_POST['par'])) {
                if ($_POST['par'] <= 10) {
                    echo "<th>Lista de pares</th>";
                    for ($i = 0; $i < $_POST['par']; $i++) {
                        echo "<tr><td>" . $pares[$i] . "</td></tr>";
                    }
                } else {
                    echo "<tr><td>Por favor introduzca un valor válido</td></tr>";
                }
            }
            ?>
        </table>

    </div>
</body>

</html>