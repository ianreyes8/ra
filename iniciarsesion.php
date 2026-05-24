<?php
session_start();
include("conexion.php");

if (isset($_POST['login_button'])) {
    $username = mysqli_real_escape_string($conexion, $_POST['username']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']);

    $sql = "SELECT correo, clave FROM usuario WHERE correo = '$username'";
    $query = mysqli_query($conexion, $sql);

    if ($query) {
        $row = mysqli_fetch_assoc($query);
        if ($row && $row['clave'] === $password) {
            $_SESSION['correo'] = $username;
            header("Location: indexuser.html");
            exit();
        } else {
            echo '<script>alert("Usuario y/o contraseña incorrectos. Vuelve a intentarlo.");';
            echo 'window.location.href = "index3.html";</script>';
            exit();
        }
    } else {
        die("Error en la consulta: " . mysqli_error($conexion));
    }

    mysqli_close($conexion);
}
?>


