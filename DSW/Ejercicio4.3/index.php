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
            echo "<table>";
            for ($i=0; $i < 10; $i++) { 
                echo "";
            }
            echo "</table>";
            ?>
            <button type="submit">Enviar</button>
            <button type="reset">Borrar</button>
        </form>
    </div>
</body>

</html>