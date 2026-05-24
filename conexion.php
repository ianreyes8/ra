<?php
$host     = getenv('MYSQLHOST');
$usuario  = getenv('MYSQLUSER');
$password = getenv('MYSQLPASSWORD');
$base     = getenv('MYSQLDATABASE');
$puerto   = getenv('MYSQLPORT');

$conexion = mysqli_connect($host, $usuario, $password, $base, (int)$puerto);

if (!$conexion) {
    die(json_encode(["error" => "No se pudo conectar: " . mysqli_connect_error()]));
}
?>