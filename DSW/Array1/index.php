<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Array 1</title>
</head>

<body>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="meses">¿De qué mes quieres saber los días que contiene?</label>
            <select name="meses" id="">
                <option value="default" disabled selected>Seleccion mes...</option>
                <?php
                $meses = array(
                    "enero" => 31, "febrero" => 28, "marzo" => 31, "abril" => 30, "mayo" => 31, "junio" => 30,
                    "julio" => 31, "agosto" => 31, "septiembre" => 30, "octubre" => 31, "noviembre" => 30, "diciembre" => 31
                );
                foreach ($meses as $key => $value) {
                    echo "<option value='$value'>$key</option>";
                }
                ?>
            </select>
            <button type="submit">Enviar</button>
        </form>
        <table>
        <?php
        if (isset($_POST['meses'])) {
            echo "<th>Días del mes</th>";
            echo "<tr><td>".$_POST['meses']."</td></tr>";
        }
        ?>
        </table>
        
    </div>
</body>

</html>