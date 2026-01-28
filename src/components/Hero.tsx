import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa";



const Hero: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-card fade-in">
          <div className="hero-content">
            <h1>Jeremiah McKee</h1>
            <p className="subtitle">
              I’m a computer science student and aspiring software professional with a strong interest in building practical, 
              user-focused solutions. I enjoy working with technology to solve real-world problems, whether that’s through 
              software development, problem-solving, or learning new tools and frameworks.
            </p>

            <div className="hero-actions">
              <a href="Jeremiah McKee.pdf" download className="btn primary">
                <FaDownload />
                View Resume
              </a>
              <a
                href="https://github.com/JMcKee03"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                <FaGithub />
                View GitHub
              </a>
            </div>

            <button
              className="scroll-indicator"
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              aria-label="Scroll down one page"
            >
              ↓
            </button>



          </div>
        </div>
      </section>

    
    </>
  );
};

export default Hero;
