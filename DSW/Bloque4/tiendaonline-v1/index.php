<?php include 'php/header.inc' ?>
<?php include 'php/connect.inc' ?>
<div class="container-sm justify-content-md-center ">
    <?php
    echo "<table class='table table-dark table-striped-columns table-borderless table-responsive table-hover my-pad text-center'>";
    $sql = "SELECT * from productos inner join imagenesproductos on productos.id = imagenesproductos.idproducto where existencias > 0 group by productos.id";
    $result = $conn->query($sql);
    echo "<tr><th>Imagen</th><th>Nombre</th><th>Descripición</th><th>Precio</th></tr>";
    $control = 0;
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr id='fila" . $control++ . "'><td><img src=photo/" . $register['imagen'] . " style='width:100px;'></td><td class='py-5'>" . $register['nombre'] . "</td><td class='py-5'>" . $register['descripcion'] . "</td><td class='py-5'>" . $register['precio'] . "</td></tr>";
    }
    echo "</table>";
    ?>
</div>

<?php include 'php/footer.inc' ?>