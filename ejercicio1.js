coneccion php:
<?php
// Datos de conexión
$host = 'localhost'; // El host de la base de datos (usualmente 'localhost' o una IP)
$usuario = 'mi_usuario'; // Tu nombre de usuario de MySQL
$contraseña = 'mi_contraseña'; // Tu contraseña de MySQL
$basededatos = 'mi_base_de_datos'; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($host, $usuario, $contraseña, $basededatos);
            pg_connect
// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

echo "Conexión exitosa a la base de datos.\n";

// Cerrar la conexión
$conn->close();
?>
