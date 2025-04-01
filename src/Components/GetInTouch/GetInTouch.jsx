import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="contact" className="section">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span>
      </h2>
      <div className="contact-container">
        <div className="contact-content" data-aos="fade-up">
          <p className="contact-description">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <CgMail />
              </div>
              <div className="contact-detail-info">
                <h4>Email</h4>
                <a href="mailto:himanshumishra389@gmail.com">
                  himanshumishra389@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <BsFillTelephoneFill />
              </div>
              <div className="contact-detail-info">
                <h4>Phone</h4>
                <a href="tel:+919354111045">+91-9354111045</a>
              </div>
            </div>
          </div>
          
          <div className="contact-socials">
            <h4>Connect on Social Media</h4>
            <div className={`social-links ${themename}`}>
              <a
                href="https://www.linkedin.com/in/himanshu-mishra-5302b4189/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-link linkedin"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/HIMANSHUMISHRA389"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-link github"
              >
                <VscGithub />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:himanshumishra389@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="social-link email"
              >
                <CgMail />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
