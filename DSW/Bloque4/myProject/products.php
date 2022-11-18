<?php include('php/connect.inc'); ?>
<?php include('php/header.inc'); ?>
<div class="container-fluid text-center">
    <?php
    $id = $_GET['id'];
    $sql = "SELECT p.id pid, i.id, p.name, p.description, p.price, i.image from product p inner join images i on p.id = i.id_prod 
        where stock > 0 and p.id = $id";
    $result = $conn->query($sql);
    // ? Obtener un solo resultado sin usar el while
    $sql2 = "SELECT name, price FROM product where id = $id";
    $result2 = $conn->query($sql2);
    $lamp = $result2->fetch(PDO::FETCH_ASSOC);
    echo "<div class='w-full p-6 flex flex-row place-content-center'>";
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<img src=photo/" . $register['image'] . " class='img-fluid m-2 pb-5' style='width:400px;'>";
    }
    echo "</div>";
    echo "<div class='w-full p-6 flex flex-row place-content-center'>
        <p class='pt-1 text-gray-900 mx-1'>" . $lamp['name'] . "</p>
        <p class='pt-1 text-gray-900 mx-1'>" . $lamp['price'] . "€</p>
        </div>";
    ?>
</div>
<?php include('php/footer.inc'); ?>