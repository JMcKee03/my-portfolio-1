import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          Jeremiah McKee
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="/certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </Link>
          <Link to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
