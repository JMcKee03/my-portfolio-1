import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkTogether from "./components/WorkTogether";
import BackToTop from "./components/BackToTop";
import FeaturedProjects from "./components/FeaturedProjects";
import Recognition from "./components/Recognition";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import CertificationDetail from "./components/CertificationDetail";
import Experience from "./components/Experience";
import ExperienceDetail from "./components/ExperienceDetail";

const App: React.FC = () => {
  return (
    <>
      <div className="app-background">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WorkTogether />
                <Recognition />
                <FeaturedProjects />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />

          {/* Certifications */}
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certifications/:slug" element={<CertificationDetail />} />

          {/* Experience */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default App;
