import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";
import './FeaturedProjectsStyle.css';

const FeaturedProject = () => {
  return (
    <section className="featured-project">
      <div className="featured-card fade-in">
        <span className="featured-label">Featured Project</span>

        <h2>RainCheck</h2>
        <p className="featured-description">
          A responsive weather application that fetches real-time data from an API
          and presents it in a clean, user-friendly interface with dynamic visuals
          based on current conditions.
        </p>

        <ul className="tech-stack">
          <li>React</li>
          <li>TypeScript</li>
          <li>API Integration</li>
          <li>CSS</li>
        </ul>

        <div className="featured-actions">


  <a
    href="https://github.com/JMcKee03/WeatherApp"
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
