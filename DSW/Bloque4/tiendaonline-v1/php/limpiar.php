<?php 
function limpiar($data)
{
    $data = trim($data);
    $data = htmlentities($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    return $data;
}
?>