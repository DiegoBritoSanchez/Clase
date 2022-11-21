<?php
$url= $_SERVER["REQUEST_URI"];
$url == "/tienda/" ? $url = "./" : $url = "../";
// $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\connect.inc');
include($url . 'php/connect.inc');
// include($_SERVER["DOCUMENT_ROOT"] . '\Clase\DSW\Bloque4\myProject\php\header.inc');
include($url . 'php/header.inc');

?>
<div class="container-fluid py-5 loging" style=" background-color: rgba(0, 255, 136, 0.486); border-radius: 40px; margin-top:5%; width: 50%;">
<form >
  <!-- Email input -->
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <!-- <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" style="margin-top: 10px;" checked />
        <label class="form-check-label btn" for="form2Example31"> Remember me </label>
      </div>
    </div> -->

    <!-- <div class="col ">
      Simple link
      <a href="#!" class="btn btn-white">Forgot password?</a>
    </div> -->
  <!-- </div> -->

  <!-- Submit button -->
  <div class="text-center"><button type="button" class="btn btn-white btn-block border border-dark rounded-pill">Sign in</button></div>
  

</form>
</div>