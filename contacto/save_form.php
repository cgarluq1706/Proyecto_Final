<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mascota = $_POST['mascota'];
    $numeroMascotas = $_POST['mascotas'];
    $mensaje = $_POST['mensaje'];

    $data = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nTeléfono: $telefono\nMascota: $mascota\nNúmero de mascotas: $numeroMascotas\nMensaje: $mensaje\n\n";

    file_put_contents('form_data.txt', $data, FILE_APPEND);
    echo "Datos guardados exitosamente.";
}
?>
