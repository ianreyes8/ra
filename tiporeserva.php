<?php
include("conexion.php");

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['tiporeserva'])) {
    $nombre      = $_POST['nombreuser'];
    $correo      = $_POST['email'];
    $telefono    = $_POST['telefono'];
    $fecha       = $_POST['date'];
    $hora        = $_POST['time'];
    $tiporeserva = $_POST['tipo_evento'];

    $sqlgrabar = "INSERT INTO tiporeserva(nombre, correo, telefono, fecha, hora, tiporeserva) 
                  VALUES ('$nombre','$correo','$telefono','$fecha','$hora','$tiporeserva')";

    if (mysqli_query($conexion, $sqlgrabar)) {
        echo '<script>alert("Reserva Exitosa"); window.location.href="indexuser.html";</script>';
    } else {
        echo "Error: " . mysqli_error($conexion);
    }
}
?>