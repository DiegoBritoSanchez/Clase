<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Ejercicio3/style.css" />
</head>

<body>
    <a target="_self" href="index.html" id="volver">Volver</a>
    <?php
    $color = $_POST['color'];
    echo "<body style='background-color:$color'>";
    ?>
</body>

</html>