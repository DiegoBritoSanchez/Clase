<?php
$url= $_SERVER["REQUEST_URI"];
$url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
include($url . 'php/connect.inc');
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
include($url . 'php/header.inc');

?>
<div class="container-fluid text-center">
        <?php
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = "SELECT p.id pid, i.id, p.name, p.description, p.price, i.image from product p inner join images i on p.id = i.id_prod 
            where stock > 0 and p.id = $id;";
            $result = $conn->query($sql);
            // ? Obtener un solo resultado sin usar el while
            $sql2 = "SELECT name, price FROM product where id = $id";
            $result2 = $conn->query($sql2);
            $lamp = $result2->fetch(PDO::FETCH_ASSOC);?>
            <div class='w-full p-6 flex flex-row place-content-center'>
            <?php while ($register = $result->fetch(PDO::FETCH_ASSOC)) { ?>
                <img src="<?php echo $url ?>photo/<?php echo $register['image'] ?>" class='img-fluid m-2 pb-5' style='width:250px;'>
            <?php } ?>
            </div>
            <div class='w-full p-6 flex flex-row place-content-center'>
              <p class='pt-1 text-gray-900 mx-1'> <?php echo $lamp['name'] ?> </p>
              <p class='pt-1 text-gray-900 mx-1'><?php echo $lamp['price'] ?>€</p>
            </div>
        <?php } 
          else {
            // ? Todos los productos
            $sql = "SELECT p.id pid, i.id, p.name, p.description, p.price, i.image from product p inner join images i on p.id = i.id_prod where stock > 0 group by pid; ";
            $result = $conn->query($sql);?>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <?php while ($register = $result->fetch(PDO::FETCH_ASSOC)) { ?>
              <div class="col pt-4">
                <div class="card">
                  <img src="<?php echo $url ?>photo/<?php echo $register['image'] ?>" class="card-img-top img-fluid" style="width:250px; height:250px;"/>
                    <div class="card-body">
                      <h1 class="card-title h1 text-success"><b><?php echo $register['name'] ?></b></h1>
                        <h3 class="h2"><?php echo $register['description'] ?></h3>
                          <p></p>
                    </div>
                </div>
              </div>
            <?php }
          }
        ?>
    </div>
</div>
<?php include('footer.inc'); ?>
