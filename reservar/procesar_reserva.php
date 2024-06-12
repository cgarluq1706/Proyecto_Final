<?php

// Configuración de la base de datos
$servername = "localhost"; // Dirección del servidor de la base de datos
$username = "root"; // Nombre de usuario para acceder a la base de datos
$password = ""; // Contraseña para acceder a la base de datos
$database = "valencan"; // Nombre de la base de datos

// Establecer conexión con la base de datos
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar la conexión
if (!$conn) {
    die("La conexión a la base de datos ha fallado: " . mysqli_connect_error());
}

// Comprobar si se está realizando una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Iniciar sesión
    session_start();

     // Verificar que se han configurado todas las variables necesarias
    if (isset($_SESSION['id_cliente']) && isset($_POST['tipoMascota']) && isset($_POST['cantidad']) && isset($_POST['fecha']) && isset($_POST['hora']) && isset($_POST['info'])) {
        // Obtener el ID del cliente de la sesión
        $id_cliente = $_SESSION['id_cliente'];
        // Convertir el array de tipo de mascota en una cadena
        $tipo_mascota = implode(',', $_POST['tipoMascota']);
        // Obtener los valores del formulario
        $cantidad = $_POST['cantidad'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        $info = $_POST['info'];

         //  insertar datos en la tabla de reservas
        $sql_reservas = "INSERT INTO reservas (id_cliente, tipo_mascota, cantidad, fecha, hora, info) VALUES ('$id_cliente', '$tipo_mascota', '$cantidad', '$fecha', '$hora', '$info')";

          // Ejecutar la consulta SQL de reservas
        if (mysqli_query($conn, $sql_reservas)) {
              // Redirigir a la página de confirmación 
            header("Location: confirmacion.html");
            exit();
        } else {
            // Mostrar un mensaje de error si falla
            echo "Error: " . $sql_reservas . "<br>" . mysqli_error($conn);
        }
    }
}

// Cerrar la conexión con la base de datos
mysqli_close($conn);
?>