<?php
$url = $_SERVER["REQUEST_URI"];
$url == "/tienda/" ? $url = "./" : $url = "../";
// $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
include($url . 'php/connect.inc');
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
include($url . 'php/header.inc');
include($url . 'php/limpiar.inc');

?>
<div class="container-fluid py-5 loging" style=" background-color: rgba(0, 255, 136, 0.486); border-radius: 40px; margin-top:5%; width: 50%;">
  <form action="log.php" method="POST">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" id="email" class="form-control" name="email" />
      <label class="form-label" for="email">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="psswd" class="form-control" name="psswd" />
      <label class="form-label" for="pswwd">Password</label>
    </div>
    <!-- Submit button -->
    <div class="text-center"><input type="submit" value="Sign in" class="btn btn-white btn-block border border-dark rounded-pill"></div>


  </form>
</div>