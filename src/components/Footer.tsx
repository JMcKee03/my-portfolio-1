import React from 'react';
import './Footer.css';
import { FaFolderOpen, FaEnvelope } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <h2>Let's Connect</h2>
        <div className="footer-actions">
          <a
            href="mailto:jmckee03@icloud.com"
            className="btn primary"
          >
            <FaEnvelope />
            Email Me
          </a>
          <a
            href="/projects"
            className="btn secondary"
          >
            <FaFolderOpen />
            My Work
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
