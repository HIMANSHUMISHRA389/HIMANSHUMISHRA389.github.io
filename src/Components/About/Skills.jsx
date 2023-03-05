import React from "react";
import "./Introduction.css";
import "./Skills.css"
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


const Skills = () => {
    const [{ themename }] = React.useContext(ThemeContext);
  return (
    
    <div style={{marginTop:"10rem"}}>
      
        <h2 className="section__title different">SKILLS</h2>
        <div style={{paddingLeft:"35%"}}>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                FrontEnd Development{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Data Structure Algorithm{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Online Collaboration{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Responsive Layouts{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Communication Skills{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Individual & Team Player{" "}
              </h4>
              </div>

    </div>
  )
}

export default Skills