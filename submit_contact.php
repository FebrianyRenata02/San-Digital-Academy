<?php
header('Content-Type: application/json');

// ===== 1️⃣ Koneksi ke MySQL =====
$servername = "localhost";
$username = "root";     // username default XAMPP/MAMP
$password = "";         // password default kosong
$dbname = "agency";     // database yang sudah dibuat

$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Koneksi gagal: '.$conn->connect_error]);
    exit;
}

// ===== 2️⃣ Ambil data dari POST JSON =====
$data = json_decode(file_get_contents('php://input'), true);

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);
$city = $conn->real_escape_string($data['city']);
$message = $conn->real_escape_string($data['message']);

// ===== 3️⃣ Insert data ke tabel contacts =====
$sql = "INSERT INTO contacts (name, email, phone, city, message) 
        VALUES ('$name', '$email', '$phone', '$city', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>
