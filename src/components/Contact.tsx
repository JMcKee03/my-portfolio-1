import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCommentDots,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

type Social = {
  name: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  tone: "gray" | "blue" | "pink";
};

const socials: Social[] = [
  {
    name: "GitHub",
    handle: "github.com/JMcKee03",
    url: "https://github.com/JMcKee03",
    icon: <FaGithub />,
    tone: "gray",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/",
    url: "https://www.linkedin.com/in/jeremiah-mckee-4552ab2ab/",
    icon: <FaLinkedin />,
    tone: "blue",
  },
  {
    name: "Facebook",
    handle: "facebook.com/jeremiah.mckee.73",
    url: "https://www.facebook.com/jeremiah.mckee.73/",
    icon: <FaFacebook />,
    tone: "pink",
  },
];

const Contact: React.FC = () => {
  return (
    <section className="contact-page">
      <div className="contact-wrap">
        <header className="contact-header">
          <div className="contact-avatar">
            <img src="/assets/Me.png" alt="Profile" />
          </div>

          <h1>Let&apos;s Connect</h1>
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
        </header>

        <div className="contact-panel">
          <div className="contact-cards">
            <a className="contact-card" href="mailto:jmckee853@gmail.com">
              <div className="contact-icon email">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <span>jmckee853@gmail.com</span>
            </a>

            <a className="contact-card" href="tel:+12169903518">
              <div className="contact-icon phone">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <span>(216) 990-3518</span>
            </a>

            <div className="contact-card">
              <div className="contact-icon location">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <span>Ashland, Ohio</span>
            </div>
          </div>

          <section className="social-panel">
            <div className="social-panel-head">
              <div className="social-panel-icon">
                <FaCommentDots />
              </div>
              <div className="social-panel-text">
                <h2>Connect Online</h2>
                <p>Find me on these platforms</p>
              </div>
            </div>

            <div className="social-grid">
              {socials.map((s) => (
                <a
                  key={s.name}
                  className={`social-card ${s.tone}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-left">
                    <div className="social-icon">{s.icon}</div>
                    <div className="social-info">
                      <p className="social-name">{s.name}</p>
                      <p className="social-handle">{s.handle}</p>
                    </div>
                  </div>
                  <FaArrowUpRightFromSquare className="social-external" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
