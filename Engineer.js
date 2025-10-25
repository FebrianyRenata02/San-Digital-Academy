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
      <h2>DevOps Engineer</h2>
     
      <div class="developer-img">
        <img src="/img/server-animate.svg" alt="UI UX Illustration">
      </div>
      <p>
        <strong>💡 DevOps Engineer</strong>
        <br><br>
         <p>
      Dev = Development (pengembangan aplikasi)
      <br><br>
      Ops = Operations (operasional sistem/server)
          <br><br>
      ➡️ Jadi DevOps adalah gabungan budaya kerja, alat, dan praktik untuk menyatukan kedua sisi itu.
      </p>
      <br>
      <p>
       <strong> 🧩 Tugas Utama DevOps Engineer </strong>
          <br><br>
            <strong> 🔧 Automasi Proses Deployment </strong>
          <br><br>
        Membuat pipeline otomatis (CI/CD) agar kode dari developer bisa langsung di-build, diuji, dan dideploy tanpa manual upload.
          <br><br>
        Contoh tool: GitHub Actions, Jenkins, GitLab CI, CircleCI.
      </p>
          <br><br> 
      <p>
       <strong> ☁️ Mengelola Infrastruktur Server </strong>
        <br><br> 
       Menguasai baik front-end maupun back-end.
         <br><br>
       Mampu membangun website secara keseluruhan dari nol.     
      </p>
          <br><br> 
      <p>
       <strong> 🐳 Containerization & Virtualization </strong>
        <br><br> 
        Membuat aplikasi bisa dijalankan di mana saja menggunakan container (Docker, Kubernetes).
      </p>
      <br><br> 
      <p>
       <strong> 🧠 Monitoring & Performance </strong>
        <br><br> 
        Memantau performa sistem dan aplikasi (pakai Prometheus, Grafana, Datadog, dsb).
      </p>
      <br>
      <p>
       <strong> 🛡️ Security & Reliability </strong>
        <br><br> 
        Menjaga keamanan pipeline, API, dan sistem produksi agar selalu aman & uptime tinggi.
      </p>
    </div>
  </section>
`;


// ===== PRE-FOOTER =====
const preFooter = document.createElement("section");
preFooter.className = "pre-footer";
preFooter.innerHTML = `
  <div class="pre-footer-container">
    <div class="footer-column">
      <img src="img/Agency Logo Transparant.png" alt="San Logo" class="footer-logo scroll-top" />
    </div>

    <div class="footer-column">
      <h3>Profil Kami</h3>
      <ul>
        <li>Tentang Perusahaan</li>
        <li>Komunitas</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Layanan Kami</h3>
      <ul>
        <li>UI/UX Design</li>
        <li>Desain Grafis</li>
        <li>Web Designer</li>
        <li>Web Development</li>
        <li>Digital Marketing</li>
        <li>Partnership</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Insight</h3>
      <ul>
        <li>Blog</li>
        <li>E-book</li>
        <li>Karir</li>
        <li>Portofolio Web Development</li>
        <li>Portofolio Digital Marketing</li>
      </ul>
    </div>
  </div>
`;
document.body.appendChild(preFooter);

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
