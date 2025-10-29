// ===== NAVBAR DATA =====
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

// ===== HEADER =====
const header = document.createElement("header");
header.className = "header";

// ===== TOP BAR =====
const topBar = document.createElement("div");
topBar.className = "top-bar";
topBar.textContent =
  "Kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami!";
header.appendChild(topBar);

// ===== NAVBAR =====
const nav = document.createElement("nav");
nav.className = "navbar";

const logo = document.createElement("img");
logo.src = "img/Agency Logo Transparant.png";
logo.alt = "San Digital Agency";
logo.className = "logo scroll-top";

const navList = document.createElement("ul");
navList.className = "nav-list";

navItems.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.name;
  a.href = `#${item.id}`;
  li.appendChild(a);
  navList.appendChild(li);
});

const hamburger = document.createElement("div");
hamburger.className = "hamburger";
hamburger.innerHTML = `<span></span><span></span><span></span>`;

nav.appendChild(logo);
nav.appendChild(navList);
nav.appendChild(hamburger);
header.appendChild(nav);
document.body.appendChild(header);

// ===== HERO =====
const hero = document.createElement("section");
hero.className = "hero";
hero.id = "home";
hero.innerHTML = `
  <div class="hero-text">
    <h1>Buka Potensi<br>Digital Anda</h1>
    <p>Mulai Partnership & Bangun Karir Bersama Kami. Tingkatkan performa bisnis Anda melalui channel digital seperti Website, Google, Facebook, Instagram, YouTube, dll.</p>
    <a href="ourteam.html"><button class="cta-btn">Our Team</button></a>
  </div>
  <img src="img/trafik.png" class="hero-img" alt="Grafik Pertumbuhan">
`;
document.body.appendChild(hero);

// ===== ABOUT =====
const about = document.createElement("section");
about.className = "about";
about.id = "about";
about.innerHTML = `
  <div class="about-left">
    <img src="img/founder.png" alt="Founder">
  </div>
  <div class="about-right">
    <h2>San Digital Agency</h2>
    <p>Kami adalah perusahaan digital yang membantu meningkatkan performa bisnis Anda melalui branding, desain, dan teknologi terkini.</p>
    <button class="cta-btn">Layanan Kami</button>
  </div>
`;
document.body.appendChild(about);

// ===== SERVICES =====
const services = document.createElement("section");
services.className = "services";
services.id = "services";
services.innerHTML = `
  <h2>Jasa Services San Digital Agency</h2>
  <div class="service-cards">
  
    <div class="card">
   <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/></svg>
        <h3>Portofolio</h3>
        <p>Pamerkan hasil karya terbaik Anda.</p>
    </div>
    <div class="card">
    <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM304 416L336 416C353.7 416 368 430.3 368 448L368 528L272 528L272 448C272 430.3 286.3 416 304 416zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"/></svg>
      <h3>Company Profile</h3>
      <p>Tingkatkan kredibilitas bisnis Anda.</p>
    </div>
    <div class="card">
     <svg xmlns=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128C78.3 128 64 142.3 64 160C64 177.7 78.3 192 96 192L182.7 192C195 220.3 223.2 240 256 240C288.8 240 317 220.3 329.3 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L329.3 128C317 99.7 288.8 80 256 80C223.2 80 195 99.7 182.7 128L96 128zM96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L342.7 352C355 380.3 383.2 400 416 400C448.8 400 477 380.3 489.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L489.3 288C477 259.7 448.8 240 416 240C383.2 240 355 259.7 342.7 288L96 288zM96 448C78.3 448 64 462.3 64 480C64 497.7 78.3 512 96 512L150.7 512C163 540.3 191.2 560 224 560C256.8 560 285 540.3 297.3 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L297.3 448C285 419.7 256.8 400 224 400C191.2 400 163 419.7 150.7 448L96 448z"/></svg>
      <h3>Website Layanan</h3>
      <p>Bangun website profesional.</p>
    </div>
  </div>
`;
document.body.appendChild(services);

// ===== PORTFOLIO =====
const portfolioData = [{
    img: "img/programmer.svg",
    link: "https://febrianyrenata02.github.io/web-portofolio-saya/portofolio",
    title: "Portfolio Rena",
  },
  {
    img: "/img/online-resume-animate.svg",
    link: "https://febrianyrenata.vercel.app/",
    title: "Portfolio Rena Versi Update",
  },
  {
    img: "https://specialteam.vercel.app/assets/img/main_icon2.svg",
    link: "https://specialteam.vercel.app/",
    title: "Special Team",
  },
];

const portfolio = document.createElement("section");
portfolio.className = "portfolio";
portfolio.id = "portfolio";

const portfolioTitle = document.createElement("h2");
portfolioTitle.textContent = "Portfolio";
portfolio.appendChild(portfolioTitle);

const portfolioGrid = document.createElement("div");
portfolioGrid.className = "grid";

portfolioData.forEach((item) => {
  const box = document.createElement("div");
  box.className = "box";

  const a = document.createElement("a");
  a.href = item.link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;
  img.style.width = "200px";
  img.style.height = "200px";
  img.style.objectFit = "contain";
  img.style.display = "block";
  img.style.margin = "0 auto";

  const title = document.createElement("p");
  title.textContent = item.title;
  title.style.textAlign = "center";
  title.style.fontWeight = "600";
  title.style.marginTop = "8px";
  title.style.color = "#333";

  a.appendChild(img);
  a.appendChild(title);
  box.appendChild(a);
  portfolioGrid.appendChild(box);
});

portfolio.appendChild(portfolioGrid);
document.body.appendChild(portfolio);

// ===== BLOG =====
const blogData = [{
    img: "img/UI : UX.png",
    link: "UI-UX.html"
  },
  {
    img: "img/Development.png",
    link: "Developer.html"
  },
  {
    img: "img/Engineer.png",
    link: "Engineer.html"
  },
];

const blog = document.createElement("section");
blog.className = "blog";
blog.id = "blog";

const blogTitle = document.createElement("h2");
blogTitle.textContent = "Blog";
blog.appendChild(blogTitle);

const blogGrid = document.createElement("div");
blogGrid.className = "grid";

blogData.forEach((item) => {
  const box = document.createElement("div");
  box.className = "box";

  const a = document.createElement("a");
  a.href = item.link;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = "Blog Image";
  img.style.width = "100%";
  img.style.height = "200px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "10px";
  img.style.display = "block";

  a.appendChild(img);
  box.appendChild(a);
  blogGrid.appendChild(box);
});

blog.appendChild(blogGrid);
document.body.appendChild(blog);


// ===== CONTACT =====
const contact = document.createElement("section");
contact.className = "contact";
contact.id = "contact";
contact.innerHTML = `
  <h2>Hubungi Kami</h2>
  <form id="contactForm">
    <input type="text" id="name" placeholder="Name" required />
    <input type="email" id="email" placeholder="Email" required />
    <input type="text" id="phone" placeholder="Phone Number" required />
    <input type="text" id="city" placeholder="Your City" required />
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit">Kirim</button>
  </form>
  <p id="response"></p>

  <!-- 🌍 Tambahkan MAP di bawah form -->
  <div class="map-container">
    <iframe
    src="https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="500"
      style="border:0;"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
`;
document.body.appendChild(contact);

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

// ===== SMOOTH SCROLL MENU =====
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

// ===== FORM HANDLER =====
document.getElementById("contactForm").addEventListener("submit", async(e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        message: document.getElementById("message").value,
    };

    try {
        const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.success) {
            document.getElementById("response").textContent = "✅ Pesan berhasil dikirim!";

            // 🔁 Tambahkan jeda 1.5 detik sebelum reload
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            document.getElementById("response").textContent = "❌ Gagal mengirim pesan.";
        }
    } catch (err) {
        document.getElementById("response").textContent =
            "⚠️ Terjadi kesalahan koneksi ke server.";
    }
});
