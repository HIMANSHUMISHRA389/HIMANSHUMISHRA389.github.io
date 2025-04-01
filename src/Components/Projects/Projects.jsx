import React from "react";
import "./Projects.css";
import { SiChakraui, SiHtml5, SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {TbBrandRedux} from "react-icons/tb"
import easyTagImage from '../../assets/Images/EasyTag/easyTag.png';
import TradeQ from "../../assets/Images/TradeQ/Screenshot 2025-04-01 225418.png";
import farfetchImage from "../../assets/Images/FarFetch/image.png";
// import { IoLogoJavascript } from "react-icons/io";

// Project Card Component
const ProjectCard = ({ image, title, description, techStack, liveLink, codeLink }) => {
  // Function to render the appropriate tech stack icons
  const renderTechIcons = (tech) => {
    const techComponents = {
      html: <SiHtml5 key="html" />,
      css: <DiCss3 key="css" />,
      javascript: <SiJavascript key="javascript" />,
      react: <FaReact key="react" />,
      redux: <SiRedux key="redux" />,
      node: <FaNodeJs key="node" />,
      json: <VscJson key="json" />,
      chakraui: <SiChakraui key="chakraui" />,
      tailwindcss: <SiTailwindcss key="tailwindcss" />
    };
    
    return tech.map(item => techComponents[item]);
  };

  return (
    <div className="projects_container project-card" data-aos="fade-right">
      <div className="project">
        <div className="project_videocontainer">
          <div>
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="project_information project-description">
          <h2 className="project-title">{title}</h2>
          <p>{description}</p>
          <div className="project-tech-stack">
            {renderTechIcons(techStack)}
          </div>
          <div>
            <a
              className="project-deployed-link"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <span type="button" className="btns onbt">
                Go Live
              </span>
            </a>
            {/* <a
              className="project-github-link"
              href={codeLink}
              target="_blank"
              rel="noreferrer"
            >
              <span type="button" className="btns onbt">
                View Code
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  // Project data array
  const projectsData = [
    {
      image: easyTagImage,
      title: "EazyTag Product",
      description: "EazyTag is a web platform that enables vehicle owners to purchase QR codes for their vehicles. In case of emergencies or mishaps, anyone can scan the QR code to contact the vehicle owner via phone call, SMS, or video call. The platform ensures complete privacy, as no contact numbers or personal details are shared with the person scanning the code.",
      techStack: ["html", "css", "javascript","react","tailwindcss"],
      liveLink: "https://eazytag.com/",
      codeLink: "https://github.com/rajyadav0001/Lovoda-clone"
    },
    {
      image: TradeQ,
      title: "TradeQ Product",
      description: "TradeQ is a comprehensive trading platform that offers advanced charting tools, real-time market predictions, and analytics to help traders make informed decisions. It features customizable dashboards, multiple timeframe analysis, and automated trading strategies for both beginners and experienced traders.",
      techStack: ["html", "css", "javascript","react","chakraui", "redux"],
      liveLink: "https://tdqbe.com/app/login",
      codeLink: "https://github.com/rajyadav0001/Lovoda-clone"
    },





    {
      image: "https://d2njprwt6vp5kv.cloudfront.net/vendor/6401/main/06182020fg1592500001054.jpg",
      title: "Lovoda",
      description: "Lovoda is an online jewelry and accessories brand located in Hanover, Maryland. it is a brand that thrives on providing jewelry that is stunning, high quality, and timeless to you.",
      techStack: ["html", "css", "javascript"],
      liveLink: "https://lovodarachnacom.netlify.app/",
      codeLink: "https://github.com/rajyadav0001/Lovoda-clone"
    },
    {
      image:farfetchImage,
      title: "Farfetch",
      description: "Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world.",
      techStack: ["html", "css", "javascript", "react", "redux", "node"],
      liveLink: "https://farfetchclone.netlify.app/",
      codeLink: "https://github.com/HIMANSHUMISHRA389/Farfetch"
    }
    // Add more projects here
  ];

  return (
    <>
      <div id="projects" className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};
