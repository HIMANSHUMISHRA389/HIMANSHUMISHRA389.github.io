import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import GetAppIcon from "@mui/icons-material/GetApp";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import Skills from "./Skills";
import resume from "../../assets/himanshuresume.pdf";


export const About = () => {
  return (
    <>
      <div id="about" className="about center section">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am{" "}
          <span id="user-detail-name" className="about__name">
            Himanshu Mishra
          </span>
        </h1>
        <Type />
        <p id="user-detail-intro" className="about__desc" data-aos="fade-right">
          Experienced MERN Stack Developer with 2.5 years of professional experience.
          Strong team player with leadership qualities, adept at building robust web
          applications using MongoDB, Express.js, React, and Node.js. Proficient in
          HTML, CSS, and JavaScript with a proven track record in companies.
          Equipped with diverse tools & technologies and passionate about continuous learning
          and innovation.
        </p>
        <div id="contact" className="about__contact center ">
          <a
            id="contact-github"
            href="https://github.com/HIMANSHUMISHRA389"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            id="contact-email"
            href="mailto:himanshumishra389@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            id="contact-phone"
            href="tel:+91-9354111045"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/himanshu-mishra-5302b4189/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://x.com/himanshumi389" //twitter dalna h
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <a href={resume} download>
          <button id="resume-link-2" className="btnResume">
            Resume <GetAppIcon className="resume-dwnld" />
          </button>
        </a>
      </div>
      <Introduction />

      <section id="techstack">
        <Techstacks />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </>
  );
};
