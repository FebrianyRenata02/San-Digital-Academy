// ===== RESET BODY =====
document.body.innerHTML = "";

// ===== TOP BAR =====
const topBar = document.createElement("div");
topBar.className = "topbar";
topBar.textContent = "kami adalah Perusahaan San Digital profesional, mari bekerja sama hubungi kami";
document.body.appendChild(topBar);

// ===== NAVBAR =====
const navbar = document.createElement("nav");
navbar.className = "navbar";

// Logo
const logoLink = document.createElement("a");
logoLink.href = "index.html";
const logoImg = document.createElement("img");
logoImg.src = "/img/Agency Logo Transparant.png";
logoImg.alt = "San Agency Logo";
logoImg.className = "logo-navbar";
logoLink.appendChild(logoImg);

// Nav List
const navList = document.createElement("ul");
navList.className = "nav-list";
const links = ["Home", "Leadership", "Team"];
links.forEach(text => {
    const id = text.toLowerCase().replace(/\s+/g, '-'); // normalisasi id
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = text;
    li.appendChild(a);
    navList.appendChild(li);
});

// Hamburger Menu
const hamburger = document.createElement("div");
hamburger.className = "hamburger";
for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburger.appendChild(span);
}

// Toggle menu
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Tutup sidebar ketika klik di luar
document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
        navList.classList.remove("active");
        hamburger.classList.remove("active");
    }
});

navbar.appendChild(logoLink);
navbar.appendChild(navList);
navbar.appendChild(hamburger);
document.body.appendChild(navbar);

// ===== HEADER (Home) =====
const header = document.createElement("header");
header.className = "header";
header.id = "home"; // <-- ID untuk Home

const headerContent = document.createElement("div");
headerContent.className = "header-content";

const h1 = document.createElement("h1");
h1.textContent = "Our Team";

headerContent.appendChild(h1);
header.appendChild(headerContent);
document.body.appendChild(header);

// ===== LEADERSHIP SECTION (About) =====
const leadership = document.createElement("section");
leadership.className = "leadership";
leadership.id = "leadership"; // <-- ID untuk About

const leaderTitle = document.createElement("h2");
leaderTitle.textContent = "Meet Our Leadership Team";
leadership.appendChild(leaderTitle);

const leaderGrid = document.createElement("div");
leaderGrid.className = "leader-grid";

const leaders = [{
        name: "Renata",
        role: "Founder",
        img: "/img/renata.jpg",
        color: "border-blue founder"
    },
    {
        name: "Lorem",
        role: "Chief",
        img: "https://asset.kompas.com/crops/y2HoRqjm3RxFKqLHxOOeKAqhoxg=/0x0:1000x667/750x500/data/photo/2020/01/07/5e143342aed9a.jpg",
        color: "border-orange chief"
    },
    {
        name: "Lorem",
        role: "Admin",
        img: "https://services.presensi.co.id/media/admin/blog/a-728127.png",
        color: "border-pink admin"
    },
    {
        name: "Lorem",
        role: "Moderator",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrqZSc5NZcrzDeA347mSvluoIJsBxGJrtqA&s",
        color: "border-green moderator"
    }
];

leaders.forEach(leader => {
    const card = document.createElement("div");
    card.className = `leader-card ${leader.color}`;
    const img = document.createElement("img");
    img.src = leader.img;
    img.alt = leader.name;
    const name = document.createElement("h3");
    name.textContent = leader.name;
    const role = document.createElement("p");
    role.className = "role " + leader.role.toLowerCase();
    role.textContent = leader.role;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);
    leaderGrid.appendChild(card);
});

leadership.appendChild(leaderGrid);
document.body.appendChild(leadership);

// ===== TEAM SECTION (Services) =====
const teamSection = document.createElement("section");
teamSection.className = "team-section";
teamSection.id = "team"; // <-- ID untuk Services

const teamTitle = document.createElement("h2");
teamTitle.textContent = "Our Team";
teamSection.appendChild(teamTitle);

const teamGrid = document.createElement("div");
teamGrid.className = "team-grid";

const teamMembers = [{
        name: "Renata",
        role: "Desain",
        img: "/img/Renata2.jpg",
        link: "https://www.figma.com/design/alJvfHARz1XBSuUo7KTzpF/San-Digital-Agency?t=IAApafBVeJqBrHzm-0"
    },
    {
        name: "Lorem",
        role: "Front-End",
        img: "https://blog.digitalskola.com/wp-content/uploads/2025/01/front-end-developer-2-1024x683.jpg"
    },
    {
        name: "Lorem",
        role: "Back-End",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu_dr5bwQXSBqr3WGZ0eTNqDv51c-jnhh0w&s"
    },
    {
        name: "Lorem",
        role: "Full-Stack",
        img: "https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1749632298765-gaji-full-stack-web-developer.webp"
    }
];

teamMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "team-card border-yellow";

    if (member.link) {
        const a = document.createElement("a");
        a.href = member.link;
        a.target = "_blank"; // buka di tab baru untuk link eksternal
        a.rel = "noopener noreferrer";
        const img = document.createElement("img");
        img.src = member.img;
        img.alt = member.name;
        a.appendChild(img);
        card.appendChild(a);
    } else {
        const img = document.createElement("img");
        img.src = member.img;
        img.alt = member.name;
        card.appendChild(img);
    }

    const name = document.createElement("h3");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.className = "position " + member.role.toLowerCase().replace(/\s+/g, "");
    role.textContent = member.role;

    card.appendChild(name);
    card.appendChild(role);
    teamGrid.appendChild(card);
});

teamSection.appendChild(teamGrid);
document.body.appendChild(teamSection);

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = `<p>© 2025 San Digital Agency. All Rights Reserved.</p>`;
document.body.appendChild(footer);

// ===== SMOOTH SCROLL =====
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", e => {
        // jika link eksternal (contoh: http...) biarkan normal
        const href = link.getAttribute("href");
        if (!href || href.startsWith("http")) return;

        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            // hitung offset kalau ada navbar fixed (sesuaikan -120 jika perlu)
            const offset = 120;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });

            // update URL hash tanpa memicu jump
            // beri sedikit delay agar smooth scroll mulai dulu
            setTimeout(() => {
                history.pushState(null, "", `#${targetId}`);
            }, 300);

            // tutup menu setelah klik di mobile
            navList.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});
