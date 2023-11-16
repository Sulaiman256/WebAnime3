<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Establecer la conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webanime";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Obtener el cuerpo de la solicitud y decodificar el JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar si los datos están presentes y asignar a variables
if (isset($data['email'], $data['password'])) {
    $email = $data['email'];
    $password = $data['password'];

    // Consulta SQL para obtener el usuario por correo electrónico
    $sql = "SELECT * FROM usuarios WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verificar la contraseña
        if (password_verify($password, $row['password'])) {
            $response = array("success" => true, "message" => "Inicio de sesión exitoso");
        } else {
            $response = array("success" => false, "error" => "Contraseña incorrecta");
        }
    } else {
        $response = array("success" => false, "error" => "Usuario no encontrado");
    }
} else {
    $response = array("success" => false, "error" => "Datos de formulario incompletos");
}

// Enviar la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cerrar la conexión
$conn->close();
?>
