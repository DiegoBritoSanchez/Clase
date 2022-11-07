<?php

/**
 * ! create user '#####'@'localhost' identified by '#####'
 * ! grant all on #####.* to '######'@'localhost' with grant OPTION;
 * ! grant CREATE USER on *.* to '######'@'localhost';
 */
$serverName = 'localhost';
$user = 'root';
$password = '';

// * Admin credentials
$serverName = "localhost";
$userAdmin = 'admin';
$passwordAdmin = 'admin';
$dbname = 'stoneStore';

try {
    //Conexión como root para crear al usuario admin y la base de datos
    $conn = new PDO("mysql:host=$serverName;", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "create database if not exists $dbname;";
    $sql .= "create user if not exists '$userAdmin'@'localhost' identified by '$passwordAdmin';";
    $sql .= "grant all on $dbname.* to '$userAdmin'@'localhost' with grant OPTION;";
    $sql .= "grant CREATE USER on *.* to '$userAdmin'@'localhost';";
    $conn->exec($sql);

    echo "DataBase and Admin created successfully.";
} catch (PDOException $e) {
    echo $sql . "</br>" . $e->getMessage();
}

$conn = $sql = null;

try {
    //Entramos como admin para crear las tablas e insertar datos
    $conn = new PDO("mysql:host=$serverName; dbname=$dbname", $userAdmin, $passwordAdmin);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = file_get_contents("./stoneStore.sql");
    $conn->exec($sql);
    echo "</br>Tables created and datas inserted successfully.";
    header("refresh:3;url=.");
} catch (PDOException $e) {
    echo $e->getMessage();
}