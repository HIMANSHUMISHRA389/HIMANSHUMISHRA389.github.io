import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <div>
        <nav className="center nav nav-menu">
          <ul
            style={{ display: showNavList ? "flex" : null }}
            className="nav__list"
          >
            <li
              className="nav__list-item
            "
            >
              <a
                href="#about"
                onClick={() => toggleNavList("#about")}
                className="link link--nav"
              >
                About
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#techstack"
                onClick={() => toggleNavList("#techstack")}
                className="link link--nav"
              >
                Tech Stacks
              </a>
            </li>
            <li className="nav__list-item nav-link skills">
              <a
                href="#skills"
                onClick={() => toggleNavList("#skills")}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
            <li className="nav__list-item nav-link projects">
              <a
                href="#projects"
                onClick={() => toggleNavList("#projects")}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
            <li
              className="nav__list-item
            nav-link contact"
            >
              <a
                href="#contact"
                onClick={() => toggleNavList("#contact")}
                className="link link--nav"
              >
                Contact
              </a>
            </li>
            <li
              className="nav__list-item
            nav-link resume"
            >
              <a
                id="resume-link-2"
                href="https://drive.google.com/file/d/1o5zBq1m6sDwnhtPg4VwmoSaSUv6WgjuD/view?usp=drive_link"
                //drive link to be updated///////dalna h
                onClick={toggleNavList}
                className="link link--nav"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            {themename === "dark" ? (
              <WbSunnyRoundedIcon />
            ) : (
              <Brightness2Icon />
            )}
          </button>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>
    </>
  );
};
