<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array 6</title>
</head>
<header>
    <?php
        date_default_timezone_set('Europe/Madrid');
        setlocale( LC_ALL,"es_ES@euro","es_ES","esp" );
        echo strftime("Hoy es %A, %d de %B de %Y y son las %H:%M:%S", date_timestamp_get(new DateTime()));
        echo "<br>";
    ?>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <h3>Formulario</h3>
</header>