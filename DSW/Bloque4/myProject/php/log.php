<?php
$url = $_SERVER["REQUEST_URI"];
$url == "/tienda/" ? $url = "./" : $url = "../";
// $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";

include($url . 'php/connect.inc');

include($url . 'php/limpiar.inc');

session_start();

$usu = limpiar($_POST['email']);
$psswd = limpiar($_POST['psswd']);
$psswdHashed = hash('sha256', $psswd);

$sql = 'SELECT * FROM users WHERE email = :e and psswd=:p';
$result = $conn->prepare($sql);
try {
    $result->execute([
        ':e' => $usu,
        ':p' => $psswdHashed
    ]);
} catch (PDOException $e) {
    die('Fallo en la conexión a la BD: ' . $e->getMessage());
}
if ($result->rowCount() == 0) {
    echo "Usuario y/o contraseñas incorrectos...";
    header('location: ../');
} else {
    $credentials = $result->fetch(PDO::FETCH_ASSOC);
    $_SESSION['user'] = $credentials['name'];
    $_SESSION['type'] = $credentials['type'];
    if ($_SESSION['type'] == 0) {
        header('location: ../admin/');    
    } else {
        header('location: ../');
    }
    
}
