<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <style>
        body {
            background-image: url("../image/pexels-valiphotos-589840.jpg");
            color: aliceblue;
        }

        #contenedor {
            padding: 1em;
            width: 50%;
            margin: auto;
            position: absolute;
            left: 50%;
            -ms-transform: translatex(-50%);
            transform: translatex(-50%);
            -webkit-transform: translatex(-50%);
            -moz-transform: translatex(-50%);
            -o-transform: translatex(-50%);
        }

        #volver {
            background-color: aqua;
            margin: 1em 1em;
            padding: 1em;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
        }

        #volver:hover {
            background-color: aquamarine;
            text-decoration: none;
            text-transform: uppercase;
        }

        #volver:visited {
            color: blue;
            text-decoration: none;
            text-transform: uppercase;
        }

        .grid {
            flex-wrap: wrap;
            display: flex;
        }

        .grid-interion {
            flex-basis: 100%;
        }

        table {
            padding: 5em;
            text-align: center;
            text-transform: uppercase;
        }

        td,th,tr {
            border: 2px solid white;
            padding: 1ex;
        }
    </style>
</head>

<body>
    <a target="_self" href="index.php" id="volver">Volver</a><br>
    <div id="contenedor" class="grid">
        <?php
        error_reporting(0);
        for ($i = 1; $i <= 10; $i++) {
            echo "<div class='grid-interior'><table><th>Tabla del $i</th>";
            for ($f = 0; $f <= 10; $f++) {
                echo "<tr><td>$f x $i = " . ($f * $i) . "</td></tr>";
            }
            echo "</table></div>";
        }
        ?>
    </div>
</body>

</html>