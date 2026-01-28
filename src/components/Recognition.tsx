import { FaMedal, FaStar, FaTrophy } from "react-icons/fa";
import "./RecognitionStyle.css";

const Recognition = () => {
  return (
    <section className="recognition">
      <h2>Honors & Recognition</h2>

      <div className="recognition-grid">
        <div className="recognition-card">
          <FaTrophy />
          <h3>Academic Athlete</h3>
          <p>Recognized for balancing academic excellence and athletic commitment.</p>
        </div>

        <div className="recognition-card">
          <FaStar />
          <h3>Dean’s List</h3>
          <p>Awarded for outstanding academic performance.</p>
        </div>

        <div className="recognition-card">
          <FaMedal />
          <h3>Consistent Academic Achievement</h3>
          <p>Maintained strong academic standing across multiple semesters.</p>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
