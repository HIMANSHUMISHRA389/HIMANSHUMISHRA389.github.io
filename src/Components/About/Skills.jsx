import React from "react";
import "./Introduction.css";
import "./Skills.css"
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/theme";


const Skills = () => {
    React.useContext(ThemeContext);
  return (
    <div id="skills" style={{ marginTop: "10rem" }}>
      <h2 className="section__title different">SKILLS</h2>
      <div style={{ paddingLeft: "35%" }}>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          FrontEnd Development{" "}
        </h4>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          Data Structure Algorithm{" "}
        </h4>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          Online Collaboration{" "}
        </h4>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          Responsive Layouts{" "}
        </h4>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          Communication Skills{" "}
        </h4>
        <h4 className="different skills-card">
          <span className="icons skills-card-img">
            <ExitToAppIcon />
          </span>
          Individual & Team Player{" "}
        </h4>
      </div>
    </div>
  );
}

export default Skills