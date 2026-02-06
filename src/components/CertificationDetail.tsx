import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "./CertificationDetail.css";
import { CERTS } from "./Certifications";
import { FaArrowLeft, FaCalendarDays, FaImages, FaCode } from "react-icons/fa6";

const CertificationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const cert = useMemo(() => CERTS.find((c) => c.slug === slug), [slug]);

  if (!slug || !cert) return <Navigate to="/certifications" replace />;

  return (
    <section className="cert-detail-page">
      <div className="cert-detail-wrap">
        <div className="cert-detail-topbar">
          <Link to="/certifications" className="cert-back">
            <FaArrowLeft /> Back to Certifications
          </Link>
        </div>

        {/* HERO */}
        <section className="cert-hero">
          <div className="cert-hero-banner">
            <div className="cert-hero-icon" aria-hidden="true">
              <FaCode />
            </div>

            <div
              className={`cert-hero-status ${
                cert.status === "Completed" ? "done" : "prog"
              }`}
            >
              {cert.status}
            </div>
          </div>

          <div className="cert-hero-body">
            <h1>{cert.title}</h1>
            <p className="cert-hero-issuer">{cert.issuer}</p>

            <div className="cert-hero-meta">
              <div className="meta-item">
                <FaCalendarDays aria-hidden="true" />
                <div>
                  <span className="meta-label">Date Earned</span>
                  <span className="meta-value">{cert.dateText}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="cert-section">
          <h2>About This Certification</h2>
          <p>{cert.description}</p>
        </section>

        {/* IMAGES */}
        <section className="cert-section">
          <div className="cert-section-head">
            <h2>Certification Images</h2>
            <span className="section-chip">
              <FaImages /> {cert.images.length}
            </span>
          </div>

          <div className="cert-images">
            {cert.images.map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt={`${cert.title} ${i + 1}`}
                className="cert-thumb"
                onClick={() => setActiveImg(src)}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/placeholder-cert.png";
                }}
              />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="cert-section">
          <h2>Skills Gained from This Certification</h2>
          <div className="cert-skill-pills">
            {cert.skills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* EXPLORE MORE */}
        <section className="cert-explore">
          <h2>Explore More</h2>

          <div className="explore-grid">
            <div className="explore-card">
              <h3>All Skills</h3>
              <p>View tech skills</p>
              <Link to="/skills" className="explore-btn">
                View Skills →
              </Link>
            </div>

            <div className="explore-card">
              <h3>Projects</h3>
              <p>Check out projects where I’ve applied these learnings</p>
              <Link to="/projects" className="explore-btn">
                View Projects →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/*  CLICK-TO-ZOOM MODAL */}
      {activeImg && (
        <div className="cert-modal" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="Zoomed certificate" />
        </div>
      )}
    </section>
  );
};

export default CertificationDetail;
