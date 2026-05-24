<?php
$host     = "127.0.0.1";
$usuario  = "root";
$password = "12345678";
$base     = "ra";
$puerto   = 3308;

$conexion = mysqli_connect($host, $usuario, $password, $base, $puerto);

if (!$conexion) {
    die(json_encode(["error" => "No se pudo conectar: " . mysqli_connect_error()]));
}
?>