<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css">
  <title>Administración</title>
</head>

<body>
  <?php
  $url = $_SERVER["REQUEST_URI"];
  $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

  // include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
  include($url . '../php/connect.inc');
  // include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
  include($url . 'php/headerAdmin.inc');
  echo "<h1>Header WIP...</h1>";
  ?>
  <h2>Productos</h2>
  <?php
  echo "<table style='border:1px solid #333'
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
    <form class="" action="insertarproductos.php" method="post" enctype="multipart/form-data">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" autocomplete="off">
      <label for="peecio">Precio</label>
      <input type="number" name="precio" autocomplete="off">
      <label for="existencias">Existencias</label>
      <input type="number" name="existencias" autocomplete="off">
      <label for="peso">Activado</label>
      <select name="activado" id="">
        <option value="1">Si</option>
        <option value="0">No</option>
      </select>
      <br>
      Imagen: <input type="file" name="imagen[]" multiple><br>
      <input type="submit" name="enviar" value="Enviar">
      <input type="reset" name="borrar" value="Borrar">
    </form>
  </fieldset>
  <fieldset>
    <legend>Eliminar productos</legend>
    <form class="eliminar" action="borrarproductos.php" method="post">
      Producto a eliminar: <select class="" name="select">
        <option value="" disabled selected>Elige un producto...</option> -->
        <?php
        $sql = "SELECT id, name from product;";
        $result = $conn->query($sql);
        while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
          echo "<option value=" . $borrar['id'] . ">" . $borrar['name'] . "</option>";
        }
        ?>
      </select>
      <input type="submit" name="" value="Eliminar" style="margin-left:20px;">
    </form>
  </fieldset>
  <fieldset>
    <legend>Actualizar Productos</legend>
    <form class="actualizar" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
      Producto a actualizar: <select class="" name="selecta">
        <option value="" disabled selected>Elige un producto...</option> -->
        <?php
        $sql = "SELECT id, name from product;";
        $result = $conn->query($sql);
        while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
          echo "<option value=" . $borrar['id'] . ">" . $borrar['name'] . "</option>";
        }
        ?>
        <input type="submit" name="update" value="Seleccionar">
      </select><br><br>
    </form>
    <form action="update.php" method="post">
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

        Nombre: <input type="text" name="name" value="<?php echo $name ?>">
        Description: <input type="text" name="desc" value="<?php echo $desc ?>">
        Precio: <input type="number" name="price" value="<?php echo $price ?>">
        Existencias: <input type="number" name="stock" value="<?php echo $stock ?>">
        <input type="number" name="id" value="<?php echo $id ?>" hidden>
        Activado:<select name="active" id="">
        <?php
        if ($active == 1) {
          echo '<option value="1" selected>Si</option>
          <option value="0">No</option>';
        } else {
          echo '<option value="1">Si</option>
          <option value="0" selected>No</option>';
        }
        
        echo '</select>
        <input type="submit" name="" value="Actualizar">
    </form>';


  };
  ?>

  </fieldset>
  <div class="ah">
    <a href="../../">Volver</a>
  </div>
</body>

</html>