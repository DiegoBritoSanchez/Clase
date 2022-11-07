<?php
$serverName = "localhost";
$user = 'diego';
$password = '1234';
$dbname = 'tiendavirtual';

try {
    //Entramos como admin para crear las tablas e insertar datos
    $conn = new PDO("mysql:host=$serverName; dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "Usuario administrador creador, redirigiendo al panel de control...";
    // header("refresh:3;url=../");
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>