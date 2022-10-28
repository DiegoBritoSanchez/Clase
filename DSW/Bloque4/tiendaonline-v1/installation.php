<?php
    $serverName = 'localhost';
    $user = 'root';
    $password = '';

    try {
        $conn = new PDO("mysql:host=$serverName;", $user, $password);
        $sql = "Create database if not exists tiendaVirtual;";
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->exec($sql);
        $conn = null;
    } catch (PDOException $e) {
        echo $sql . "</br>" . $e->getMessage();
    }

?>
