<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
        table,
        tr,
        td,
        th {
            border: 1px solid black;
        }

        input,
        select {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <?php
    include("../php/connect.inc");
    echo "</header>";
    include("../php/limpiar.php");
    $sql = "SELECT * FROM productos";
    $result = $conn->query($sql);
    echo "<div class='w-full p-6 flex flex-row place-content-center'>
            <table>
            <tr><th>Nombre</th><th>Precio</th><th>Peso</th><th>Existencias</th><th>Activado</th></tr>";
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr><td>" . $register['nombre'] . "</td><td>" . $register['precio'] . "</td><td>" . $register['peso'] . "</td><td>" . $register['existencias'] . "</td><td>" . $register['activado'] . "</td></tr>";
    }
    echo "</table>
            </div>";
    ?>
    <div class="w-full p-6 flex flex-row place-content-center">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
            <fieldset>
                <legend class="text-center py-5">Añadir productos</legend>
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" autocomplete="off">
                <label for="peecio">Precio</label>
                <input type="number" name="precio" autocomplete="off">
                <label for="peso">Peso</label>
                <input type="text" name="peso" autocomplete="off">
                <label for="existencias">Existencias</label>
                <input type="number" name="existencias" autocomplete="off">
                <label for="peso">Activado</label>
                <select name="" id="">
                    <option value="1">Si</option>
                    <option value="0">No</option>
                </select>
                <input type="submit" value="Enviar">
                <input type="reset" value="Borrar">
            </fieldset>
        </form>
    </div>
    <?php
    function limpiar($data)
    {
        $data = trim($data);
        $data = htmlentities($data);
        $data = stripslashes($data);
        return $data;
    }
    ?>
</body>

</html>