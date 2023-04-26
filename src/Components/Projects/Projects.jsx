import React from "react";
import "./Projects.css";
import { SiHtml5, SiJavascript, SiRedux } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {TbBrandRedux} from "react-icons/tb"

// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div
            className="projects_container project-card"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://d2njprwt6vp5kv.cloudfront.net/vendor/6401/main/06182020fg1592500001054.jpg"
                    alt="Lovoda"
                  />
                </div>
              </div>
              <div className="project_information project-description">
                <h2 className="project-title">Lovoda</h2>
                <p>
                  Lovoda is an online jewelry and accessories brand located in
                  Hanover, Maryland. it is a brand that thrives on providing
                  jewelry that is stunning, high quality, and timeless to you.
                </p>
                <div className="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    className="project-deployed-link"
                    href="https://lovodarachnacom.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    className="project-github-link"
                    href="https://github.com/rajyadav0001/Lovoda-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="projects_container project-card"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/News/2023/February/trivago%20q4%202022.png?tr=w-600%2Ch-300%2Cfo-auto"
                    alt="Trivago"
                  />
                </div>
              </div>
              <div className="project_information project-description">
                <h2 className="project-title">Trivago</h2>
                <p>
                  trivago is a hotel search with an extensive price comparison.
                  The prices shown come from numerous hotels and booking
                  websites.
                </p>
                <div className="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    className="project-deployed-link"
                    href="https://trivago-clone0.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    className="project-github-link"
                    href="https://github.com/ArjoshwaDmello/trivago-Clone-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="projects_container project-card"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://img.webdesign-inspiration.com/v7/webdesign-inspiration.com/uploads/design/2014-09/style-com-18675.png"
                    alt="Farfetch"
                  />
                </div>
              </div>
              <div className="project_information project-description">
                <h2 className="project-title">Farfetch</h2>
                <p>
                  Farfetch is a British-Portuguese online luxury fashion retail
                  platform that sells products from over 700 boutiques and
                  brands from around the world.
                </p>
                <div className="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <FaReact />
                  <SiRedux />
                  <FaNodeJs/>
                </div>
                <div>
                  <a
                    className="project-deployed-link"
                    href="https://farfetchclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    className="project-github-link"
                    href="https://github.com/HIMANSHUMISHRA389/Farfetch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
