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
            <label for="number">Introduce un número</label>
            <input type="number" name="number" id="">
            <label for="number2">Introduce otro número</label>
            <input type="number" name="number2" id="">
            <select name="operador" id="">
                <option value="dis" disabled="disabled" selected>Selecciona</option>
                <option value="sum">Suma</option>
                <option value="res">Resta</option>
                <option value="mul">Multiplicación</option>
                <option value="div">División</option>
                <option value="mod">Resto</option>
            </select>
            <?php
            error_reporting(0);
            $numero = $_POST['number'];
            $numero2 = $_POST['number2'];
            $operador = $_POST['operador'];

            switch ($operador) {
                case 'dis':
                    echo "<label disabled>No ha seleccionado operación</label>";
                    break;
                case 'sum':
                    echo "<label disabled>" . ($numero + $numero2) . "</label>";
                    break;
                case 'res':
                    echo "<label disabled>" . ($numero - $numero2) . "</label>";
                    break;
                case 'mul':
                    echo "<label disabled>" . ($numero * $numero2) . "</label>";
                    break;
                case 'div':
                    if ($numero2 == 0) {
                        echo "<label disabled>Su división es imposible</label>";
                    } else {
                        echo "<label disabled>" . ($numero / $numero2) . "</label>";
                    }
                    break;
                case 'mod':
                    echo "<label disabled>" . ($numero % $numero2) . "</label>";
                    break;
            }
            ?>
            <button type="submit">Enviar</button>
            <button type="reset">Borrar</button>
        </form>
    </div>
</body>

</html>