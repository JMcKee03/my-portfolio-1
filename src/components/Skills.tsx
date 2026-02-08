import React, { useMemo, useState } from "react";
import "./Skills.css";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBolt
} from "react-icons/fa";

type Level = "Beginner" | "Intermediate" | "Intermediate-Advanced" | "Advanced";

type Category = "Languages" | "Frontend" | "Backend" | "Database" | "DevOps & Tools";

type Skill = {
  category: Category;
  name: string;
  level: Level;
  icon: React.ReactNode;
  blurb: string;
};

const categories: { key: Category; icon: React.ReactNode }[] = [
  { key: "Languages", icon: <FaCode /> },
  { key: "Frontend", icon: <FaLaptopCode /> },
  { key: "Backend", icon: <FaServer /> },
  { key: "Database", icon: <FaDatabase /> },
  { key: "DevOps & Tools", icon: <FaTools /> },
];

const skills: Skill[] = [
  // Languages
  {
    category: "Languages",
    name: "JavaScript",
    level: "Advanced",
    icon: <FaBolt />,
    blurb: "Modern ES features, DOM, async patterns, clean UI logic.",
  },
  {
    category: "Languages",
    name: "TypeScript",
    level: "Intermediate",
    icon: <FaCode />,
    blurb: "Types, interfaces, props safety, cleaner React architecture.",
  },
  {
    category: "Languages",
    name: "Python",
    level: "Intermediate-Advanced",
    icon: <FaCode />,
    blurb: "Scripting, automation, fundamentals, data-friendly patterns.",
  },
  {
    category: "Languages",
    name: "Java",
    level: "Intermediate-Advanced",
    icon: <FaCode />,
    blurb: "OOP, coursework projects, data structures & algorithms.",
  },
  {
    category: "Languages",
    name: "C++",
    level: "Intermediate",
    icon: <FaCode />,
    blurb: "Memory management, pointers, and performance-focused problem solving.",
  },
  {
    category: "Languages",
    name: "C",
    level: "Intermediate",
    icon: <FaCode />,
    blurb: "Low-level programming fundamentals and systems-oriented thinking.",
  },

  // Frontend
  {
    category: "Frontend",
    name: "React",
    level: "Intermediate-Advanced",
    icon: <FaLaptopCode />,
    blurb: "Components, hooks, routing, responsive layouts, UI polish.",
  },
  {
    category: "Frontend",
    name: "CSS / UI",
    level: "Intermediate-Advanced",
    icon: <FaLaptopCode />,
    blurb: "Modern layouts, animations, glass UI, consistent styling.",
  },
  {
    category: "Frontend",
    name: "Responsive Design",
    level: "Intermediate-Advanced",
    icon: <FaLaptopCode />,
    blurb: "Mobile-first layouts, media queries, and adaptive components.",
  },
  {
    category: "Frontend",
    name: "Flexbox & Grid",
    level: "Advanced",
    icon: <FaLaptopCode />,
    blurb: "Complex layouts using modern CSS grid and flexbox systems.",
  },
  {
    category: "Frontend",
    name: "Component Architecture",
    level: "Intermediate",
    icon: <FaLaptopCode />,
    blurb: "Reusable, maintainable component patterns and clean project structure.",
  },
  {
    category: "Frontend",
    name: "CSS Animations",
    level: "Intermediate",
    icon: <FaLaptopCode />,
    blurb: "Transitions, hover effects, and subtle motion for polished UI.",
  },

  // Backend
  {
    category: "Backend",
    name: "REST APIs",
    level: "Intermediate",
    icon: <FaServer />,
    blurb: "Building/integrating endpoints with loading states & error handling.",
  },
  {
    category: "Backend",
    name: "Node.js (Basics)",
    level: "Intermediate",
    icon: <FaServer />,
    blurb: "JavaScript runtime basics and simple server-side workflows.",
  },
  {
    category: "Backend",
    name: "Express.js (Basics)",
    level: "Beginner",
    icon: <FaServer />,
    blurb: "Creating simple routes, middleware basics, and API structure.",
  },
  {
    category: "Backend",
    name: "Authentication (Basics)",
    level: "Beginner",
    icon: <FaServer />,
    blurb: "Understanding auth flows (sessions/JWT concepts) and protected routes.",
  },
  {
    category: "Backend",
    name: "API Testing",
    level: "Intermediate",
    icon: <FaServer />,
    blurb: "Testing endpoints with Postman/Insomnia and validating responses.",
  },
  {
    category: "Backend",
    name: "Error Handling & Logging",
    level: "Intermediate",
    icon: <FaServer />,
    blurb: "Consistent error handling, status codes, and debugging workflows.",
  },

  // Database
  {
    category: "Database",
    name: "SQL",
    level: "Intermediate",
    icon: <FaDatabase />,
    blurb: "Queries, joins, schema basics, and relational thinking.",
  },
  {
    category: "Database",
    name: "Database Design (Basics)",
    level: "Intermediate",
    icon: <FaDatabase />,
    blurb: "Tables, relationships, keys, normalization, and data modeling.",
  },
  {
    category: "Database",
    name: "CRUD Operations",
    level: "Intermediate",
    icon: <FaDatabase />,
    blurb: "Create/read/update/delete patterns and working with query results.",
  },
  {
    category: "Database",
    name: "Indexes (Intro)",
    level: "Beginner",
    icon: <FaDatabase />,
    blurb: "Basic understanding of indexing and why it improves query speed.",
  },
  {
    category: "Database",
    name: "PostgreSQL / MySQL (Familiar)",
    level: "Intermediate",
    icon: <FaDatabase />,
    blurb: "Comfortable working in common relational DB environments.",
  },

  // DevOps & Tools
  {
    category: "DevOps & Tools",
    name: "Git & GitHub",
    level: "Intermediate-Advanced",
    icon: <FaTools />,
    blurb: "Branches, PRs, collaboration workflows, clean commit history.",
  },
  {
    category: "DevOps & Tools",
    name: "Deployment (Vercel / Netlify)",
    level: "Intermediate",
    icon: <FaTools />,
    blurb: "Deploying SPAs, environment variables, and production builds.",
  },
  {
    category: "DevOps & Tools",
    name: "NPM / Package Management",
    level: "Intermediate",
    icon: <FaTools />,
    blurb: "Managing dependencies, scripts, and project tooling with npm.",
  },
  {
    category: "DevOps & Tools",
    name: "CLI / Terminal",
    level: "Intermediate",
    icon: <FaTools />,
    blurb: "Comfortable using terminal commands for workflow and debugging.",
  },
  {
    category: "DevOps & Tools",
    name: "VS Code / Debugging",
    level: "Intermediate-Advanced",
    icon: <FaTools />,
    blurb: "Breakpoints, console tools, extensions, and productivity workflows.",
  },
  {
    category: "DevOps & Tools",
    name: "Testing (Intro)",
    level: "Beginner",
    icon: <FaTools />,
    blurb: "Basic unit testing concepts and confidence building simple tests.",
  },
];

const softSkills = [
  "Critical Thinking",
  "Adaptability & Fast Learning",
  "Collaboration & Teamwork",
  "Initiative & Self-Motivation",
  "Communication Skills",
  "Time Management",
  "Problem Solving",
  "Attention to Detail",
  "Leadership",
  "Creativity",
  "Accountability",
  "Work Ethic",
];

const Skills: React.FC = () => {
  const [active, setActive] = useState<Category>("Languages");

  const filtered = useMemo(
    () => skills.filter((s) => s.category === active),
    [active]
  );

  return (
    <section className="skills-page">
      <div className="skills-wrap">
        <header className="skills-header">
          <h1>Technical Skills</h1>
          <p>My technical expertise and proficiency levels</p>
        </header>

        <div className="skills-panel">
          <nav className="skills-tabs" aria-label="Skill categories">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                className={`skills-tab ${active === c.key ? "active" : ""}`}
                onClick={() => setActive(c.key)}
              >
                <span className="tab-icon" aria-hidden="true">
                  {c.icon}
                </span>
                <span className="tab-text">{c.key}</span>
              </button>
            ))}
          </nav>

          <div className="skills-grid" role="list">
            {filtered.map((s, i) => (
              <article
                className="skill-card"
                role="listitem"
                key={`${s.category}-${s.name}`}
                style={{ animationDelay: `${70 + i * 70}ms` }}
              >
                <div className="skill-top">
                  <div className="skill-logo" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="skill-meta">
                    <h3>{s.name}</h3>
                    <span className="skill-level">{s.level}</span>
                  </div>
                </div>

                <p className="skill-blurb">{s.blurb}</p>


              </article>
            ))}
          </div>

          <section className="soft-panel">
            <div className="soft-head">
              <h2>Soft Skills</h2>
              <p>
                Core interpersonal and professional skills that complement
                technical expertise.
              </p>
            </div>

            <div className="soft-pills">
              {softSkills.map((t) => (
                <span className="soft-pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Skills;
