// ====== NAVBAR ======
const navbar = document.createElement("nav");
navbar.className = "navbar";
navbar.innerHTML = `
  <div class="navbar-container">
    <a href="index.html" class="logo-link">
      <img src="/img/Agency Logo Transparant.png" alt="San Digital Logo" class="navbar-logo">
    </a>
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
`;
document.body.prepend(navbar);

// ====== Buat Struktur Halaman Our Team ======
document.body.innerHTML += `
  <!-- HEADER -->
  <header class="header">
    <div class="topbar">
      kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami
    </div>
    <div class="header-content"></div>
  </header>
  
  <!-- SECTION PENJELASAN Developer -->
  <section class="developer-info">
    <div class="developer-text">
      <h2>Apa Itu Web Developer</h2>
      <div class="developer-img">
        <img src="/img/javascript-frameworks-animate.svg" alt="UI UX Illustration">
      </div>
      <p>
        <strong>💡 Jenis Web Developer</strong>
        <br><br>
        <strong>🔮 1. Front-End Developer</strong> 
        <br><br>
        Fokus pada tampilan visual dan interaksi pengguna.
        <br><br>
        Menggunakan bahasa seperti HTML, CSS, dan JavaScript.
        <br><br>
        Contoh tugas: membuat desain website agar responsif di berbagai perangkat.
      </p>
          <br><br>
      <p>
       <strong> 🧿 2. Back-End Developer </strong>
        <br><br>
        Mengurus bagian server, database, dan logika aplikasi.
         <br><br>
        Menggunakan bahasa seperti Node.js, PHP, Python, Java, atau Ruby.
         <br><br>
        Contoh tugas: menangani login pengguna, penyimpanan data, dan komunikasi antar sistem.
      </p>
          <br><br> 
      <p>
       <strong> 👨‍💻 3. Full-Stack Developer </strong>
        <br><br> 
       Menguasai baik front-end maupun back-end.
         <br><br>
       Mampu membangun website secara keseluruhan dari nol.
      
      </p>
          <br><br> 
      <p>
       <strong> ⚙️ Tugas Utama Web Developer </strong>
        <br><br> 
      Membuat dan menguji kode website.
         <br><br>
       Mengoptimalkan kecepatan dan keamanan situs.
      <br><br>    
        Memastikan website bisa digunakan di semua browser dan perangkat.
       <br><br>
       Berkolaborasi dengan desainer UI/UX untuk membuat tampilan yang menarik.
       <br><br>
       Memperbaiki bug dan memperbarui fitur website.
      </p>
      <br><br> 
      <p>
       <strong> 🧠 Skill yang Dibutuhkan </strong>
        <br><br> 
    HTML, CSS, JavaScript
         <br><br>
       Framework seperti Bootstrap, React, Vue, atau Angular
      <br><br>    
       Pengetahuan tentang server dan database (misalnya MySQL, MongoDB)
       <br><br>
      Pemahaman tentang version control (Git/GitHub)
       <br><br>
      Dasar SEO dan keamanan web
      </p>
    </div>
  </section>

  <!-- FOOTER BACKGROUND -->
  <footer class="footer">
    <img src="/img/Header.png" alt="Footer Background" class="footer-bg">
  </footer>
`;

// ===== FOOTER COPYRIGHT =====
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2025 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 120,
                behavior: "smooth",
            });
        }
    });
});

// ===== SCROLL KE ATAS SAAT LOGO PRE-FOOTER DIKLIK =====
const preFooterLogo = document.querySelector(".footer-logo"); // ganti sesuai class logomu

if (preFooterLogo) {
    preFooterLogo.addEventListener("click", (e) => {
        e.preventDefault(); // cegah link reload kalau pakai <a>
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        history.pushState(null, "", "#home"); // ubah URL hash ke #home
    });
}
