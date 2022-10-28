<?php
$serverName = 'localhost';
$user = 'root';
$password = '';
$dataBase = 'tiendavirtual';
try {
    $conn = new PDO("mysql:host=$serverName; dbname=$dataBase", $user, $password);
    $sql = "create table if NOT EXISTS usuarios ("
        . "id int AUTO_INCREMENT,"
        . "nombre varchar(15),"
        . "descripcion varchar(100),"
        . "email varchar(100),"
        . "PRIMARY KEY (id)"
        . ");";
    $conn->exec($sql);
    $conn = null;
    echo "Tabla creada";
} catch (PDOException $e) {
    echo $sql . "</br>" . $e->getMessage();
}