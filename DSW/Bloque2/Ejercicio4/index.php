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
    <?php
    $ciclo = "Me gustaría probar el clico de Desarrollo aplicaciones web";
    $aprobar = "Me gustaría aprobar el módulo profesional de DSW";
    function prueba()
    {
        global $ciclo, $aprobar;
    }
    prueba();
    echo $ciclo . "<br>";
    echo $aprobar;
    ?>
</body>

</html>