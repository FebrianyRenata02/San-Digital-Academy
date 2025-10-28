import express from "express";
import mysql from "mysql2";
import path from "path";
import {
    fileURLToPath
} from "url";

const app = express();
const port = 3000;

// === Setup dirname ===
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// === Middleware ===
app.use(express.json());
app.use(express.static(__dirname)); // supaya index.html, main.js, style.css bisa diakses

// === Koneksi Database ===
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contact_db" // pastikan ini sesuai nama database di phpMyAdmin
});

db.connect((err) => {
    if (err) {
        console.error("❌ Gagal konek ke MySQL:", err);
    } else {
        console.log("✅ Terhubung ke database MySQL!");
    }
});

// === Route Utama ===
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// === Route Kirim Data dari Form ===
app.post("/api/contact", (req, res) => {
    const {
        name,
        email,
        phone,
        city,
        message
    } = req.body;
    const sql = "INSERT INTO contacts (name, email, phone, city, message) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [name, email, phone, city, message], (err, result) => {
        if (err) {
            console.error("❌ Gagal menyimpan data:", err);
            res.json({
                success: false
            });
        } else {
            console.log("✅ Data tersimpan:", result);
            res.json({
                success: true
            });
        }
    });
});

// === Jalankan Server ===
app.listen(port, () => {
    console.log(`🚀 Server berjalan di http://localhost:${port}`);
});