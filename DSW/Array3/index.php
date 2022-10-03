<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Array 3</title>
</head>

<body>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <table>
            <tr><th>Los valores almacenados en el vector asociativo son:</th></tr>
            <?php
            $pares = array("1" => 90, "30" => 7, "v" => 99, "hola" => 43);
            foreach ($pares as $key => $value) {
                echo "<tr><td>El elemento de índice ".$key." vale " .$value."</td></tr>";
            }
            ?>
        </table>

    </div>
</body>

</html>