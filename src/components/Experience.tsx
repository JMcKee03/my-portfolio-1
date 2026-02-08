import React, { useMemo, useState, useEffect } from "react";
import "./Experience.css";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaLocationDot,
  FaCalendarDays,
  FaBuilding,
  FaArrowRight,
  FaCircleCheck,
  FaFilter,
  FaMagnifyingGlass,
} from "react-icons/fa6";

export type ExperienceType = "Internship" | "Part-time" | "Full-time" | "Contract";

export type Experience = {
  slug: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  type: ExperienceType;
  bannerTone: "blue" | "mint" | "purple";
  icon: React.ReactNode;
  websiteUrl?: string;          //Linked to Zollie on detail page

  highlights: string[];      // shown on the card
  details: string[];         // shown on detail page (can include more)
  skills: string[];          // chips on detail page
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "website-management-digital-marketing-intern",
    role: "Website Management & Digital Marketing Intern",
    company: "Main Street Lorain",
    location: "Lorain, Ohio",
    dateRange: "May 2024 – Aug 2024",
    type: "Internship",
    bannerTone: "blue",
    icon: <FaBriefcase />,

    highlights: [
      "Developed and optimized website features using JavaScript, HTML, and CSS to improve performance and user experience.",
      "Applied SEO best practices that resulted in a 32% increase in website traffic.",
      "Used analytics tools to monitor engagement, identify improvement areas, and guide content strategy.",
      "Collaborated on digital marketing initiatives to strengthen online visibility and branding.",
    ],

    details: [
      "Developed and optimized website features using JavaScript, HTML, and CSS, improving site performance and overall usability.",
      "Applied SEO best practices including keyword optimization, metadata updates, and content refinement, resulting in a 32% increase in traffic.",
      "Utilized analytics tools to track user engagement, identify performance gaps, and inform content strategy decisions.",
      "Supported digital marketing efforts by aligning website updates with branding and outreach goals.",
    ],

    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "SEO",
      "Web Analytics",
      "Digital Marketing",
    ],
  },

  {
  slug: "zollie-website-contract",
  role: "Contract Web Designer & Developer",
  company: "Zollie Mobile Bar",
  location: "Remote",
  dateRange: "2024",
  type: "Contract",
  bannerTone: "purple",
  icon: <FaBuilding />,

  highlights: [
    "Designed and developed a custom website for a mobile bar business to support marketing and bookings.",
    "Implemented responsive layouts to ensure accessibility across desktop and mobile devices.",
    "Collaborated with the client to align design decisions with brand identity and business goals.",
    "Delivered a polished, production-ready site tailored to small business needs.",
  ],

  details: [
    "Designed and developed a custom website for Zollie, a mobile bar-for-hire business.",
    "Implemented responsive design principles to ensure usability across mobile, tablet, and desktop devices.",
    "Worked directly with the client to translate brand identity and business goals into a functional web presence.",
    "Delivered a complete, production-ready website optimized for clarity, aesthetics, and customer engagement.",
  ],

  skills: [
    "Web Design",
    "Responsive Design",
    "HTML",
    "CSS",
    "Client Communication",
    "Branding",
  ],

  websiteUrl: "https://zollie.com", 
},
];


const ExperiencePage: React.FC = () => {

  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"All" | ExperienceType>("All");
  const [slideHeader, setSlideHeader] = useState(false);

  useEffect(() => {
    setSlideHeader(true);
  }, []);


  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return EXPERIENCES.filter((e) => {
      const matchesType = typeFilter === "All" ? true : e.type === typeFilter;
      const haystack = `${e.role} ${e.company} ${e.location} ${e.type} ${e.skills.join(" ")}`.toLowerCase();
      const matchesQuery = normalized.length === 0 ? true : haystack.includes(normalized);
      return matchesType && matchesQuery;
    });
  }, [normalized, typeFilter]);

  const types: ExperienceType[] = ["Internship", "Part-time", "Full-time", "Contract"];

  return (
    <section className="exp-page">
      <div className="exp-wrap">
        <header className="exp-header">
          <h1 className={slideHeader ? "slide-in" : ""}>Work Experience</h1>

          <p>My professional journey and key accomplishments</p>
        </header>

        <div className="exp-panel">
          {/* Controls */}
          <div className="exp-controls">
            <div className="exp-search">
              <FaMagnifyingGlass aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles, companies, skills..."
                aria-label="Search experience"
              />
            </div>

            <div className="exp-filters" aria-label="Experience filters">
              <span className="filter-icon" aria-hidden="true">
                <FaFilter />
              </span>

              <button
                type="button"
                className={`filter-btn ${typeFilter === "All" ? "active" : ""}`}
                onClick={() => setTypeFilter("All")}
              >
                All
              </button>

              {types.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`filter-btn ${typeFilter === t ? "active" : ""}`}
                  onClick={() => setTypeFilter(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="exp-list">
            {filtered.length === 0 ? (
              <p className="exp-empty">No experience matches your search.</p>
            ) : (
              filtered.map((job, idx) => (
                <article
                  key={job.slug}
                  className="exp-card"
                  style={{ animationDelay: `${70 + idx * 70}ms` }}
                >
                  {/* banner */}
                  <div className={`exp-banner ${job.bannerTone}`}>
                    <div className="exp-banner-left">
                      <div className="exp-hero-icon" aria-hidden="true">
                        {job.icon}
                      </div>

                      <div className="exp-titles">
                        <h2 className="exp-role">{job.role}</h2>
                        <p className="exp-company">{job.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* meta row */}
                  <div className="exp-meta">
                    <div className="meta-chip">
                      <FaLocationDot aria-hidden="true" />
                      <span>{job.location}</span>
                    </div>
                    <div className="meta-chip">
                      <FaCalendarDays aria-hidden="true" />
                      <span>{job.dateRange}</span>
                    </div>
                    <div className="meta-chip">
                      <FaBriefcase aria-hidden="true" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* achievements */}
                  <div className="exp-body">
                    <h3 className="exp-subhead">Key Achievements:</h3>

                    <ul className="exp-achievements">
                      {job.highlights.slice(0, 3).map((h, i) => (
                        <li key={`${job.slug}-h-${i}`}>
                          <span className="check" aria-hidden="true">
                            <FaCircleCheck />
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {job.highlights.length > 3 && (
                      <p className="exp-more">+ {job.highlights.length - 3} more achievements</p>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="exp-cta">
                    <Link className="exp-btn" to={`/experience/${job.slug}`}>
                      View Full Details <FaArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
