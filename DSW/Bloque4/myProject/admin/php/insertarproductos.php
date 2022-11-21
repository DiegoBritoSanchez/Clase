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
    $sql = $conn->prepare("INSERT INTO `product`(id, name, price, stock, active) VALUES (NULL, '" . limpiar($_POST['nombre']) . "', '" . limpiar($_POST['precio']) . "', 
    '" . limpiar($_POST['existencias']) . "','" . limpiar($_POST['activado']) . "')");
    $sql->execute();

    //Imagen
    $count = count($_FILES['imagen']['tmp_name']);
    for ($i = 0; $i < $count; $i++) {
        if ($_FILES['imagen']['type'][$i] == 'image/png' || $_FILES['imagen']['type'][$i] == 'image/jpeg' || $_FILES['imagen']['type'][$i] == 'image/gif' || $_FILES['imagen']['type'][$i] == 'image/jpg') {
            $temporal = $_FILES['imagen']['tmp_name'][$i];
            $namePhoto = $_FILES['imagen']['name'][$i];
            $destiny = "../../photo/$namePhoto";
            move_uploaded_file($temporal, $destiny);

            $name = limpiar($_POST['nombre']);

            $conn->exec("INSERT INTO images VALUES (NULL, (SELECT id FROM product order by id DESC LIMIT 1), '$namePhoto', NULL)");
        }
    }

    header("location: adminprod.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}



?>
