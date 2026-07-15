import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Menu, X } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────────
   ALL CONTENT LIVES HERE. To update the site later, edit this object only —
   nothing else in this file needs to change.
   ──────────────────────────────────────────────────────────────────────── */
const DATA = {
  name: "Hema Sree Surapaneni",
  tagline: "CS Graduate · Full-Stack · AI/ML",
  location: "Smyrna, GA",
  email: "hemasreesurapaneni@gmail.com",
  phone: "+1 943-255-4802",
  linkedin: "https://www.linkedin.com/in/hema-sree-surapaneni-8259b3384",
  github: "https://github.com/hema-sree-s",
  about:
    "CS graduate (MS, Kennesaw State University) with hands-on experience across full-stack development, cloud infrastructure, AI/ML pipelines, and data engineering. Built production-grade systems spanning fraud detection at 50M+ row scale, ethical AI simulations, and geospatial routing tools — with a foundation in web development, project management, and design from earlier coursework. Open to full-time Software Engineering, Data Science, and AI/ML roles.",

  quickFacts: [
    { key: "Based in", value: "Smyrna, GA" },
    { key: "Focus", value: "Full-Stack · AI/ML · Cloud" },
    { key: "Education", value: "MS CS, Kennesaw State (4.0 GPA)" },
    { key: "Certifications", value: "AWS · Salesforce · Cisco · Java" },
    { key: "Status", value: "Open to full-time roles" },
  ],

  education: [
    {
      degree: "MS Computer Science",
      school: "Kennesaw State University",
      period: "2024 – 2025",
      detail: "GPA: 4.0 / 4.0",
    },
    {
      degree: "B.Tech Computer Science",
      school: "Vignan's Foundation for Science, Technology & Research",
      period: "2020 – 2024",
      detail: "CGPA: 8.7 / 10",
    },
  ],

  additionalCoursework: [
    { name: "Web Development", url: "https://drive.google.com/file/d/1YOWLVdbaRdAtVO9-dxnF7nnTiQxt3ifD/view?usp=drive_link" },
    { name: "Software Project Management", url: "https://drive.google.com/file/d/1v363e733BPSnQ-kb79EhxbhXjuK6uTk0/view?usp=drive_link" },
    { name: "Introduction to C++", url: "https://drive.google.com/file/d/1v3FIPvYH_jtE59vQjrfJxakHXEtkilS_/view?usp=drive_link" },
    { name: "Graphic Designing", url: "https://trainings.internshala.com/verify-certificate/?certificate_number=58850491-1535-307A-D5BE-72F0BAFED430" },
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "JavaScript", "C", "C++", "Bash", "SQL"] },
    { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Mapbox GL JS", "Firebase", "Android Development"] },
    { group: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Hadoop", "Apache Spark"] },
    {
      group: "AI / ML / Data",
      items: ["LightGBM", "PyTorch Geometric", "GraphSAGE", "Spark MLlib", "MLflow", "Optuna", "SHAP", "OpenCV", "Streamlit"],
    },
    { group: "Tools", items: ["Git", "Linux", "Salesforce Trailhead"] },
  ],

  experience: [
    {
      title: "Cloud Computing & DevOps Internship",
      org: "NICE Computer Education & Software Solutions (APSCHE-affiliated)",
      period: "Dec 2023 – May 2024",
      certUrls: [
        { label: "View Certificate", url: "https://drive.google.com/file/d/1gas3ezY3HJasA1dBRQSmaya6fw78p4PR/view?usp=drive_link" },
      ],
      points: [
        "Gained hands-on experience with AWS cloud services, Docker containerization, and CI/CD pipeline fundamentals",
      ],
    },
    {
      title: "Data Analytics & Machine Learning Internship",
      org: "NICE Computer Education & Software Solutions (APSCHE-affiliated)",
      period: "Jun 2023 – Nov 2023",
      certUrls: [
        { label: "View Certificate", url: "https://drive.google.com/file/d/1JW_rgSqH-DHvw00owY6CsMgnK0CVjfST/view?usp=drive_link" },
      ],
      points: [
        "Built and evaluated supervised ML models; applied feature engineering, hyperparameter tuning, and performance benchmarking",
      ],
    },
    {
      title: "Teaching Assistant",
      org: "VFSTR Deemed University",
      period: "Aug 2023 – May 2024",
      points: [
        "Delivered tutorials for undergraduate CS courses, supporting 100+ students across 3 semesters",
        "Streamlined student query resolution and contributed to grading workflows",
        "Fostered a discussion-driven classroom culture that increased student participation",
      ],
    },
    {
      title: "Web Development Intern",
      org: "Technook (Remote)",
      period: "Jan 2023 – Feb 2023",
      points: [
        "Built responsive websites using HTML, CSS, and JavaScript under production timelines",
        "Applied modern UI layout patterns and responsive design best practices for client projects",
      ],
    },
  ],

  projects: [
    {
      title: "FraudCascade",
      tech: ["Python", "LightGBM", "GraphSAGE", "Visualization & Model Explainability", "MLOps & Collaboration", "MLFlow", "ApacheSpark"],
      description:
        "Two-stage fraud detection pipeline for credit-card transactions. Stage 1 uses a cost-sensitive LightGBM model tuned with Optuna and explained with SHAP. Stage 2 applies a lightweight GraphSAGE GNN to detect patterns over transaction networks. Fully versioned with MLflow and scalable to 50M+ records via Apache Spark.",
      flag: "50M+ rows",
      url: "https://fraudcascade-3c9hyql5mjafebmdnqltmc.streamlit.app",
    },
    {
      title: "ResumeForge",
      tech: ["React.js", "Firebase (Firestore & Hosting)", "HTML", "CSS", "JavaScript"],
      description:
        "A professional, ATS-friendly resume builder with 10+ customizable templates, live content preview, PDF generation, and Firebase cloud storage for secure resume access anytime. Designed to simplify resume creation while ensuring professional formatting.",
      url: "https://devbuilder-733eb.web.app/",
    },
    {
      title: "Optimal Path Finder",
      tech: ["JavaScript (Mapbox GL / Geocoding/Directions)", "HTML/CSS", "GitHub Pages & Actions", "Algorithms – A* search"],
      description:
        "Interactive route optimization tool that calculates the most efficient path between two points using Dijkstra's Algorithm and A*. Features live Mapbox integration, address autocomplete, and real-time route rendering for quick, accurate navigation.",
      url: "https://hema-sree-s.github.io/optimal-path-finder/",
    },
    {
      title: "Bias Buster — Ethical AI Simulation",
      tech: ["React.js", "Firebase (Firestore & Hosting)", "HTML", "CSS", "Javascript"],
      description:
        "An interactive decision-making simulation that detects potential bias in AI-driven recruitment systems. Includes randomized scenarios, bias scoring, detailed reports, and Firebase data storage for analysis. Designed to promote fair and ethical AI practices.",
      url: "https://bais-buster.web.app/",
    },
    {
      title: "FlutterWing",
      tech: ["Python", "OpenCV", "ML"],
      description:
        "Insect-wing classification system using image resolution/quantization techniques paired with ML classifiers.",
      url: "",
    },
    {
      title: "Weatherly",
      tech: ["React.js", "WeatherAPI", "Firebase", "JavaScript", "HTML", "CSS"],
      description: "Responsive weather application delivering real-time forecasts based on user location. Features live weather updates, search by city, and a minimal, emoji-enhanced UI for clear and engaging user interaction.",
      url: "https://weatherly-16.web.app",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", url: "https://www.credly.com/badges/89273238-7269-4170-8f3f-6186a48d6d5d/public_url" },
    { name: "Salesforce AI Associate", url: "https://drive.google.com/file/d/1SctJdt8gEFS82-wb9V-U516zGoPwKEc0/view?usp=sharing" },
    { name: "Introduction to Cybersecurity (Cisco)", url: "https://www.credly.com/badges/0ab0466f-1095-47c8-8a4f-c88c66fbde36/public_url" },
    { name: "Diploma in Full Stack Java Developer — Minerva Institute of Computer Education (A+)", url: "https://drive.google.com/file/d/1PrDUocA_9Nh_oRVp_I6QZLt6IISCOKLq/view?usp=drive_link" },
  ],
};

/* ──────────────────────────────────────────────────────────────────────── */

const NAV = ["About", "Experience", "Skills", "Projects", "Certifications", "Contact"];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function NetworkGraph() {
  // Signature element: a fraud-detection-style graph — quiet nodes, one
  // flagged node pulsing amber, signal traveling along an edge.
  const nodes = [
    { x: 60, y: 70 }, { x: 180, y: 40 }, { x: 300, y: 90 },
    { x: 130, y: 160 }, { x: 260, y: 190 }, { x: 380, y: 140 },
    { x: 40, y: 230 }, { x: 340, y: 40 },
  ];
  const edges = [[0,1],[1,2],[1,3],[3,4],[4,5],[2,5],[3,6],[2,7]];
  const flagged = 4;

  return (
    <svg viewBox="0 0 420 260" style={{ width: "100%", height: "100%" }} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="#243244" strokeWidth="1.4"
        />
      ))}
      {/* traveling signal along one edge */}
      <circle r="3.2" fill="#4FD1C5">
        <animateMotion
          dur="3.4s"
          repeatCount="indefinite"
          path={`M${nodes[3].x},${nodes[3].y} L${nodes[4].x},${nodes[4].y}`}
        />
      </circle>
      {nodes.map((n, i) => (
        <g key={i}>
          {i === flagged && (
            <circle cx={n.x} cy={n.y} r="12" fill="none" stroke="#F5A524" strokeWidth="1.5" opacity="0.6">
              <animate attributeName="r" values="8;16;8" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="2.2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle
            cx={n.x} cy={n.y} r={i === flagged ? 6 : 4.5}
            fill={i === flagged ? "#F5A524" : "#4FD1C5"}
            opacity={i === flagged ? 1 : 0.85}
          />
        </g>
      ))}
    </svg>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = NAV.map((n) => n.toLowerCase());
  const active = useActiveSection(ids);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .navlink { position: relative; }
        .navlink::after {
          content: ""; position: absolute; left: 0; bottom: -6px; height: 2px; width: 0;
          background: #4FD1C5; transition: width .2s ease;
        }
        .navlink.active::after { width: 100%; }
        .card {
          border: 1px solid #1F2937; background: #101722; border-radius: 10px;
          transition: transform .18s ease, border-color .18s ease;
        }
        .card:hover { transform: translateY(-3px); border-color: #2B3A4F; }
        .chip {
          border: 1px solid #24313F; border-radius: 999px; padding: 5px 12px;
          font-family: 'IBM Plex Mono', monospace; font-size: 12.5px; color: #A9B4C0;
        }
        a.iconlink { color: #8B96A5; transition: color .15s ease; }
        a.iconlink:hover { color: #4FD1C5; }
        ::selection { background: #4FD1C5; color: #06110F; }
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <button onClick={() => scrollTo("hero")} style={styles.logo} aria-label="Home">
            HS<span style={{ color: "#4FD1C5" }}>.</span>
          </button>
          <nav className="desktop-nav" style={{ display: "flex", gap: 28 }}>
            {NAV.map((n) => {
              const id = n.toLowerCase();
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`navlink${active === id ? " active" : ""}`}
                  style={styles.navBtn}
                >
                  {n}
                </button>
              );
            })}
          </nav>
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            style={{ ...styles.navBtn, display: "none" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV.map((n) => (
              <button key={n} onClick={() => scrollTo(n.toLowerCase())} style={styles.mobileMenuBtn}>
                {n}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.eyebrow}>{DATA.tagline}</p>
          <h1 style={styles.h1}>Hi, I'm {DATA.name.split(" ")[0]} {DATA.name.split(" ")[1]}.</h1>
          <div style={styles.statusBadge}>
            <span style={styles.statusDot} /> Open to full-time opportunities
          </div>
          <p style={styles.heroSub}>{DATA.about}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} style={styles.primaryBtn}>View Projects</button>
            <button onClick={() => scrollTo("contact")} style={styles.secondaryBtn}>Get in Touch</button>
          </div>
        </div>
        <div style={styles.heroGraph}>
          <NetworkGraph />
        </div>
      </section>

      <main style={styles.main}>
        {/* ABOUT */}
        <Section id="about" title="About" index="01">
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "start" }}>
            <p style={styles.body}>{DATA.about}</p>
            <div className="card" style={{ padding: "18px 20px" }}>
              {DATA.quickFacts.map((f, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "9px 0", borderBottom: i !== DATA.quickFacts.length - 1 ? "1px solid #1B2431" : "none" }}>
                  <span style={styles.monoLabel}>{f.key}</span>
                  <span style={{ fontSize: 13.5, color: "#E7ECF2", textAlign: "right" }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 28 }}>
            {DATA.education.map((ed, i) => (
              <div key={i} className="card" style={{ padding: "18px 20px" }}>
                <div style={styles.monoLabel}>{ed.period}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, marginTop: 6 }}>
                  {ed.degree}
                </div>
                <div style={{ color: "#8B96A5", fontSize: 14, marginTop: 4 }}>{ed.school}</div>
                <div style={{ color: "#4FD1C5", fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, marginTop: 8 }}>
                  {ed.detail}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience" index="02">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {DATA.experience.map((exp, i) => (
              <div key={i} style={styles.timelineRow}>
                <div style={styles.timelineRail}>
                  <div style={styles.timelineDot} />
                  {i !== DATA.experience.length - 1 && <div style={styles.timelineLine} />}
                </div>
                <div style={{ paddingBottom: 32 }}>
                  <div style={styles.monoLabel}>{exp.period}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, marginTop: 4 }}>
                    {exp.title}
                  </div>
                  <div style={{ color: "#4FD1C5", fontSize: 14, marginTop: 2 }}>{exp.org}</div>
                  <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "#A9B4C0", fontSize: 14.5, lineHeight: 1.7 }}>
                    {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                  {exp.certUrls && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 10 }}>
                      {exp.certUrls.map((c, k) => (
                        <a key={k} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.projectLink, color: "#4FD1C5", marginTop: 0 }}>
                          {c.label} <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" index="03">
          <div style={{ display: "grid", gap: 20 }}>
            {DATA.skills.map((g, i) => (
              <div key={i}>
                <div style={styles.monoLabel}>{g.group}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                  {g.items.map((s, j) => <span key={j} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" index="04">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
            {DATA.projects.map((p, i) => (
              <div key={i} className="card" style={{ padding: "22px 22px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600 }}>
                    {p.title}
                  </div>
                  {p.flag && (
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: "#F5A524",
                      border: "1px solid #3A2E12", borderRadius: 6, padding: "2px 8px", whiteSpace: "nowrap",
                    }}>
                      {p.flag}
                    </span>
                  )}
                </div>
                <p style={{ color: "#A9B4C0", fontSize: 14.5, lineHeight: 1.65, marginTop: 10, flexGrow: 1 }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                  {p.tech.map((t, j) => <span key={j} className="chip" style={{ fontSize: 11.5, padding: "3px 9px" }}>{t}</span>)}
                </div>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.projectLink, color: "#4FD1C5" }}>
                    View Project <ExternalLink size={13} />
                  </a>
                ) : (
                  <span style={{ ...styles.projectLink, color: "#5A6472" }}>Link coming soon</span>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="certifications" title="Certifications" index="05">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {DATA.certifications.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card iconlink"
                style={{ padding: "12px 18px", fontSize: 14, textDecoration: "none", color: "#E7ECF2", display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                {c.name} <ExternalLink size={13} />
              </a>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <div style={styles.monoLabel}>Additional Coursework</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {DATA.additionalCoursework.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="chip iconlink" style={{ textDecoration: "none" }}>
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact" index="06">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center" }}>
            <a href={`mailto:${DATA.email}`} className="iconlink" style={styles.contactRow}>
              <Mail size={18} /> {DATA.email}
            </a>
            <a href={`tel:${DATA.phone}`} className="iconlink" style={styles.contactRow}>
              <Phone size={18} /> {DATA.phone}
            </a>
            <span style={{ ...styles.contactRow, color: "#8B96A5" }}>
              <MapPin size={18} /> {DATA.location}
            </span>
            {DATA.linkedin && (
              <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="iconlink" style={styles.contactRow}>
                <Linkedin size={18} /> LinkedIn
              </a>
            )}
            {DATA.github && (
              <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="iconlink" style={styles.contactRow}>
                <Github size={18} /> GitHub
              </a>
            )}
          </div>
        </Section>
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} {DATA.name} — built with React, no backend required.
      </footer>
    </div>
  );
}

function Section({ id, title, index, children }) {
  return (
    <section id={id} style={styles.section}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 26 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4FD1C5", fontSize: 13 }}>{index}</span>
        <h2 style={styles.h2}>{title}</h2>
        <div style={{ flexGrow: 1, height: 1, background: "#1B2431" }} />
      </div>
      {children}
    </section>
  );
}

const styles = {
  page: {
    background: "#0B0F14",
    color: "#E7ECF2",
    fontFamily: "'IBM Plex Sans', sans-serif",
    minHeight: "100%",
  },
  header: {
    position: "sticky", top: 0, zIndex: 20,
    background: "rgba(11,15,20,0.85)", backdropFilter: "blur(8px)",
    borderBottom: "1px solid #1B2431",
  },
  headerInner: {
    maxWidth: 1080, margin: "0 auto", padding: "16px 24px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  logo: {
    background: "none", border: "none", cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#E7ECF2",
  },
  navBtn: {
    background: "none", border: "none", cursor: "pointer",
    color: "#A9B4C0", fontSize: 14, fontFamily: "'IBM Plex Sans', sans-serif",
  },
  mobileMenu: {
    display: "flex", flexDirection: "column", padding: "8px 24px 18px",
    borderTop: "1px solid #1B2431", gap: 14,
  },
  mobileMenuBtn: {
    background: "none", border: "none", textAlign: "left", color: "#A9B4C0",
    fontSize: 15, padding: "6px 0", cursor: "pointer",
  },
  hero: {
    maxWidth: 1080, margin: "0 auto", padding: "72px 24px 40px",
    display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "center",
  },
  heroText: {},
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace", color: "#4FD1C5", fontSize: 13,
    letterSpacing: 1, textTransform: "uppercase", margin: 0,
  },
  h1: {
    fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 46px)",
    fontWeight: 700, margin: "14px 0 0", lineHeight: 1.15,
  },
  heroSub: { color: "#A9B4C0", fontSize: 15.5, lineHeight: 1.7, marginTop: 18, maxWidth: 560 },
  statusBadge: {
    display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16,
    fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#4FD1C5",
    border: "1px solid #1F3A36", borderRadius: 999, padding: "5px 12px", background: "#0F1A17",
  },
  statusDot: {
    width: 7, height: 7, borderRadius: "50%", background: "#4FD1C5", flexShrink: 0,
  },
  heroGraph: { minHeight: 220 },
  primaryBtn: {
    background: "#4FD1C5", color: "#06110F", border: "none", borderRadius: 8,
    padding: "12px 22px", fontSize: 14.5, fontWeight: 600, cursor: "pointer",
  },
  secondaryBtn: {
    background: "transparent", color: "#E7ECF2", border: "1px solid #2B3A4F", borderRadius: 8,
    padding: "12px 22px", fontSize: 14.5, fontWeight: 600, cursor: "pointer",
  },
  main: { maxWidth: 1080, margin: "0 auto", padding: "0 24px" },
  section: { padding: "56px 0", borderTop: "1px solid #14191F" },
  h2: {
    fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 600, margin: 0,
  },
  body: { color: "#A9B4C0", fontSize: 15, lineHeight: 1.75 },
  monoLabel: {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: "#5A6472",
    textTransform: "uppercase", letterSpacing: 0.5,
  },
  timelineRow: { display: "grid", gridTemplateColumns: "20px 1fr", gap: 18 },
  timelineRail: { display: "flex", flexDirection: "column", alignItems: "center" },
  timelineDot: { width: 10, height: 10, borderRadius: "50%", background: "#4FD1C5", marginTop: 6, flexShrink: 0 },
  timelineLine: { width: 2, flexGrow: 1, background: "#1B2431", marginTop: 4 },
  projectLink: {
    display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16,
    fontSize: 13.5, fontWeight: 600, textDecoration: "none",
  },
  contactRow: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, textDecoration: "none" },
  footer: {
    textAlign: "center", color: "#5A6472", fontSize: 13, padding: "32px 24px",
    borderTop: "1px solid #14191F", marginTop: 20,
  },
};
