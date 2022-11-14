<?php include '../../php/connect.inc' ?>
<?php include '../../php/limpiar.php' ?>
<?php
//Insertar Productos
try {
    $sql = $conn->prepare("INSERT INTO `productos`(id, nombre, precio, existencias, activado) VALUES (NULL, '" . limpiar($_POST['nombre']) . "', '" . limpiar($_POST['precio']) . "', 
    '" . limpiar($_POST['existencias']) . "','" . limpiar($_POST['activado']) . "')");
    $sql->execute();

    //Imagen
    $suma = count($_FILES['imagen']['name']);

    for ($i = 0; $i < $suma; $i++) {
        $temporal = limpiar($_FILES['imagen']['tmp_name'][$i]);
        $namePhoto = limpiar($_FILES['imagen']['name'][$i]);
        $destiny = "../../photo/$namePhoto";

        move_uploaded_file($temporal, $destiny);

        $conn->exec("INSERT INTO imagenesproductos VALUES (NULL, (SELECT id FROM productos order by id DESC LIMIT 1), $namePhoto)");
    }

    header("location: adminproductos.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}



?>
