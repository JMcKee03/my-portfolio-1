import { FaGithub  } from "react-icons/fa";
import './FeaturedProjectsStyle.css';

const FeaturedProject = () => {
  return (
    <section className="featured-project">
      <div className="featured-card fade-in">
        <span className="featured-label">Featured Project</span>

        <h2>Internship-Tracker</h2>
        <p className="featured-description">
          A full-stack web application designed to help users organize and manage their internship search process. 
          Built with React and TypeScript for a responsive, user-friendly interface, and powered by MongoDB for efficient data storage. 
          The app allows users to track applications, monitor statuses, and manage important details in one centralized dashboard, streamlining the 
          internship hunting experience.
        </p>

        <ul className="tech-stack">
          <li>React</li>
          <li>TypeScript</li>
          <li>API Integration</li>
          <li>CSS</li>
          <li>MongoDB</li>
        </ul>

        <div className="featured-actions">


  <a
    href="https://github.com/JMcKee03/internship-tracker"
    target="_blank"
    rel="noopener noreferrer"
    className="btn secondary"
  >
    <FaGithub />
    View Code
  </a>
</div>

      </div>
    </section>
  );
};

export default FeaturedProject;
