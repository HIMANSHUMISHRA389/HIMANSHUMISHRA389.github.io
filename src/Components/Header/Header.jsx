import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        {/* style={{backgroundColor: "white",  position:"fixed", margin:"auto"}} */}
        <h3>
          <a href="#home" className="link">
            <span></span>
            Himanshu
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
