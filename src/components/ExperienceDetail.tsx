import React, { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./ExperienceDetail.css";
import { EXPERIENCES } from "./Experience";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  FaArrowLeft,
  FaLocationDot,
  FaCalendarDays,
  FaBriefcase,
  FaCircleCheck,
} from "react-icons/fa6";

const ExperienceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const job = useMemo(() => EXPERIENCES.find((e) => e.slug === slug), [slug]);

  if (!slug || !job) return <Navigate to="/experience" replace />;

  return (
    <section className="expd-page">
      <div className="expd-wrap">
        <div className="expd-topbar">
          <Link to="/experience" className="expd-back">
            <FaArrowLeft /> Back to Experience
          </Link>
        </div>

        <section className="expd-hero">
          <div className={`expd-banner ${job.bannerTone}`}>
            <div className="expd-icon" aria-hidden="true">
              {job.icon}
            </div>
            <div className="expd-title">
              <h1>{job.role}</h1>
              <p>{job.company}</p>
            </div>
            

            <span className="expd-chip">{job.type}</span>
            
          </div>

          <div className="expd-meta">
            <div className="expd-meta-chip">
              <FaLocationDot aria-hidden="true" />
              <span>{job.location}</span>
            </div>
            <div className="expd-meta-chip">
              <FaCalendarDays aria-hidden="true" />
              <span>{job.dateRange}</span>
            </div>
            <div className="expd-meta-chip">
              <FaBriefcase aria-hidden="true" />
              <span>{job.type}</span>
            </div>
            {job.websiteUrl && (
                <a
                    href={job.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="expd-btn primary expd-website"
                >
                    Visit Live Website <FaArrowUpRightFromSquare />
                </a>
            )}

          </div>
        </section>

        <section className="expd-section">
          <h2>Key Achievements</h2>
          <ul className="expd-list">
            {job.details.map((d, i) => (
              <li key={`${job.slug}-d-${i}`}>
                <span className="expd-check" aria-hidden="true">
                  <FaCircleCheck />
                </span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="expd-section">
          <h2>Skills & Tools</h2>
          <div className="expd-skills">
            {job.skills.map((s) => (
              <span className="expd-skill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="expd-explore">
          <h2>Explore More</h2>
          <div className="expd-explore-grid">
            <div className="expd-explore-card">
              <h3>Projects</h3>
              <p>Check out projects where I’ve applied these learnings</p>
              <Link to="/projects" className="expd-btn">
                View Projects →
              </Link>
            </div>

            <div className="expd-explore-card">
              <h3>Certifications</h3>
              <p>View related certifications I’ve earned</p>
              <Link to="/certifications" className="expd-btn">
                View Certifications →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExperienceDetail;
