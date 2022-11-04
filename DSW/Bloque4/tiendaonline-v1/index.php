<?php include 'php/header.inc' ?>
<?php include 'php/connect.inc' ?>
<div class="container-sm justify-content-md-center ">
    <?php
    echo "<table class='table table-dark table-striped-columns table-borderless table-responsive table-hover my-pad'>";
    $sql = "SELECT * from productos where existencias > 0";
    $result = $conn->query($sql);
    echo "<tr><th>Nombre</th><th>Descripición</th><th>Precio</th></tr>";
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr><td>" . $register['nombre'] . "</td><td>" . $register['descripcion'] . "</td><td>" . $register['precio'] . "</td></tr>";
    }
    echo "</table>";
    ?>
</div>

<?php include 'php/footer.inc' ?>