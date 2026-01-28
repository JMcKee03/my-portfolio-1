import React from "react";
import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCode,
  FaRocket,
} from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "RainCheck",
    description:
      "A responsive weather application that fetches real-time data from an API and presents it with dynamic visuals based on current conditions.",
    tech: ["React", "TypeScript", "API Integration", "CSS"],
    codeUrl: "https://github.com/JMcKee03/RainCheck",
    demoUrl: "https://your-live-demo-link.com", // TODO: replace
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React + TypeScript featuring modern UI, animations, and sections for projects, experience, and contact.",
    tech: ["React", "TypeScript", "CSS"],
    codeUrl: "https://github.com/your-username/portfolio", // TODO: replace
    demoUrl: "https://your-portfolio-link.com", // TODO: replace
  },
  {
    title: "Algorithm Visualizer",
    description:
      "A visual tool to demonstrate algorithm behavior with clean UI and step-by-step execution to help learning and debugging.",
    tech: ["TypeScript", "React", "Algorithms"],
    codeUrl: "https://github.com/your-username/algorithm-visualizer", // TODO: replace
  },
  {
    title: "Cloud Notes App",
    description:
      "A simple notes app with authentication and cloud storage, focused on clean UX and secure data handling.",
    tech: ["React", "Auth", "Cloud", "Security"],
    codeUrl: "https://github.com/your-username/cloud-notes", // TODO: replace
  },
];

const Projects: React.FC = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Projects</h2>
          <p className="projects-subtitle">
            A selection of projects showcasing full-stack development, clean UI,
            and practical problem-solving.
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
                {featured.demoUrl && (
                  <a
                    href={featured.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn primary"
                  >
                    <FaRocket aria-hidden="true" />
                    Live Demo
                  </a>
                )}

                <a
                  href={featured.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-btn secondary"
                >
                  <FaGithub aria-hidden="true" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="projects-grid" role="list">
          {rest.map((p) => (
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
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn ghost"
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live Demo
                  </a>
                )}

                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-btn ghost"
                >
                  <FaGithub aria-hidden="true" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
