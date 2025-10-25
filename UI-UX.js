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
  
  <!-- SECTION PENJELASAN UI/UX -->
  <section class="uiux-info">
    <div class="uiux-text">
      <h2>Apa Itu UI UX dan Sejarah Nya</h2>
      <div class="uiux-img">
        <img src="/img/mobile-ui-ux-animate.svg" alt="UI UX Illustration">
      </div>
      <p>
        <strong>UI (User Interface)</strong> dan <strong>UX (User Experience)</strong> merupakan dua komponen penting dalam proses desain digital.
        <br><br>
        <strong>UI</strong> fokus pada tampilan visual seperti warna, bentuk tombol, dan layout halaman,
        sementara <strong>UX</strong> berfokus pada bagaimana pengalaman pengguna saat menggunakan produk digital.
        <br><br>
        Istilah “User Experience” pertama kali diperkenalkan oleh <strong>Don Norman</strong> pada tahun 1990-an di Apple,
        yang menekankan pentingnya perasaan pengguna saat berinteraksi dengan produk.
        <br><br>
        Seiring perkembangan teknologi, UI/UX kini menjadi bagian vital dalam menciptakan website, aplikasi, dan sistem yang ramah pengguna.
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
        <li>Kontak</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Layanan Kami</h3>
      <ul>
        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>Digital Marketing</li>
        <li>IT Consulting</li>
      </ul>
    </div>

    <div class="footer-column">
      <h3>Insight</h3>
      <ul>
        <li>Blog</li>
        <li>Karir</li>
        <li>Studi Kasus</li>
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
