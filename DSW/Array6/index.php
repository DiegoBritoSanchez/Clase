<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array 6</title>
</head>

<body>
    <?php
    error_reporting(0);
    function limpiar($data)
    {
        $data = trim($data);
        $data = htmlentities($data);
        $data = htmlspecialchars($data);
        $data = stripslashes($data);
        return $data;
    }
    function required($data)
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (empty($data)) {
                return false;
            }
        }
        return true;
    }
    function confirm($mail1, $mail2)
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (filter_var($mail1, FILTER_VALIDATE_EMAIL)) {
                if ($mail1 != $mail2) {
                    return false;
                }
            }
        }
        return true;
    }
    function weigth($data)
    {
        if (required($data)) {
            if ((50 > $data) && ($data < 250)) {
                echo "<span style='color:rgb(255,0,0);'>Peso incorrecto</span>";
            }
        }
    }
    function webConfirm($data)
    {
        if (required($data)) {
            if(filter_var($data, FILTER_VALIDATE_URL)){
                return true;
            };
        }
        return false;
    }


    //Comprobamos el envío del formulario
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        //Nombre
        $name = limpiar($_POST['name']);
        //Apellidos
        $surname = limpiar($_POST['surname']);
        //Edad
        $age = limpiar($_POST['age']);
        //Peso
        $weigth = limpiar($_POST['weigth']);
        //Telefono
        $phone = limpiar($_POST['phone']);
        //Web
        $web = limpiar($_POST['web']);
        //Coreo
        $mail = limpiar($_POST['mail1']);
        //conf correo
        $spam = limpiar($_POST['spam']);
        //Aficiones
        $hobby = $_POST['aficiones'];
        //Fruta
        $fruit = $_POST['fruta'];
        //Text area
        $comment = limpiar($_POST['textA']);
    }
    ?>
    <a target="_self" href="../menu.html" id="volver">Volver</a><br>
    <div id="contenedor">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
            <h3>FORMULARIO</h3>
            <fieldset>
                <legend>Datos personales</legend>
                <label for="name">Nombre:*</label>
                <input type="text" name="name">
                <?php
                echo required($_POST['name']) ? "" : "<span style='color:rgb(255,0,0);'>Campo requerido</span>";
                ?>
                <label for="surname">Apellidos:*</label>
                <input type="text" name="surname">
                <?php
                echo required($_POST['surname']) ? "" : "<span style='color:rgb(255,0,0);'>Campo requerido</span>";
                ?>
                <label for="age">Edad:</label>
                <select name="age" id="age">
                    <option value="..." selected disabled>...</option>
                    <?php
                    for ($i = 18; $i <= 65; $i++) {
                        echo "<option name='age' value='$i'>$i</option>";
                    }
                    ?>
                </select>
                <label for="weigth">Peso:</label>
                <input type="text" name="weigth"> kg
                <label for="phone">Teléfono:*</label>
                <input type="text" name="phone">
                <?php
                echo required($_POST['phone']) ? "" : "<span style='color:rgb(255,0,0);'>Campo requerido</span>";
                ?>
                <br><br><label for="web">Página Web:</label>
                <input type="text" name="web">
                <?php
                echo empty($_POST['web']) ? "" : (webConfirm($_POST['web']) ? "" : "<span style='color:rgb(255,0,0);'>Campo erróneo</span>");
                ?>
                <label for="mail1">Indique su dirección de correo:*</label>
                <input type="text" name="mail1" id="">
                <?php
                echo required($_POST['mail1']) ? "" : "<span style='color:rgb(255,0,0);'>Campo requerido</span>";
                ?>
                <label for="mail2">Confirme su dirección de correo:*</label>
                <input type="text" name="mail2" id="">
                <?php
                echo required($_POST['mail2']) ? "" : "<span style='color:rgb(255,0,0);'>Campo requerido</span>";
                echo confirm($_POST['mail1'], $_POST['mail2']) ? "" : "<span style='color:rgb(255,0,0);'>Los correos no coinciden</span>";
                ?>
                <br><br><label for="spam">Indique si quiere recibir correos nuestros:</label>
                <select name="spam" id="">
                    <option value="" selected disabled>...</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </select>
                <fieldset>
                    <legend>Otros datos</legend>
                    <h4>Aficiones</h4>
                    <input type="checkbox" name="aficiones[]" id="Cine" value="Cine"><label for="Cine">Cine</label>
                    <input type="checkbox" name="aficiones[]" id="Literatura" value="Literatura"><label for="Literatura">Literatura</label>
                    <input type="checkbox" name="aficiones[]" id="Comic" value="Comic"><label for="Comic">Tebeos</label>
                    <input type="checkbox" name="aficiones[]" id="Deporte" value="Deporte"><label for="Deporte">Deporte</label>
                    <input type="checkbox" name="aficiones[]" id="Musica" value="Musica"><label for="Musica">Musica</label>
                    <input type="checkbox" name="aficiones[]" id="Televisión" value="Televisión"><label for="Televisión">Televisión</label>
                    <h4>Indique su fruta preferida:</h4>
                    <input type="radio" name="fruta" id="cherry" value="cerezas"><label for="cherry">Cereza</label>
                    <input type="radio" name="fruta" id="strawb" value="fresa"><label for="strawb">Fresas</label>
                    <input type="radio" name="fruta" id="lemon" value="limon"><label for="lemon">Limón</label>
                    <input type="radio" name="fruta" id="apple" value="manzana"><label for="apple">Manazana</label>
                    <input type="radio" name="fruta" id="orange" value="naranja"><label for="orange">Naranja</label>
                    <input type="radio" name="fruta" id="pear" value="pera"><label for="pear">Pera</label>
                    <h4>Cambia estilo de la pagina</h4>
                    <input type="checkbox" name="styleB" id="styleB" value="bkground"><label for="styleB">Color del fondo de la página</label>
                    <br><input type="checkbox" name="styleC" id="styleC" value="color"><label for="styleC">Color de la letra de la página</label>
                    <br><textarea name="textA" id="textA" cols="60" rows="5" placeholder="Escribe algún comentario..."></textarea>
                </fieldset>
                <br><input type="submit" value="Enviar">
            </fieldset>
            <table>
                <?php
                if ($_SERVER['REQUEST_METHOD'] == 'POST' && required($name) && required($surname) && required($phone) && required($mail) && required($_POST['mail2']) && confirm($_POST['mail1'], $_POST['mail2']) && webConfirm($_POST['web'])) {
                    echo "<tr><td>Su nombre es $name</td></tr>";
                    echo "<tr><td>Sus apellidos son $surname</td></tr>";
                    echo "<tr><td>Su edad es $age años</td></tr>";
                    echo "<tr><td>Pesa " . $weigth . "kg</td></tr>";
                    echo "<tr><td>Su teléfono es $phone</td></tr>";
                    echo "<tr><td>Su web $web</td></tr>";
                    echo "<tr><td>$spam quiere resicibir correos nuestros</td></tr>";
                    echo "<tr><td>Sus aficiones son: </td></tr>";
                    echo "<tr>";
                    foreach ($hobby as $hobby2) {
                        echo "<td>$hobby2</td>";
                    }
                    echo "</tr>";
                    echo "<tr><td>Su fruta favorita es:</td></tr>";
                    echo "<tr><td><img src='svg/$fruit.svg' alt='$fruit'></td></tr>";
                    if ($_POST['styleB'] == 'bkground' && $_POST['styleC'] == 'color') {
                        echo "<body style = 'color: #D66D5E; background-color: ##6F63C9'></body>";
                    } else if ($_POST['styleB'] == 'bkground') {
                        echo "<body style = 'background-color: ##6F63C9'></body>";
                    } else if ($_POST['styleC'] == 'color') {
                        echo "<body style = 'color: #D66D5E'></body>";
                    }
                    echo "<tr><td></td>$comment</tr>";
                }
                ?>
            </table>

        </form>
    </div>
</body>

</html>