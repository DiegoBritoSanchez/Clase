<?php

/**
 * ! create user 'diego'@'localhost' identified by '1234';
 * ! grant all on tiendavirtual.* to 'diego'@'localhost' with grant OPTION;
 * ! grant CREATE USER on *.* to 'diego'@'localhost';
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
    $sql = "CREATE TABLE IF NOT EXISTS `clientes` (
        `id` int(100) NOT NULL AUTO_INCREMENT,
        `nombre` varchar(255) DEFAULT NULL,
        `apellidos` varchar(255) DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL,
        `usuario` varchar(255) DEFAULT NULL,
        `contrasena` varchar(255) DEFAULT NULL,
        `telefono` int(12) DEFAULT NULL,
        `movil` int(12) DEFAULT NULL,
        `fax` varchar(12) DEFAULT NULL,
        `direccioncalle` varchar(255) DEFAULT NULL,
        `codigopostal` varchar(255) DEFAULT NULL,
        `poblacion` varchar(255) DEFAULT NULL,
        `pais` varchar(255) DEFAULT NULL,
        `dninif` varchar(255) DEFAULT NULL,
        PRIMARY KEY (`id`)
    );
        INSERT INTO `clientes` (`id`, `nombre`, `apellidos`, `email`, `usuario`, `contrasena`, `telefono`, `movil`, `fax`, `direccioncalle`, `codigopostal`, `poblacion`, `pais`, `dninif`) VALUES
            (1, 'Jorge', 'Hernández', 'jorge.evagd@gmail.com', 'jorge', '1234', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
            (2, 'Juan', 'Lopez', 'info@gmail.com', 'juan', '1234', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        CREATE TABLE IF NOT EXISTS `imagenesproductos` (
            `id` int(100) NOT NULL AUTO_INCREMENT,
            `idproducto` int(100) DEFAULT NULL,
            `imagen` varchar(255) DEFAULT NULL,
            `titulo` varchar(255) DEFAULT NULL,
            `descripcion` varchar(255) DEFAULT NULL,
            PRIMARY KEY (`id`)
        );
        INSERT INTO `imagenesproductos` (`id`, `idproducto`, `imagen`, `titulo`, `descripcion`) VALUES
            (1, 1, 'lampara1a.png', 'Título 1', 'Descripción 1'),
            (2, 1, 'lampara1b.png', 'Título de la segunda imagen', 'Descripción'),
            (3, 2, 'lampara2a.png', 'Título de la imagen', 'Descripción'),
            (4, 2, 'lampara2b.png', 'Título', 'Descripción'),
            (5, 3, 'lampara3a.png', 'Título', 'Descripción'),
            (6, 3, 'lampara3b.png', 'Título', 'Descripción');
        CREATE TABLE IF NOT EXISTS `lineaspedido` (
            `id` int(100) NOT NULL AUTO_INCREMENT,
            `idpedido` int(100) DEFAULT NULL,
            `idproducto` int(100) DEFAULT NULL,
            `unidades` int(100) DEFAULT NULL,
            PRIMARY KEY (`id`)
        );
        INSERT INTO `lineaspedido` (`id`, `idpedido`, `idproducto`, `unidades`) VALUES
            (3, 5, 1, 1),
            (4, 5, 2, 1),
            (5, 5, 3, 1),
            (6, 6, 1, 1),
            (7, 6, 2, 1),
            (8, 6, 3, 1),
            (9, 7, 1, 1),
            (10, 7, 2, 1),
            (11, 7, 3, 1),
            (12, 8, 1, 1),
            (13, 8, 2, 1),
            (14, 8, 3, 1),
            (15, 9, 1, 1),
            (16, 9, 2, 1),
            (17, 9, 3, 1),
            (18, 10, 1, 1),
            (19, 10, 2, 1),
            (20, 10, 3, 1),
            (21, 11, 1, 1),
            (22, 12, 1, 1),
            (23, 13, 1, 1),
            (24, 14, 1, 1),
            (25, 15, 1, 1),
            (26, 16, 1, 1),
            (27, 17, 1, 1),
            (28, 18, 1, 1),
            (29, 18, 2, 1),
            (30, 18, 3, 1),
            (31, 19, 1, 1),
            (32, 19, 2, 1),
            (33, 19, 3, 1),
            (34, 19, 2, 1);
        CREATE TABLE IF NOT EXISTS `pedidos` (
            `id` int(100) NOT NULL AUTO_INCREMENT,
            `idcliente` int(100) DEFAULT NULL,
            `fecha` varchar(100) DEFAULT NULL,
            `estado` varchar(100) DEFAULT NULL,
            PRIMARY KEY (`id`)
          );
          
      ";
} catch (PDOException $e) {
    echo $sql . "</br>" . $e->getMessage();
}
