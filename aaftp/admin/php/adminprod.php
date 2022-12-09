<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
  <?php $url = $_SERVER["REQUEST_URI"];
  $url == "/tienda/" ? $url = "./" : $url = "../../";
  session_start();
  ?>
  <!--$url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";-->
  <title>Online Stone Store</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="apple-touch-icon" href="assets/img/apple-icon.png">
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo $url ?>assets/img/favicon.ico">
  <!-- <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico"> -->

  <link rel="stylesheet" href="<?php echo $url ?>assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo $url ?>assets/css/templatemo.css">
  <link rel="stylesheet" href="<?php echo $url ?>assets/css/custom.css">

  <!-- Load fonts style after rendering the layout styles -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
  <link rel="stylesheet" href="<?php echo $url ?>assets/css/fontawesome.min.css">
</head>

<body>
  <?php
  $url = $_SERVER["REQUEST_URI"];
  $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

  // include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
  include($url . '../php/connect.inc');
  // include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
  ?>
  <h1>Header WIP...</h1>
  <h2 class="text-center">Productos</h2>
  <div class="container">
    <?php
    echo "<table class='table table-striped'>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Existencias</th>
          <th>Activado</th>
        </tr>";
    $sql = "SELECT * from product";
    $result = $conn->query($sql);
    while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
      echo "<tr>
              <td>" . $register['id'] . "</td>
              <td>" . $register['name'] . "</td>
              <td>" . $register['price'] . "</td>
              <td>" . $register['stock'] . "</td>
              <td>" . $register['active'] . "</td>
            </tr>";
    }
    echo "</table>";
    ?>
    </header>
    <fieldset>
      <legend>
        <h3>Insertar productos</h3>
      </legend>
      <form class="row g-3" action="insertarproductos.php" method="post" enctype="multipart/form-data">
        <div class="col-3">
          <label for="nombre" class="form-label">Nombre: </label>
          <input type="text" name="nombre" autocomplete="off" class="form-control">
        </div>
        <div class="col-3">
          <label for="precio" class="form-label">Precio: </label>
          <input type="number" name="precio" autocomplete="off" class="form-control">
        </div>
        <div class="col-3">
          <label for="existencias" class="form-label">Existencias: </label>
          <input type="number" name="existencias" autocomplete="off" class="form-control">
        </div>
        <div class="col-3">
          <label for="peso" class="form-label">Activado: </label>
          <select name="activado" id="" class="form-select">
            <option value="1">Si</option>
            <option value="0">No</option>
          </select>
        </div>
        <div class="col-3">
          <label for="" class="form-label">Imagen:</label><input type="file" name="imagen[]" multiple class="form-control">
        </div>
        <div class="col-3">
          <input type="submit" name="enviar" value="Enviar" class="btn btn-outline-secondary mt-5">
          <input type="reset" name="borrar" value="Borrar" class="btn btn-outline-secondary mt-5">
        </div>
      </form>
    </fieldset>
    <fieldset>
      <h3>Eliminar productos</h3>
      <form class="row g-3" action="borrarproductos.php" method="post">
        <div class="col-3">
          <label for="" class="form-label">Producto a eliminar: </label>
          <select name="select" class="form-select">
        </div>
        <option value="" disabled selected>Elige un producto...</option> -->
        <?php
        $sql = "SELECT id, name from product;";
        $result = $conn->query($sql);
        while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
          echo "<option value=" . $borrar['id'] . ">" . $borrar['name'] . "</option>";
        }
        ?>
        </select>
        <div class="col-3">
          <input type="submit" name="enviar" value="Borrar" class="btn btn-outline-secondary mt-5">
        </div>
      </form>
    </fieldset>
    <fieldset>
      <h3>Actualizar Productos</h3>
      <form class="row g-3" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <label for="" class="form-label">Producto a actualizar:</label>
        <select name="selecta" class="form-select">
          <option value="" disabled selected>Elige un producto...</option> -->
          <?php
          $sql = "SELECT id, name from product;";
          $result = $conn->query($sql);
          while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<option value=" . $borrar['id'] . ">" . $borrar['name'] . "</option>";
          }
          ?>
          <div class="col-3">
            <input type="submit" name="enviar" value="Elegir" class="btn btn-outline-secondary mt-5">
          </div>
        </select>
      </form>
      <div class="container">
        <form action="update.php" method="post" class="row g-3">
          <?php
          if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $sql = "SELECT name, description, price, stock, active, id FROM product WHERE id = " . $_POST['selecta'] . "";
            $result = $conn->query($sql);
            while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
              $name = $register['name'];
              $desc = $register['description'];
              $price = $register['price'];
              $stock = $register['stock'];
              $active = $register['active'];
              $id = $register['id'];
            }
          ?>
            <div class="col-3">
              <label for="" class="form-label">Nombre: </label>
              <input type="text" name="name" value="<?php echo $name ?>" class="form-control">
            </div>
            <div class="col-3">
              <label for="" class="form-label">Descripcion: </label>
              <input type="text" name="desc" value="<?php echo $desc ?>" class="form-control">
            </div>
            <div class="col-3">
              <label for="" class="form-label">Precio: </label>
              <input type="number" name="price" value="<?php echo $price ?>" class="form-control">
            </div>
            <div class="col-3">
              <label for="" class="form-label">Existencias: </label>
              <input type="number" name="stock" value="<?php echo $stock ?>" class="form-control">
            </div>
            <div class="col-3">
              <input type="number" name="id" value="<?php echo $id ?>" hidden>
              <label for="" class="form-label">Activado: </label>
              <select name="active" id="" class="form-select">
              <?php
              if ($active == 1) {
                echo '<option value="1" selected>Si</option>
          <option value="0">No</option>';
              } else {
                echo '<option value="1">Si</option>
          <option value="0" selected>No</option>';
              }

              echo '</select>
          <div class="col-3">
          <input type="submit" name="enviar" value="Actualizar" class="btn btn-outline-secondary mt-2">
        </div>
    </form>';
            };
              ?>

    </fieldset>
  </div>
  <div class="ah">
    <a href="../../">Volver</a>
  </div>
  </div>
</body>

</html>