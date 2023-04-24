import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import Skills from "./Skills";
import resume from "../../assets/himanshuresume.pdf";


export const About = () => {
  return (
    <>
      <div id="about" className="about section"  >
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Himanshu Mishra</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Aspiring Full Stack Web Developer- Team player with leadership
          quality, Quick learner, working extensively on MERN, HTML, CSS, and
          JavaScript looking forward to working in a product-based company.
          Attired with a variety of tools & technologies and keen to learn new
          one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/HIMANSHUMISHRA389"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:himanshumishra389@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+91-9354111045"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-mishra-5302b4189/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          
          <a
            href="https://twitter.com/"//twitter dalna h 
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <a href={resume} download>
          <button className="btnResume">
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
