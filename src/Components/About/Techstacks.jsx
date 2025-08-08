import React from "react";
import "./Techstacks.css";
import { FaReact } from "react-icons/fa";
import {
    SiRedux,
    SiHtml5,
    SiChakraui,
    SiNetlify,
    SiNodedotjs,
    SiNodemon,
    SiPostman,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGodaddy
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";
import { SignalWifi1BarLockTwoTone } from "@mui/icons-material";

export const Techstacks = () => {
    return (
        <>
        
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">TECH STACKS</h2>
                <div className="techsection">

                    <div>
                        <SiHtml5 />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <DiCss3 />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <SiJavascript />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <FaReact />
                        <h5>React</h5>
                    </div>
                    <div>
                        <SiRedux />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <SiChakraui />
                        <h5>Chakra UI</h5>
                    </div>
                    <div>
                        <VscGithub />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <BsBootstrap />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <SiNetlify />
                        <h5>Netlify</h5>
                    </div>
                    <div>
                        <SiHeroku />
                        <h5>Heroku</h5>
                    </div>
                    <div>
                        <SiNodedotjs />
                        <h5>Node Js</h5>
                    </div>
                    <div>
                        <SiNodemon />
                        <h5>Nodemon</h5>
                    </div>
                    <div>
                        <SiPostman />
                        <h5>Postman</h5>
                    </div>
                    <div>
                        <SiExpress />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <SiMongodb />
                        <h5>Mongodb</h5>
                    </div>
                    <div>
                        <SiMysql />
                        <h5>MySQL</h5>
                    </div>
                    <div>
                        <SignalWifi1BarLockTwoTone />
                        <h5>Lottie Animations</h5>
                    </div>
                    <div>
                        <SiGodaddy />
                        <h5>Go Daddy</h5>
                    </div>

                    

                </div>
            </div>
            
        </>
    );
};