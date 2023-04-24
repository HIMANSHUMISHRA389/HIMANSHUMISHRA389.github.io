import React from "react";
import "./Projects.css";
import {
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/13122-2_2000x.jpg?v=1645120932"
                    alt="Lovoda"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Lovoda</h2>
                <p>
                  Lovoda is an online jewelry and accessories brand located in
                  Hanover, Maryland. it is a brand that thrives on providing
                  jewelry that is stunning, high quality, and timeless to you.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://lovodarachnacom.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
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
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://ik.imgkit.net/3vlqs5axxjf/PCWW/uploadedImages/Articles/News/2023/February/trivago%20q4%202022.png?tr=w-600%2Ch-300%2Cfo-auto"
                    alt="Trivago"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Trivago</h2>
                <p>
                  trivago is a hotel search with an extensive price comparison.
                  The prices shown come from numerous hotels and booking
                  websites.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://trivago-clone0.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
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
        </div>
      </div>
    </>
  );
};