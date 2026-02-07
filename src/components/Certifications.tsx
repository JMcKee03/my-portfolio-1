// Certifications.tsx
import React, { useMemo, useState } from "react";
import "./Certifications.css";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaCircleCheck,
  FaHourglassHalf,
  FaListCheck,
  FaFilter,
  FaMagnifyingGlass,
} from "react-icons/fa6";

type CertStatus = "Completed" | "In Progress";

export type Cert = {
  slug: string;
  title: string;
  issuer: string;
  status: CertStatus;
  dateText: string;
  credentialUrl?: string;
  summary: string;      //  short description for the list/cards page
  description: string;  //  full description for the detail page
  skills: string[];
  images: string[];
};

export const CERTS: Cert[] = [
  {
    slug: "learn-javascript-codecademy",
    title: "Learn JavaScript Course",
    issuer: "Codecademy",
    status: "Completed",
    dateText: "Feb 2026",
    credentialUrl: "https://www.codecademy.com/profiles/jerald37",
    summary:
      "Completed a Codecademy JavaScript course containing core JS fundamentals.",
    description: `
      Completed Codecademy’s Learn JavaScript course, covering JavaScript fundamentals
      through hands-on exercises and projects.

      This was a 15-hour course that contained 12 projects and covered topics such as
      conditionals, functions, arrays, objects, and more.
      `,
    skills: ["JavaScript", "Programming Fundamentals", "Problem Solving"],
    images: ["assets/certs/LearnJavaScript _ Codecademy.jpg"],
  },
  {
    slug: "Full-Stack Engineer",
    title: "Full-Stack Engineer",
    issuer: "Codecademy",
    status: "In Progress",
    dateText: "March 2026",
    credentialUrl: "https://www.codecademy.com/profiles/jerald37",
    summary:
      "Completed Codecademy's 150 hour Full-Stack Engineer Career Path.",
    description: `
      Currently progressing through Codecademy’s Full-Stack Engineer Career Path, gaining
      hands-on experience across the full web development stack.

      The path covers front-end development with HTML, CSS, JavaScript, React, and Redux,
      as well as back-end development using Node.js, Express, and PostgreSQL. It emphasizes
      building real-world PERN applications, implementing security best practices, and
      connecting front-end and back-end systems.

      Throughout the program, I am completing portfolio projects, practicing technical
      interview problems, and strengthening version control workflows with Git and GitHub
      to prepare for professional full-stack engineering roles.
      `,

    skills: ["Full-Stack Development", "Web Development", "React", "Node.js", "Express", "PostgreSQL"],
    images: [""],
  },
];

const Certifications: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | CertStatus>("All");

  const normalizedQuery = query.trim().toLowerCase();

  // global counts (always from full list)
  const completedCount = CERTS.filter((c) => c.status === "Completed").length;
  const inProgressCount = CERTS.filter((c) => c.status === "In Progress").length;

  // search always applies; "filter" controls which sections render
  const searched = useMemo(() => {
    return CERTS.filter((c) => {
      if (!normalizedQuery) return true;
      const haystack = `${c.title} ${c.issuer} ${c.status} ${c.skills.join(" ")}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  // lists after search
  const completedList = useMemo(
    () => searched.filter((c) => c.status === "Completed"),
    [searched]
  );
  const inProgressList = useMemo(
    () => searched.filter((c) => c.status === "In Progress"),
    [searched]
  );

  // controls which sections appear
  const showCompleted = filter === "All" || filter === "Completed";
  const showInProgress = filter === "All" || filter === "In Progress";

  return (
    <section className="certs-page">
      <div className="certs-wrap">
        <header className="certs-header">
          <h1>Certifications</h1>
          <p>Tracking what I’ve completed and what I’m currently working on.</p>
        </header>

        {/* Counters */}
        <div className="certs-stats">
          <div className="stat-card">
            <div className="stat-icon done" aria-hidden="true">
              <FaCircleCheck />
            </div>
            <div className="stat-meta">
              <p className="stat-label">Completed</p>
              <p className="stat-value">{completedCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon prog" aria-hidden="true">
              <FaHourglassHalf />
            </div>
            <div className="stat-meta">
              <p className="stat-label">In Progress</p>
              <p className="stat-value">{inProgressCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon total" aria-hidden="true">
              <FaListCheck />
            </div>
            <div className="stat-meta">
              <p className="stat-label">Total</p>
              <p className="stat-value">{CERTS.length}</p>
            </div>
          </div>
        </div>

        <div className="certs-panel">
          {/* Controls */}
          <div className="certs-controls">
            <div className="certs-search">
              <FaMagnifyingGlass aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search certifications..."
                aria-label="Search certifications"
              />
            </div>

            <div className="certs-filters" aria-label="Filters">
              <span className="filter-icon" aria-hidden="true">
                <FaFilter />
              </span>

              <button
                type="button"
                className={`filter-btn ${filter === "All" ? "active" : ""}`}
                onClick={() => setFilter("All")}
              >
                All
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "Completed" ? "active" : ""}`}
                onClick={() => setFilter("Completed")}
              >
                Completed
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === "In Progress" ? "active" : ""}`}
                onClick={() => setFilter("In Progress")}
              >
                In Progress
              </button>
            </div>
          </div>

          {/* Completed section only when needed */}
          {showCompleted && (
            <section className="certs-section">
              <div className="certs-section-head">
                <h2>Completed</h2>
                <span className="section-pill done">
                  <FaCircleCheck aria-hidden="true" /> {completedList.length}
                </span>
              </div>

              {completedList.length === 0 ? (
                <p className="empty-text">No completed certifications match your search.</p>
              ) : (
                <div className="certs-grid">
                  {completedList.map((c, i) => (
                    <article
                      key={c.slug}
                      className="cert-card"
                      style={{ animationDelay: `${70 + i * 60}ms` }}
                    >
                      <div className="cert-top">
                        <div className="cert-badge done" aria-hidden="true">
                          <FaCertificate />
                        </div>

                        <div className="cert-title">
                          <h3>{c.title}</h3>
                          <p className="cert-issuer">{c.issuer}</p>
                        </div>
                      </div>

                      <div className="cert-row">
                        <span className="cert-status done">Completed</span>
                        <span className="cert-date">{c.dateText}</span>
                      </div>

                      {/*  short description on the list page */}
                      <p className="cert-desc">{c.summary}</p>

                      <div className="cert-skills">
                        {c.skills.map((s) => (
                          <span className="cert-skill-pill" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="cert-actions">
                        <Link className="cert-link" to={`/certifications/${c.slug}`}>
                          Learn More
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* In progress section only when needed */}
          {showInProgress && (
            <section className="certs-section">
              <div className="certs-section-head">
                <h2>In Progress</h2>
                <span className="section-pill prog">
                  <FaHourglassHalf aria-hidden="true" /> {inProgressList.length}
                </span>
              </div>

              {inProgressList.length === 0 ? (
                <p className="empty-text">No in-progress certifications match your search.</p>
              ) : (
                <div className="certs-grid">
                  {inProgressList.map((c, i) => (
                    <article
                      key={c.slug}
                      className="cert-card"
                      style={{ animationDelay: `${70 + i * 60}ms` }}
                    >
                      <div className="cert-top">
                        <div className="cert-badge prog" aria-hidden="true">
                          <FaCertificate />
                        </div>

                        <div className="cert-title">
                          <h3>{c.title}</h3>
                          <p className="cert-issuer">{c.issuer}</p>
                        </div>
                      </div>

                      <div className="cert-row">
                        <span className="cert-status prog">In Progress</span>
                        <span className="cert-date">{c.dateText}</span>
                      </div>

                      {/*  short description on the list page */}
                      <p className="cert-desc">{c.summary}</p>

                      <div className="cert-skills">
                        {c.skills.map((s) => (
                          <span className="cert-skill-pill" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="cert-actions">
                        <Link className="cert-link" to={`/certifications/${c.slug}`}>
                          Learn More
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
