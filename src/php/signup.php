<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json");

// Verifica que la solicitud provenga del dominio permitido
$allowedOrigin = "http://localhost:3000";
if ($_SERVER['HTTP_ORIGIN'] !== $allowedOrigin) {
    die(json_encode(['error' => 'Acceso no permitido desde este origen.']));
}

// Protección contra CSRF
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_SERVER['HTTP_X_CSRF_TOKEN'])) {
    die(json_encode(['error' => 'Acceso no autorizado.']));
}

// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = ""; // Ingresa tu contraseña si la tienes configurada
$database = "webanime"; // Cambia esto al nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(['error' => 'Conexión fallida: ' . $conn->connect_error]));
}

// Recibir los datos del formulario
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Consulta SQL para insertar datos en la tabla
$sql = "INSERT INTO users (name, lastname, password, email) VALUES ('$name', '$lastname', '$password', '$email')";

$result = ['success' => false];

if ($conn->query($sql) === TRUE) {
    $result['success'] = true;
    $result['message'] = 'Registro exitoso';
} else {
    $result['error'] = 'Error al registrar: ' . $conn->error;
}

// Cerrar la conexión
$conn->close();

// Devuelve la respuesta en formato JSON
echo json_encode($result);

?>
