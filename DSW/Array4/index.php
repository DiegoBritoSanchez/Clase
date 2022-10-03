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
        <?php
        $diccionario = array(
            array("Lunes" => "monday", "Martes" => "tuesday", "Miercoles" => "wednesday", "Jueves" => "thursday", "Viernes" => "friday", "Sabado" => "saturday", "Domingo" => "sunday"),
            array("Lunes" => "lundi", "Martes" => "mardi", "Miercoles" => "mercredi", "Jueves" => "jeudi", "Viernes" => "vendredi", "Sabado" => "samedi", "Domingo" => "dimanche"),
            array("Lunes" => "lunedi", "Martes" => "martedi", "Miercoles" => "mercoledi", "Jueves" => "giovedi", "Viernes" => "venerdi", "Sabado" => "sabato", "Domingo" => "domenica")
        );
        ?>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <table>
                <tr>
                    <th colspan="7">Selecciona dia de la semana</th>
                </tr>
                <tr>
                    <td><label for="lunes">Lunes</label>
                        <input type='radio' name='dia' id='lunes' value='Lunes' />
                    </td>
                    <td><label for="martes">Martes</label>
                        <input type='radio' name='dia' id='martes' value='Martes' />
                    </td>
                    <td><label for="miercoles">Miercoles</label>
                        <input type='radio' name='dia' id='miercoles' value='Miercoles' />
                    </td>
                    <td><label for="jueves">Jueves</label>
                        <input type='radio' name='dia' id='jueves' value='Jueves' />
                    </td>
                    <td><label for="viernes">Viernes</label>
                        <input type='radio' name='dia' id='viernes' value='Viernes' />
                    </td>
                    <td><label for="sabado">Sábado</label>
                        <input type='radio' name='dia' id='sabado' value='sabado' />
                    </td>
                    <td><label for="domingo">Domingo</label>
                        <input type='radio' name='dia' id='domingo' value='domingo' />
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="3">Indique el idioma</th>
                </tr>
                <tr>
                    <td><label for="ingles">Inglés</label>
                        <input type='radio' name='idioma' id='ingles' value='0' />
                    </td>
                    <td><label for="frances">Francés</label>
                        <input type='radio' name='idioma' id='frances' value='1' />
                    </td>
                    <td><label for="italiano">Italiano</label>
                        <input type='radio' name='idioma' id='italiano' value='2' />
                    </td>
                </tr>
            </table>
        </form>
        <table>
            <?php
            $pares = array(0, 2, 4, 6, 8, 10, 12, 14, 16, 18);
            if (isset($_POST['par'])) {
                if ($_POST['par'] <= 10) {
                    echo "<th>Lista de pares</th>";
                    for ($i = 0; $i < $_POST['par']; $i++) {
                        echo "<tr><td>" . $pares[$i] . "</td></tr>";
                    }
                } else {
                    echo "<tr><td>Por favor introduzca un valor válido</td></tr>";
                }
            }
            ?>
        </table>

    </div>
</body>

</html>