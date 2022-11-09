<?php include 'php/header.inc' ?>
<?php include 'php/connect.inc' ?>
<div class="container-sm justify-content-md-center ">
    <?php
    echo "<table class='table table-dark table-striped-columns table-borderless table-responsive table-hover my-pad text-center' id='productos'>";
    $sql = "SELECT p.id pid, i.id, p.nombre, p.descripcion, p.precio, i.imagen from productos p inner join imagenesproductos i on p.id = i.idproducto where existencias > 0 group by p.id";
    $result = $conn->query($sql);
    echo "<tr><th>Imagen</th><th>Nombre</th><th>Descripición</th><th>Precio</th></tr>";
    $control = 0;
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr id='fila" . $control++ . "'><td><a href = 'product.php?id=" . $register['pid'] . "'><img src=photo/" . $register['imagen'] . " style='width:100px;'></td>
        <td class='py-5'><a href = 'product.php?id=" . $register['pid'] . "'>" . $register['nombre'] . "</td>
        <td class='py-5'><a href = 'product.php?id=" . $register['pid'] . "'>" . $register['descripcion'] . "</td>
        <td class='py-5'><a href = 'product.php?id=" . $register['pid'] . "'>" . $register['precio'] . "</td>
        </tr>";
    }
    echo "</table>";
    ?>
    <div>
        <p id="res"></p>
    </div>
</div>

<?php include 'php/footer.inc' ?>