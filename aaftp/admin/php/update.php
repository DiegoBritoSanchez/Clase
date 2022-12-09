<?php
$url = $_SERVER["REQUEST_URI"];
$url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
include($url . '../php/connect.inc');
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
include($url . 'php/headerAdmin.inc');
include($url . '../php/limpiar.inc');
?>
<?php
//Insertar Productos
try {
    $id = $_POST['id'];
    $sql = $conn->prepare("UPDATE `product` SET `name` = '" . limpiar($_POST['name']) . "', `description` = '" . limpiar($_POST['desc']) . "',
    `stock` = '" . limpiar($_POST['stock']) . "', `price` = '" . limpiar($_POST['price']) . "', `active` = '" . limpiar($_POST['active']) . "' WHERE `product`.`id` = $id; ");
    $sql->execute();

    header("location: adminprod.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}



?>
