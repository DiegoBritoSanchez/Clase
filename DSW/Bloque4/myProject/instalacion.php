<?php

/**
 * ! create user '#####'@'localhost' identified by '#####'
 * ! grant all on #####.* to '######'@'localhost' with grant OPTION;
 * ! grant CREATE USER on *.* to '######'@'localhost';
 */
// * Admin credentials
$serverName = "localhost";
$userAdmin = 'u674705277_diegobrito1';
$passwordAdmin = 'Escritorio13';
$dbname = 'u674705277_diegobrito1';

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
