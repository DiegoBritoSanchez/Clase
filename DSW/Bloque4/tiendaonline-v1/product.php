<?php include 'php/header.inc' ?>
<?php include 'php/connect.inc' ?>
<a href=".">Volver</a>
<?php
$id = $_GET['id'];
$sql = "SELECT p.id pid, i.id, p.nombre, p.descripcion, p.precio, i.imagen from productos p inner join imagenesproductos i on p.id = i.idproducto 
        where existencias > 0 and p.id = $id";
$result = $conn->query($sql);
// ? Obtener un solo resultado sin usar el while
$sql2 = "SELECT nombre, precio FROM productos where id = $id";
$result2 = $conn->query($sql2);
$lamp = $result2->fetch(PDO::FETCH_ASSOC);
echo "<div class='w-full p-6 flex flex-row place-content-center'>";
while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
    echo "<img src=photo/" . $register['imagen'] . " class='ml-5 w-64 rounded-3xl '>";
}
echo "</div>";
echo "<div class='w-full p-6 flex flex-row place-content-center'>
        <p class='pt-1 text-gray-900 mx-1'>" . $lamp['nombre'] . "</p>
        <p class='pt-1 text-gray-900 mx-1'>" . $lamp['precio'] . "€</p>
        </div>";
?>
<?php include 'php/footer.inc' ?>