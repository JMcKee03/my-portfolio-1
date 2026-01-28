import React from "react";
import "./WorkTogetherStyle.css";
import { FaLaptopCode, FaLock, FaCloud, FaServer, FaDatabase, FaVial } from "react-icons/fa";

const WorkTogether: React.FC = () => {
  return (
    <section className="work-together">
      <div className="work-card">
        <div className="work-header">
          <h2>Let's Work Together</h2>
        </div>
        <p>
          I'm currently looking for internship and entry-level opportunities in:
        </p>

        <div className="work-grid">
          <div className="work-item">
            <FaLaptopCode size={24} /> Full-Stack Development
          </div>
          <div className="work-item">
            <FaLock size={24} /> CyberSecurity
          </div>
          <div className="work-item">
            <FaCloud size={24} /> Cloud Engineering
          </div>
          <div className="work-item">
            <FaServer size={24} /> DevOps / DevSecOps
          </div>
          <div className="work-item">
            <FaDatabase size={24} /> Data Engineer
          </div>
          <div className="work-item">
            <FaVial size={24} /> Test Engineer
          </div>
        </div>

        <p className="graduation">
          Expected graduation: <strong>May 2027</strong> from Ashland University
        </p>
      </div>
    </section>
  );
};

export default WorkTogether;
