<?php

/**
 * ! create user '#####'@'localhost' identified by '#####'
 * ! grant all on #####.* to '######'@'localhost' with grant OPTION;
 * ! grant CREATE USER on *.* to '######'@'localhost';
 */
$serverName = 'localhost';
$user = 'root';
$password = '';

try {
    //Conexión como root para crear al usuario admin y la base de datos
    $conn = new PDO("mysql:host=$serverName;", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "create database if not exists tiendavirtual;";
    $sql .= "create user if not exists 'diego'@'localhost' identified by '1234';";
    $sql .= "grant all on tiendavirtual.* to 'diego'@'localhost' with grant OPTION;";
    $sql .= "grant CREATE USER on *.* to 'diego'@'localhost';";
    $conn->exec($sql);

    echo "Base de datos y usuario admin creados";
} catch (PDOException $e) {
    echo $sql . "</br>" . $e->getMessage();
}

$conn = $sql = null;

$serverName = "localhost";
$user = 'diego';
$password = '1234';
$dbname = 'tiendavirtual';

try {
    //Entramos como admin para crear las tablas e insertar datos
    $conn = new PDO("mysql:host=$serverName; dbname=$dbname", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = file_get_contents("./tiendaonline.sql");
    $conn->exec($sql);
    echo "</br>Tablas creadas y datos insertados";
    header("refresh:3;url=.");
} catch (PDOException $e) {
    echo $e->getMessage();
}
