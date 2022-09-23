<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Ejercicio3/style.css">
</head>

<body>
    <a target="_self" href="../" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="index.php" method="post">
            <label for="number">Introduce un número</label>
            <input type="number" name="number" id="">
            <?php
            error_reporting(0);
            $numero = $_POST['number'];
            if ($numero == null) {
            } else if ($numero % 2 == 0) {
                echo "<label for='' id=''>Número par</label>";
            } else {
                echo "<label for='' id=''>Número impar</label>";
            }
            ?>
            <button type="submit">Enviar</button>
            <button type="reset">Borrar</button>
        </form>
    </div>
</body>

</html>