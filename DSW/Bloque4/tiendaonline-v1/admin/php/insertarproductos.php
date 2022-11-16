<?php include '../../php/connect.inc' ?>
<?php include '../../php/limpiar.php' ?>
<?php
//Insertar Productos
try {
    $sql = $conn->prepare("INSERT INTO `productos`(id, nombre, precio, existencias, activado) VALUES (NULL, '" . limpiar($_POST['nombre']) . "', '" . limpiar($_POST['precio']) . "', 
    '" . limpiar($_POST['existencias']) . "','" . limpiar($_POST['activado']) . "')");
    $sql->execute();

    //Imagen
    $name = limpiar($_POST['nombre']);

    $temporal = $_FILES['imagen']['tmp_name'];
    $namePhoto = $_FILES['imagen']['name'];
    $destiny = "../../photo/$namePhoto";

    if (move_uploaded_file($temporal, $destiny)) {
        echo "imagen movida";
    }

    $conn->exec("INSERT INTO imagenesproductos VALUES (NULL, (SELECT id FROM productos order by id DESC LIMIT 1), '$namePhoto', '$name', NULL)");

    //header("location: adminprod.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}



?>
