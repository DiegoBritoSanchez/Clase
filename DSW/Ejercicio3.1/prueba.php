<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<a target="_self" href="index.html" id="volver">Volver</a>
    <?php 
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    echo "<p>Tus numeros son $num1 y $num2. Su suma es ".$num1+$num2."
    . Su resta es ".$num1-$num2.". Su multiplicación es ".$num1*$num2."
    . Y su división es ".$num1/$num2.". Y el módulo es ".$num1%$num2.".</p>"
    ?>
</body>
</html>