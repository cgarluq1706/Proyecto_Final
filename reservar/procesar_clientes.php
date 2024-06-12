<?php
// Iniciar la sesión
session_start();

// Detalles de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "valencan";

// Establecer conexión con la base de datos
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar la conexión
if (!$conn) {
    die("La conexión a la base de datos ha fallado: " . mysqli_connect_error());
}

// Verificar si la solicitud es de tipo POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar que todos los campos estén configurados
    if (isset($_POST['nombre']) && isset($_POST['apellidos']) && isset($_POST['email']) && isset($_POST['telefono'])) {
        // Obtener los valores de los campos del formulario
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];

        // validar los datos de entrada
        $nombre = mysqli_real_escape_string($conn, $nombre);
        $apellidos = mysqli_real_escape_string($conn, $apellidos);
        $email = mysqli_real_escape_string($conn, $email);
        $telefono = mysqli_real_escape_string($conn, $telefono);

        // Insertar datos en la tabla clientes
        $sql_clientes = "INSERT INTO clientes (nombre, apellidos, email, telefono) VALUES ('$nombre', '$apellidos', '$email', '$telefono')";

         // Ejecutar la consulta SQL
        if (mysqli_query($conn, $sql_clientes)) {
            $id_cliente = mysqli_insert_id($conn);

            // Guardar id_cliente en la sesión
            $_SESSION['id_cliente'] = $id_cliente;

            // Redirigir a la página de reserva
            header("Location: reservar.html");
            exit();
        } else {
            // En caso de error, mostrar el mensaje de error
            echo "Error: " . $sql_clientes . "<br>" . mysqli_error($conn);
        }
    }
}

// Cerrar la conexión
mysqli_close($conn);
?>