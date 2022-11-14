<!DOCTYPE html>
<html lang="es" dir="ltr">

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="estilo.css">
  <title>Administración</title>
</head>

<body>
  <?php include '../../php/connect.inc' ?>
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
  $sql = "SELECT * from productos";
  $result = $conn->query($sql);
  while ($register = $result->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>
              <td>" . $register['id'] . "</td>
              <td>" . $register['nombre'] . "</td>
              <td>" . $register['precio'] . "</td>
              <td>" . $register['existencias'] . "</td>
              <td>" . $register['activado'] . "</td>
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
      <label for="peso">Peso</label>
      <input type="text" name="peso" autocomplete="off">
      <label for="existencias">Existencias</label>
      <input type="number" name="existencias" autocomplete="off">
      <label for="peso">Activado</label>
      <select name="activado" id="">
        <option value="1">Si</option>
        <option value="0">No</option>
      </select>
      <br>
      Imagen: <input type="file" name="imagen[]"><br>
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
        $sql = "SELECT id, nombre from productos;";
        $result = $conn->query($sql);
        while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
          echo "<option value=" . $borrar['id'] . ">" . $borrar['nombre'] . "</option>";
        }
        ?>
      </select>
      <input type="submit" name="" value="Eliminar" style="margin-left:20px;">
    </form>
  </fieldset>
  <fieldset>
    <legend>Actualizar Productos</legend>
    <form class="actualizar" action="actualizarproductos.php" method="post">
      Producto a actualizar: <select class="" name="selecta">
        <option value="" disabled selected>Elige un producto...</option>
        <?php
        $sql = "SELECT id, nombre from productos;";
        $resultado = $conn->query($sql);
        while ($borrar = $result->fetch(PDO::FETCH_ASSOC)) {
          echo "<option value=" . $borrar['id'] . ">" . $borrar['nombre'] . "</option>";
        }
        ?>
      </select><br>
      Título: <input type="text" name="ntit">
      Director: <input type="text" name="ndire">
      Género: <input type="text" name="ngen">
      Sinopsis: <textarea name="nprecio"></textarea>
      Fecha: <input type="date" name="fecha">
      <input type="submit" name="" value="Actualizar">
    </form>
  </fieldset>
  <div class="ah">
    <a href="../../index.php">Volver</a>
  </div>
</body>

</html>