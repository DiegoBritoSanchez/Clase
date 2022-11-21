<?php
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
include('php/connect.inc');
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
include('php/header.inc');

?>
<!-- Modal -->
<!-- <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="w-100 pt-1 mb-5 text-right">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
                    <button type="submit" class="input-group-text bg-success text-light">
                        <i class="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div> -->
<!-- /Modal -->
<!-- Start Banner Hero -->
<div id="template-mo-zay-hero-carousel" class="carousel slide " data-bs-ride="carousel" style="height: 600px;">
    <ol class="carousel-indicators">
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>

    <div class="carousel-inner" style="height: 600px; ">
        <?php
        $sql = "SELECT p.id pid, i.id iid, p.name, p.description, p.price, i.image from product p inner join images i on p.id = i.id_prod where stock > 0 group by p.id";
        $result = $conn->query($sql);
        $control = 0;
        while ($register = $result->fetch(PDO::FETCH_ASSOC)) {

            if ($control == 0) {
                echo '<div class="carousel-item active " data-bs-interval="35000">';
                echo '<a href="php/products.php?id=' . $register['pid'] . '" style="text-decoration: none; color: black;">';
                $control++;
            } else if ($control == 1) {
                echo '<div class="carousel-item " data-bs-interval="35000" style="top:10%;">';
                echo '<a href="php/products.php?id=' . $register['pid'] . '" style="text-decoration: none; color: black;">';
                $control++;
            } else {
                echo '<div class="carousel-item " data-bs-interval="35000" style="top:20%;">';
                echo '<a href="php/products.php?id=' . $register['pid'] . '" style="text-decoration: none; color: black;">';
            }
            echo '<div class="container">
                    <div class="row ">
                        <div class="mx-auto py-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" src="./photo/' . $register['image'] . '" alt="">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1 text-success"><b>' . $register['name'] . '</b></h1>
                                <h3 class="h2">' . $register['description'] . '</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </a>';
        }
        ?>
        <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </a>
        <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </a>
    </div>
    <?php
    // include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\footer.inc');
    include('php/footer.inc');
    ?>

    </html>