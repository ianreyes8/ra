<?php
include("conexion.php");

if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['Registrarse'])) {
    
    $nombre   = $_POST['nombreuser'];
    $clave    = $_POST['pass'];
    $correo   = $_POST['email'];
    $telefono = $_POST['telefono'];

    $sqlgrabar = "INSERT INTO usuario(nombre, clave, correo, telefono) VALUES ('$nombre','$clave','$correo','$telefono')";

    if(mysqli_query($conexion, $sqlgrabar)) {
        header("Location: principal.php");
        exit();
    } else {
        echo "Error al registrar: " . mysqli_error($conexion);
    }
}
?>