// Projects.tsx
import "./Projects.css";
import {
  FaGithub,
  FaStar,
  FaCode,
  FaFilePowerpoint,
} from "react-icons/fa";
import React, { useMemo, useEffect, useState } from "react";

type ProjectStatus = "Completed" | "In Progress";

type Project = {
  title: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  codeUrl?: string;
  slidesUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "RainCheck",
    status: "Completed",
    description:
      "A responsive weather application that pulls real-time API data and presents it with a clean UI, dynamic visuals, and user-friendly formatting for quick decision-making.",
    tech: ["React", "TypeScript", "API Integration", "CSS"],
    codeUrl: "https://github.com/JMcKee03/WeatherApp",
    featured: true,
  },
  {
    title: "Portfolio Website",
    status: "Completed",
    description: 
      "A modern personal portfolio built with React + TypeScript featuring routed pages (Projects, Certifications, Skills), interactive UI components, and polished styling. Designed to clearly communicate projects, skills, and growth over time.",
    tech: ["React", "TypeScript", "React Router", "CSS"],
    codeUrl: "https://github.com/JMcKee03/my-portfolio-1",
  },
  {
    title: "JavaScript Game Hub",
    status: "Completed",
    description:
      "A browser-based mini game site featuring Tic-Tac-Toe, Rock Paper Scissors, and Connect 4. Built with clean game logic, DOM manipulation, and responsive layouts using reusable UI patterns.",
    tech: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    codeUrl: "https://github.com/JMcKee03/GameHub",
  },
  {
    title: "Android Matching Game",
    status: "Completed",
    description:
      "An Android memory matching game built in Android Studio with a grid-based board, score/attempt tracking, and clean state handling for card flips and match detection.",
    tech: ["Android Studio", "Kotlin", "XML Layouts", "State Management"],
    codeUrl: "https://github.com/JMcKee03/matching-game",
  },
  {
    title: "MySQL Relational Database Design",
    status: "Completed",
    description:
      "Designed and implemented a relational database using MySQL, incorporating constraints and functions to enforce data integrity and define relationships. Built a normalized schema and wrote queries to validate correctness and support real use cases.",
    tech: ["MySQL", "Relational Design", "Normalization", "SQL Queries"],
    slidesUrl: "/public/Projects/VideoGameDB470.pdf"
  },
  {
    title: "Mini-Project",
    status: "In Progress",
    description:
      "A workspace to research and implement different JS features.",
    tech: ["CSS", "JS", "HTML"],
    codeUrl: "https://github.com/JMcKee03/MiniPro"
  },
];

const Projects: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  const completed = useMemo(
    () => projects.filter((p) => p.status === "Completed"),
    []
  );

  const inProgress = useMemo(
    () => projects.filter((p) => p.status === "In Progress"),
    []
  );

  const featured = useMemo(
    () => completed.find((p) => p.featured) ?? null,
    [completed]
  );

  const completedRest = useMemo(
    () => completed.filter((p) => !p.featured),
    [completed]
  );

  const renderProjectCard = (p: Project) => (
    <article className="project-card" role="listitem" key={p.title}>
      <div className="project-card-top">
        <div className="project-icon" aria-hidden="true">
          <FaCode />
        </div>
        <h3 className="project-title">{p.title}</h3>
      </div>

      <p className="project-desc">{p.description}</p>

      <ul className="project-tech" aria-label="Technology stack">
        {p.tech.map((t) => (
          <li key={t} className="project-tech-pill">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        {p.slidesUrl && (
          <a
            href={p.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn ghost"
          >
            <FaFilePowerpoint aria-hidden="true" />
            Slides
          </a>
        )}

        {p.codeUrl && (
          <a
            href={p.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-btn ghost"
          >
            <FaGithub aria-hidden="true" />
            Code/Demo
          </a>
        )}
      </div>
    </article>
  );

  return (
    <section
      id="projects"
      className={`projects-section ${animate ? "page-enter" : ""}`}
    >
      <div className="projects-container">
        <header className="projects-header">
          <h2>Projects</h2>
          <p className="projects-subtitle">
            A selection of projects showcasing clean UI, practical problem-solving,
            and steady progress across web, mobile, and database development.
          </p>
        </header>

        {featured && (
          <div className="projects-featured" aria-label="Featured project">
            <div className="projects-featured-badge">
              <FaStar aria-hidden="true" />
              <span>Featured</span>
            </div>

            <div className="projects-featured-content">
              <div className="projects-title-row">
                <h3>{featured.title}</h3>
              </div>

              <p className="projects-desc">{featured.description}</p>

              <ul className="projects-tech" aria-label="Technology stack">
                {featured.tech.map((t) => (
                  <li key={t} className="projects-tech-pill">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="projects-actions">
                {featured.codeUrl && (
                  <a
                    href={featured.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn primary"
                  >
                    <FaGithub aria-hidden="true" />
                    Code/Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="projects-group">
          <div className="projects-group-head">
            <h3>Completed</h3>
            <span className="projects-count">{completed.length}</span>
          </div>

          <div className="projects-grid" role="list">
            {completedRest.map(renderProjectCard)}
          </div>
        </div>

        <div className="projects-group">
          <div className="projects-group-head">
            <h3>In Progress</h3>
            <span className="projects-count">{inProgress.length}</span>
          </div>

          {inProgress.length === 0 ? (
            <p className="empty-text">No in-progress projects yet.</p>
          ) : (
            <div className="projects-grid" role="list">
              {inProgress.map(renderProjectCard)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
