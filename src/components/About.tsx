import React from "react";
import "./About.css";
import {
  FaUser,
  FaGraduationCap,
  FaTrophy,
  FaUsers,
  FaBookOpen,
  FaLinkedin 
} from "react-icons/fa";
import "./NavBarStyle.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>

          <p className="about-kicker">Get to know me</p>

<a
  href="https://www.linkedin.com/in/jeremiah-mckee-4552ab2ab/"
  target="_blank"
  rel="noopener noreferrer"
  className="linkedin-link"
>
  <FaLinkedin aria-hidden="true" />
  <span>Connect on LinkedIn</span>
</a>

<p className="about-subtitle">
  Learn more about my background, experience, and involvement.
</p>

        </div>

        {/* MAIN GRID */}
        <div className="about-grid">
          <div className="about-card" style={{ animationDelay: "60ms" }}>
            <div className="about-card-top">
              <span className="about-icon" aria-hidden="true">
                <FaUser />
              </span>
              <h3>About</h3>
            </div>
            <p>
              I am a motivated Computer Science student with a passion for full-stack
              development, cloud computing, and cybersecurity. I enjoy building projects
              that solve real-world problems and learning new technologies.
            </p>
          </div>

          <div className="about-card" style={{ animationDelay: "140ms" }}>
            <div className="about-card-top">
              <span className="about-icon" aria-hidden="true">
                <FaGraduationCap />
              </span>
              <h3>Education</h3>
            </div>
            <p>
              • Bachelor of Science in Computer Science <br />
              • Minor in Finance <br />
              • Ashland University <br />
              • Expected Graduation: May 2027
            </p>
          </div>

          <div className="about-card" style={{ animationDelay: "220ms" }}>
            <div className="about-card-top">
              <span className="about-icon" aria-hidden="true">
                <FaTrophy />
              </span>
              <h3>Awards</h3>
            </div>
            <p>
              • Dean’s List <br />
              • Scholar All-American <br />
              • Merit-Based Academic Scholarship
            </p>
          </div>

          <div className="about-card" style={{ animationDelay: "300ms" }}>
            <div className="about-card-top">
              <span className="about-icon" aria-hidden="true">
                <FaUsers />
              </span>
              <h3>Involvement</h3>
            </div>
            <p>
              • Member, University ACM Coding Club <br />
              • Varsity Wrestler – Ashland University <br />
              • Participant, Open Source Projects on GitHub
            </p>
          </div>
        </div>

        {/* RELEVANT COURSEWORK */}
        <div className="about-card about-coursework" style={{ animationDelay: "380ms" }}>
          <div className="about-card-top">
            <span className="about-icon" aria-hidden="true">
              <FaBookOpen />
            </span>
            <h3>Relevant Coursework</h3>
          </div>

          <div className="coursework-sections">
            <div className="coursework-section">
              <p className="coursework-label">Core Computer Science</p>
              <div className="coursework-grid">
                <span className="course-pill">Logic & Computing (CS 101)</span>
                <span className="course-pill">Computer Programming I (CS 121)</span>
                <span className="course-pill">Computer Programming II (CS 122)</span>
                <span className="course-pill">Data Structures (CS 230)</span>
                <span className="course-pill">Intro to AI (CS 215)</span>
                <span className="course-pill">Social, Ethical & Professional Issues (CS 210)</span>
                <span className="course-pill">Computer Architecture (CS 301)</span>
                <span className="course-pill">Computer Algorithms (CS 303)</span>
                <span className="course-pill">Advanced Programming (CS 321)</span>
                <span className="course-pill">Principles of Operating Systems (CS 421)</span>
                <span className="course-pill">Software Development / Capstone (CS 499)</span>
              </div>
            </div>

            <div className="coursework-section">
              <p className="coursework-label">Supporting Courses</p>
              <div className="coursework-grid">
                <span className="course-pill">Discrete Mathematics I (MATH 223)</span>
                <span className="course-pill">Discrete Mathematics II (MATH 224)</span>
                <span className="course-pill">Linear Algebra (MATH 307)</span>
                <span className="course-pill">Systems Analysis & Design (MIS 372)</span>
                <span className="course-pill">Database Management (MIS 470)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
