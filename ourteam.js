// ====== Buat Struktur Halaman Our Team ======
document.body.innerHTML = `
  <!-- HEADER -->
  <header class="header">
    <div class="topbar">
      kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami
    </div>
    <div class="header-content">
      <a href="index.html">
        <img src="/img/Agency Logo Transparant.png" alt="San Agency Logo" class="logo">
      </a>
      <h1>Our Team</h1>
    </div>
  </header>

  <!-- LEADERSHIP SECTION -->
  <section class="leadership">
    <h2>meet our leadership team</h2>
    <div class="leader-grid">
      <div class="leader-card border-blue">
        <img src="/img/renata.jpg" alt="Renata">
        <h3>Renata</h3>
        <p class="role founder">Founder</p>
      </div>
      <div class="leader-card border-orange">
        <img src="https://asset.kompas.com/crops/y2HoRqjm3RxFKqLHxOOeKAqhoxg=/0x0:1000x667/750x500/data/photo/2020/01/07/5e143342aed9a.jpg" alt="Lorem">
        <h3>Lorem</h3>
        <p class="role chief">Chief</p>
      </div>
      <div class="leader-card border-pink">
        <img src="https://services.presensi.co.id/media/admin/blog/a-728127.png" alt="Lorem">
        <h3>Lorem</h3>
        <p class="role admin">Admin</p>
      </div>
      <div class="leader-card border-green">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrqZSc5NZcrzDeA347mSvluoIJsBxGJrtqA&s" alt="Lorem">
        <h3>Lorem</h3>
        <p class="role moderator">Moderator</p>
      </div>
    </div>
  </section>

  <!-- TEAM SECTION -->
  <section class="team-section">
    <h2>Our Team</h2>
    <div class="team-grid">
      <div class="team-card border-yellow">
            <a href="https://www.figma.com/design/alJvfHARz1XBSuUo7KTzpF/San-Digital-Agency?t=IAApafBVeJqBrHzm-0">
      <img src="/img/Renata2.jpg" alt="Renata">
      </a>
        <h3>Renata</h3>
     
       <p class="position design">Desain</p>
     
      </div>
      <div class="team-card border-yellow">
        <img src="https://blog.digitalskola.com/wp-content/uploads/2025/01/front-end-developer-2-1024x683.jpg" alt="Lorem">
        <h3>Lorem</h3>
        <p class="position frontend">Front-End</p>
      </div>
      <div class="team-card border-yellow">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu_dr5bwQXSBqr3WGZ0eTNqDv51c-jnhh0w&s" alt="Lorem">
        <h3>Lorem</h3>
        <p class="position backend">Back-End</p>
      </div>
      <div class="team-card border-yellow">
        <img src="https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1749632298765-gaji-full-stack-web-developer.webp" alt="Lorem">
        <h3>Lorem</h3>
        <p class="position fullstack">Full-Stack</p>
      </div>
    </div>
  </section>

  <!-- FOOTER BACKGROUND -->
  <footer class="footer">
    <img src="/img/Header.png" alt="Footer Background" class="footer-bg">
  </footer>
`;
// ===== FOOTER =====
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2025 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);


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