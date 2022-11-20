<?php include '../../php/connect.inc' ?>
<?php
try {
    $id = $_POST['select'];

    //Como la tabla no tiene ON DELETE CASCADE eliminamos primero las imagenes y luego el producto
    $sql = $conn->prepare("DELETE FROM images WHERE `id_prod` = " . $id . "");

    $sql2 = $conn->prepare("DELETE FROM product WHERE id = " . $id . ";");

    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        
    }

    $sql->execute();
    $sql2->execute();

    header("location: adminprod.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}

?>

