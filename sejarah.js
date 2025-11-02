// =======================
//  NAVBAR STRUCTURE
// =======================
const topBar = document.createElement("div");
topBar.className = "top-bar";
topBar.textContent =
    "kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami";
document.body.appendChild(topBar);

const navbar = document.createElement("nav");
navbar.className = "navbar";

// ====== Logo ======
const logo = document.createElement("img");
logo.src = "img/Agency Logo Transparant.png";
logo.alt = "San Digital Logo";
logo.className = "logo";
navbar.appendChild(logo);

// 🔹 Saat logo navbar diklik, arahkan ke index.html
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
});

// ====== Nav List ======
const navList = document.createElement("ul");
navList.className = "nav-list";

const navItems = [{
        name: "Home",
        id: "home"
    },
    {
        name: "About",
        id: "about"
    },
    {
        name: "Services",
        id: "services"
    },
    {
        name: "Portfolio",
        id: "portfolio"
    },
    {
        name: "Blog",
        id: "blog"
    },
    {
        name: "Contact",
        id: "contact"
    },
];

navItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${item.id}`;
    a.textContent = item.name;
    li.appendChild(a);
    navList.appendChild(li);
});
navbar.appendChild(navList);

// ====== Discord Button ======
const discordWrapper = document.createElement("div");
discordWrapper.className = "discord-btn-wrapper";

const discordBtn = document.createElement("a");
discordBtn.href = "https://discord.gg/VHscdktb24";
discordBtn.target = "_blank";
discordBtn.className = "discord-btn";
discordBtn.innerHTML = `<i class="fa-brands fa-discord"></i> Join Discord`;
discordWrapper.appendChild(discordBtn);
navbar.appendChild(discordWrapper);

// ====== Hamburger (Mobile) ======
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = `<span></span><span></span><span></span>`;
navbar.appendChild(hamburger);

document.body.appendChild(navbar);

// =======================
//  NAVBAR FUNCTIONALITY
// =======================
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

// =======================
//  SECTION: SEJARAH
// =======================
const section = document.createElement("section");
section.className = "timeline-section";

// Judul
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
titleContainer.innerHTML = `
  <h3 class="sub-title">Sejarah Pendirian</h3>
  <h1>San Digital Agency</h1>
  <img src="/img/Sunset Brew.png" alt="Sunset Brew" class="header-img">
`;
section.appendChild(titleContainer);

// Timeline container
const timeline = document.createElement("div");
timeline.className = "timeline";

// 1️⃣ Item 1
const item1 = document.createElement("div");
item1.className = "timeline-item left";
item1.innerHTML = `
  <p>Dengan ada nya perkembangan zaman di dunia Teknologi,<br> maka di bangunlah suatu usaha Bisnis<br>Bernama San Digital Agency.</p>
`;

// 2️⃣ Item 2
const item2 = document.createElement("div");
item2.className = "timeline-item right";
item2.innerHTML = `
  <img src="/img/rena hitam putih.png" alt="CEO">
  <p><strong>San Digital Agency</strong> di Dirikan oleh seorang CEO asal Bandung Bernama Febriany Renata<br><br>
  San di ambil dari kata <strong>Sunset</strong> dalam bahasa inggris yang artinya <strong>Matahari Terbenam.</strong> Yang rencana ke depan akan di buat Bisnis atau Usaha Coffee Shop</p>
`;

// 3️⃣ Item 3
const item3 = document.createElement("div");
item3.className = "timeline-item left";
item3.innerHTML = `
  <h4>Agustus 2025</h4>
   <img src="/img/lingkaran 1.png">
  <p>Pada tanggal 23 Agustus di bangunya Komunitas dan server Discord <strong>Sunset Brew</strong></p>
`;

// 4️⃣ Item 4
const item4 = document.createElement("div");
item4.className = "timeline-item right";
item4.innerHTML = `
  <h4>Sep - Oct 2025</h4>
  <p>Di bulan September sampai Oktober membangun desain hingga pembentukan Website Coffee Shop & Agency</p>
`;

timeline.append(item1, item2, item3, item4);
section.appendChild(timeline);
document.body.appendChild(section);

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

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2025 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);

// =======================
//  INTERACTIONS
// =======================

// Smooth Scroll Menu
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

// Scroll ke atas saat logo di footer diklik
const preFooterLogo = document.querySelector(".footer-logo");
if (preFooterLogo) {
    preFooterLogo.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        history.pushState(null, "", "#home");
    });
}

// 🔹 Tambahkan event klik untuk logo navbar
logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    history.pushState(null, "", "#home");
});