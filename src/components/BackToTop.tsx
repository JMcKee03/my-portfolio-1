import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button only when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {  // show after 300px scroll
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
