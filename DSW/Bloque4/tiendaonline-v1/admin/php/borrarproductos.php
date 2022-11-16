<?php include '../../php/connect.inc' ?>
<?php
try {
    $id = $_POST['select'];

    //Como la tabla no tiene ON DELETE CASCADE eliminamos primero las imagenes y luego el producto
    $sql = $conn->prepare("DELETE FROM imagenesproductos WHERE `idproducto` = " . $id . "");

    $sql2 = $conn->prepare("DELETE FROM productos WHERE id = " . $id . ";");

    $sql->execute();
    $sql2->execute();

    header("location: adminprod.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>

