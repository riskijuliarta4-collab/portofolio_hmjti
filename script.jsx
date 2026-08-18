const { useState } = React;

const profile = {
  name: "I MADE RISKY JULIARTA",
  initials: "J",
  role: "Mahasiswa S1 Pendidikan Teknik Informatika",
  campus: "Universitas Pendidikan Ganesha",
  email: "riskijuliarta4@gmail.com",
  NIM: 2615051036,
  instagram: "@taa.c_o",
};

const experiences = [
  {
    year: "2025",
    title: "LKS Cyber Security",
    place: "SMK Negeri 1 Denpasar",
    description:
      "Mengikuti kompetisi Lomba Kompetensi Siswa pada bidang Cyber Security dan mengembangkan kemampuan dalam keamanan jaringan serta sistem.",
  },

  {
    year: "2025",
    title: "Praktik Kerja Lapangan",
    place: "PT Gaya Masa Teknika",
    description:
      "Mendapatkan pengalaman langsung di dunia kerja dengan menerapkan pengetahuan jaringan komputer dan teknologi informasi.",
  },

  {
    year: "2025",
    title: "Praktik Kerja Lapangan",
    place:
      "Dinas Komunikasi, Informatika dan Statistik Provinsi Bali",
    description:
      "Mempelajari penerapan teknologi informasi dan jaringan dalam lingkungan instansi pemerintahan.",
  },

  {
    year: "2026",
    title: "Mahasiswa Pendidikan Teknik Informatika",
    place: "Universitas Pendidikan Ganesha",
    description:
      "Memulai perjalanan akademik sebagai mahasiswa Pendidikan Teknik Informatika dan terus mengembangkan kemampuan di bidang teknologi.",
  },
];

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React JS",
  "Python",
  "Linux",
  "MikroTik",
  "Networking",
  "Cyber Security",
  "Git",
  "Problem Solving",
];


/* =========================================================
   DATA PROJECT
===========================F============================== */

const projects = [
  {
    title: "Website Portofolio",
    description:
      "Website personal responsif untuk memperkenalkan profil, kemampuan, pengalaman, dan perjalanan saya di bidang teknologi.",
    tech: ["HTML", "CSS", "React JS"],
  },

  {
    title: "Chatting Website",
    description:
      "Membangun website chatting sederhana sebagai latihan pengembangan aplikasi web dan penggunaan database.",
    tech: ["JavaScript", "Node.js", "AWS"],
  },

  {
    title: "Cyber Security Lab",
    description:
      "Melakukan pembelajaran dan praktik keamanan siber menggunakan berbagai tools dalam lingkungan lab.",
    tech: ["Linux", "Nmap", "Burp Suite"],
  },
];

function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  const scrollTo = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };


  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];


  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <>

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">

        <div className="container nav-inner">

          <a
            className="logo"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            J<span>.</span>
          </a>


          {/* BUTTON MENU MOBILE */}

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>


          {/* NAVIGATION */}

          <nav>

            <ul
              className={`nav-links ${
                menuOpen ? "open" : ""
              }`}
            >

              {menuItems.map((item) => (

                <li key={item}>

                  <a
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1)}
                  </a>

                </li>

              ))}

            </ul>

          </nav>

        </div>

      </header>



      {/* ===================================================
          MAIN
      =================================================== */}

      <main>


        {/* =================================================
            HERO / INTRO
        ================================================= */}

        <section
          id="home"
          className="hero"
        >

          <div className="container hero-grid">


            {/* BAGIAN KIRI */}

            <div>

              <div className="badge">
                ● Ganesha Muda • Informatika
              </div>


              <h1>
                Halo, saya{" "}
                <span>
                  {profile.name}
                </span>.
              </h1>


              <p>
                {profile.role} di{" "}
                {profile.campus} yang memiliki
                ketertarikan pada pengembangan web,
                teknologi jaringan, dan keamanan
                siber.
              </p>


              <div className="actions">

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    scrollTo("projects")
                  }
                >
                  Lihat Proyek
                </button>


                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    scrollTo("contact")
                  }
                >
                  Hubungi Saya
                </button>

              </div>

            </div>



            {/* BAGIAN KANAN / FOTO */}

            <div className="profile-card">

              <div className="profile-orbit">

                <img
                  className="avatar"
                  src="d9eda4dc-cea8-4ab8-ae78-bb6888de1cce-removebg-preview.png"
                  alt="Foto profil I Made Risky Juliarta"
                />
              </div>
              </div>

          </div>

        </section>



        {/* =================================================
            ABOUT
        ================================================= */}

        <section id="about">

          <div className="container">

            <div className="section-title">

              <div className="eyebrow">
                01 — Tentang Saya
              </div>

              <h2>
                Mengenal lebih dekat.
              </h2>

            </div>


            <div className="about-grid">


              {/* DESKRIPSI */}

              <div className="card">

                <p>
                  Saya merupakan mahasiswa S1
                  Pendidikan Teknik Informatika
                  dengan NIM 2615051036
                  dan memiliki ketertarikan pada
                  dunia teknologi, khususnya
                  pengembangan website, jaringan
                  komputer, dan keamanan siber.
                </p>

                <br />

                <p>
                  Saya senang belajar melalui
                  proyek langsung karena setiap
                  proyek memberikan pengalaman
                  baru dalam memahami teknologi
                  dan memecahkan berbagai
                  permasalahan.
                </p>

              </div>



              {/* INFORMASI */}

              <div className="card info-list">


                <div className="info-row">

                  <span>
                    Nama
                  </span>

                  <strong>
                    {profile.name}
                  </strong>

                </div>


                <div className="info-row">

                  <span>
                    Program Studi
                  </span>

                  <strong>
                    S1 Pendidikan Teknik Informatika
                  </strong>

                </div>


                <div className="info-row">

                  <span>
                    Universitas
                  </span>

                  <strong>
                    Universitas Pendidikan Ganesha
                  </strong>

                </div>


                <div className="info-row">

                  <span>
                    Fokus
                  </span>

                  <strong>
                    Web • Network • Security
                  </strong>

                </div>


              </div>

            </div>

          </div>

        </section>



        {/* =================================================
            SKILLS
        ================================================= */}

        <section id="skills">

          <div className="container">

            <div className="section-title">

              <div className="eyebrow">
                02 — Kemampuan
              </div>

              <h2>
                Teknologi yang saya pelajari.
              </h2>

            </div>


            <div className="card">

              <div className="skills">

                {skills.map((skill) => (

                  <span
                    className="skill"
                    key={skill}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </section>



        {/* =================================================
            PROJECTS
        ================================================= */}

        <section id="projects">

          <div className="container">

            <div className="section-title">

              <div className="eyebrow">
                03 — Proyek
              </div>

              <h2>
                Beberapa hal yang pernah saya kerjakan.
              </h2>

            </div>


            <div className="project-grid">

              {projects.map(
                (project, index) => (

                  <article
                    className="card project-card"
                    key={project.title}
                  >

                    <div>

                      <div className="project-number">

                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}

                      </div>


                      <h3>
                        {project.title}
                      </h3>


                      <p>
                        {project.description}
                      </p>

                    </div>


                    <div className="project-tech">

                      {project.tech.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

        </section>



        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section id="experience">

          <div className="container">

            <div className="section-title">

              <div className="eyebrow">
                04 — Pengalaman
              </div>

              <h2>
                Perjalanan saya di dunia teknologi.
              </h2>

            </div>


            <div className="experience-list">

              {experiences.map(
                (experience, index) => (

                  <div
                    className="experience-item"
                    key={index}
                  >


                    {/* TAHUN */}

                    <div className="experience-year">
                      {experience.year}
                    </div>


                    {/* ISI */}

                    <div className="experience-content">

                      <h3>
                        {experience.title}
                      </h3>


                      <span>
                        {experience.place}
                      </span>


                      <p>
                        {experience.description}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>



        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="contact"
        >

          <div className="container">

            <div className="card">

              <div className="eyebrow">
                05 — Kontak
              </div>


              <h2>
                Mari terhubung.
              </h2>


              <p>
                Terima kasih telah mengunjungi
                portofolio saya. Silakan hubungi
                saya melalui kontak yang tersedia.
              </p>


              <div
                className="actions"
                style={{
                  justifyContent: "center",
                }}
              >


                {/* WHATSAPP */}

                <a
                  className="btn btn-primary"
                  href="https://wa.me/6285738279219"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Saya
                </a>


                {/* INSTAGRAM */}

                <a
                  className="btn btn-secondary"
                  href="https://www.instagram.com/taa.c_o/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>


              </div>

            </div>

          </div>

        </section>

      </main>



      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer>

        © 2026 {profile.name} •
        Portfolio Pendidikan Teknik Informatika

      </footer>

    </>
  );
}


/* =========================================================
   RENDER REACT
========================================================= */

ReactDOM
  .createRoot(
    document.getElementById("root")
  )
  .render(<App />);
